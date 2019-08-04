require 'sinatra'
require 'sinatra/activerecord'
require 'json'
require_relative '../lib/models'
require 'pry'
configure { set :server, :puma }

set :root, 'lib/app'

get '/' do
  render :html, :index
end


# TODO implement react router?
get '/reviews' do
  # If the movie was saved, this means it was favorited (in this MVP). In the future, add more sound logic for filtering results, like by user.

  # list most recent movies first and just the first 10
  movies = Movie.all.order('id DESC').limit(10)

  erb :"reviews", :locals => { :favorite_movies => movies }
end

post '/reviews' do
  # TODO reorganize this code so saving of models is not in routes and extracted out

  # TODO validate params, also ensure everything is filled out
  # TODO sanitize movie title to avoid JSON parsing error
  data = JSON.parse(params.keys.first)

  # TODO check if movie exists pre-call to OMDB. Currently, this checks if movie already exists in DB during the post.
  movie = Movie.find_by_title(data["movieTitle"])

  if !movie
    movie = Movie.create(poster: data["moviePoster"], title: data["movieTitle"], year: data["movieYear"], plot: data["moviePlot"])
  end

  review = Review.create(comment: data["comment"], movie_id: movie.id, rating_value: data["rating"])

  if movie && review
    [200, {}, "Success"].to_json
  else
    [400, {}, "Please try response again."].to_json
  end
end

patch '/reviews/:id' do

  movie_id = params[:id]
  # TODO - render React component, Review to show the original review
  movies = Movie.all.order('id DESC').limit(10)

  erb :"reviews", :locals => { :favorite_movies => movies }
end

delete '/reviews/:id' do

  movie_id = params[:id]
  # TODO - Right now this just deletes one comment/rating associated with the movie, without specifying a specific one. In the future, a user id could be passed to specify which review.
  if movie_id
    Movie.find(movie_id).destroy
    Review.find_by_movie_id(movie_id).destroy
    # TODO return error message (pass errors to view i.e. object.errors), refactor to avoid multiple nesting conditionals
  end

  movies = Movie.all.order('id DESC').limit(10)

  erb :"reviews", :locals => { :favorite_movies => movies }
end