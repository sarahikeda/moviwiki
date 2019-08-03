require 'sinatra'
require 'sinatra/activerecord'
require 'json'
require 'pry'
require_relative '../lib/models'

configure { set :server, :puma }

set :database, "sqlite3:moviwiki.sqlite3"

set :root, 'lib/app'

get '/' do
  render :html, :index
end

post '/reviews' do
  # TO DO reorganize this code so saving of models is not in routes and extracted out

  # validate params, also ensure everything is filled out
  data = JSON.parse(params.keys.first
  )

  movie = Movie.create(poster: data["moviePoster"], title: data["movieTitle"], year: data["movieYear"], plot: data["moviePlot"])

  comment = Comment.create(content: data["comment"], movie_id: movie.id)

  rating = Rating.create(rating_value: data["rating"], movie_id: movie.id, comment_id: comment.id)

  if movie && comment && rating
    [200, {}, "Success"].to_json
  else
    [400, {}, "Please try response again."].to_json
  end
end

# To Do implement react router?
get '/reviews' do
  # If the movie was saved, this means it was favorited (in this MVP). In the future, add more sound logic for filtering results, like by user.

  # list most recent movies first and just the first 10
  movies = Movie.all.order('id DESC').limit(10)

  erb :"reviews", :locals => { :favorite_movies => movies }
end

patch '/reviews/:id' do
  movie_id = params[:id]
  # TODO - render React component, Feedback to show the original review
  movies = Movie.all.order('id DESC').limit(10)
  erb :"reviews", :locals => { :favorite_movies => movies }
end

delete '/reviews/:id' do
  movie_id = params[:id]
  # TODO - Right now this just deletes one comment/rating associated with the movie, without specifying a specific one. In the future, the Reviews view would pass a param that shows which rating is associated with the movie.
  if movie_id
    Movie.find(movie_id).destroy
    comment = Comment.find_by_movie_id(movie_id)
    # TODO return error message, refactor to avoid multiple nesting conditionals
    if comment
      rating = Rating.find_by_comment_id(comment.id)
      rating.destroy if rating
    end
  end

  movies = Movie.all.order('id DESC').limit(10)
  erb :"reviews", :locals => { :favorite_movies => movies }
end