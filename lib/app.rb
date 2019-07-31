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
  # TO DO reorganize this code so it's not in routes and extracted out
  movie = Movie.create(poster: params[:moviePoster], title: params[:movieTitle], year: params[:movieYear], plot: params[:moviePlot])

  comment = Comment.create(content: params[:comment])

  review = Review.create(rating_id: params[:rating])

  if movie && comment && review
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