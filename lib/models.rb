require 'active_record'

# TODO separate out models into their own files

class Movie < ActiveRecord::Base
  has_many :reviews
end

class Review < ActiveRecord::Base
  belongs_to :movie
end

class User < ActiveRecord::Base
end