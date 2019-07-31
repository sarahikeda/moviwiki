require 'active_record'

# separate out models into their own files
class Comment < ActiveRecord::Base
end

class Movie < ActiveRecord::Base
end

class Rating < ActiveRecord::Base
end

class CommentRatings < ActiveRecord::Base
  belongs_to :rating
  belongs_to :comment
end

class User < ActiveRecord::Base
end
