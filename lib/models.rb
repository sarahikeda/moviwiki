require 'active_record'

# separate out models into their own files
class Comment < ActiveRecord::Base
  has_one :rating
  has_one :review, through: :rating
end

class Movie < ActiveRecord::Base
end

class Rating < ActiveRecord::Base
  belongs_to :comment
  has_one :review
end

class Review < ActiveRecord::Base
  belongs_to :rating
end

class User < ActiveRecord::Base
end