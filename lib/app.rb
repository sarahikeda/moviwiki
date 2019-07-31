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

  movie = Movie.create(poster: data[:moviePoster], title: data[:movieTitle], year: data[:movieYear], plot: data[:moviePlot])

  comment = Comment.create(content: data[:comment], movie_id: movie.id)

  rating = Rating.create(rating_value: data[:rating], movie_id: movie.id)

  if movie && comment && rating
    [200, {}, "Success"].to_json
  else
    [400, {}, "Please try response again."].to_json
  end
end

# To Do implement react router?
get '/reviews' do
  # If the movie was saved, this means it was favorited. In the future, add more sound logic for filtering results, like by user.

  @movies = Movie.all

  erb :"reviews", :locals => { :favorite_movies => @movies }
end