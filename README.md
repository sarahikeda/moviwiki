**moviwiki** is a search tool to end disputes amongst movie buffs. Have a question about when 'Rocky' came out? Use **moviwiki** to search the title and then voila, a slew of trivia facts will appear.

To start:

* Git clone *https://github.com/sarahikeda/moviwiki.git* (this repo)
* cd into **moviwiki**
* run `bundle install` and `npm install`
* run `rake db:migrate` to create tables
* To run server, run `npm run build && ruby lib/app.rb` and go to `localhost:4567` to see the app.

How to use:

    * Click the search icon to begin!
    * Enter movie title
    * Favorite movie by clicking on the star if it's truly, one of your favorites.
    * If favorited, add comment and rate the movie.

Tables:

    - User
        - First Name
        - Last Name
        - Email
        - Username
        - Password

    - Movie
        - Poster
        - Title
        - Year
        - Plot

    - Reviews (joint table between user, rating, and comment)
        - User Id
        - Movie Id
        - Rating Id
        - Comment Id

    - Rating
        - Review Id
        - Rating Value

    - Comment
        - Review Id
        - Content

To retrieve a list of user's favorite movies, one would return a list of reviews from the specified user and use the movie id to get the movie's info.


To Dos:
    * Retrieve information from DB, not just from omdb.
    * Return to home page after review is submitted.
    * Have info validation
        * check comment and rating are both filled out
    * User login capabilities with password
    * Add placeholder if poster doesn't exist.
    * Keep Rating star filled in if selected (the `onClick` event) so user gets feedback that their rating is received
    * Make app responsive
    * Implement ratings and comments are associated with user, to ensure they can only leave one rating/comment per movie (pass user info when comment and rating are saved, and do a check for existing user rating before save).
    * Associate Comment and Rating in a join table called Review, which stores both of their ids + the movie.