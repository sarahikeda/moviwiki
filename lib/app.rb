require 'sinatra'
require 'sinatra/activerecord'

configure { set :server, :puma }

set :database, "sqlite3:moviwiki.sqlite3"

set :root, 'lib/app'

get '/' do
  render :html, :index
end

