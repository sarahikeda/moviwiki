require 'active_record'

# separate out models into their own files
class Comment < ActiveRecord::Base
end

class Movie < ActiveRecord::Base
end

class Rating < ActiveRecord::Base
end

class Review < ActiveRecord::Base
end

class User < ActiveRecord::Base
end
