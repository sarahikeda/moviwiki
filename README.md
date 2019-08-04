**moviwiki** is a search tool to end disputes amongst movie buffs. Having a feud over when 'Rocky' came out? Use **moviwiki** to search the title and then voila, a slew of trivia facts will appear.

To start:

* Git clone *https://github.com/sarahikeda/moviwiki.git* (this repo)
* cd into **moviwiki**
* run `bundle install` and `npm install`
* run `rake db:migrate` to create tables
* To run server, run `npm run build && ruby lib/app.rb` and go to `localhost:4567` to see the app.

How to use:

    * Enter movie title in search box
    * Favorite movie by clicking on the star if it's truly, one of your favorites.
    * If favorited, add comment and rate the movie.
    * If a movie already has a review, it will display below (when you click the star) to edit.
    * To see a list of rated movies, click `Rated Movies` link up top
    * If you want to delete a listed movie, click delete or likewise, click update (which in the future, will allow for updating the review)

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

    - Reviews (contains rating and comment)
        - User Id
        - Movie Id
        - Rating Value (number of stars)
        - Comment (review that user has typed)

To retrieve a list of rated movies, we query for the 10 most recent movies that were saved in the DB. This is not an ideal situation, but it falls under the logic that movies are saved only when a review is submitted. It's also a bit nebulous because a movie could have been previously saved from another user's review.

Ideally, to retrieve a list of user's favorite movies, one would return a list of reviews from the specified user and use the movie id to get the movie's info.


To Dos:
    * Retrieve information from DB, not just from omdb.
    * Return to home page after review is submitted.
    * Have info validation
        * check comment and rating are both filled out
    * User login capabilities with password
    * Add placeholder if poster doesn't exist.
    * Keep Rating star filled in if selected (the `onClick` event) so user gets feedback that their rating is received
    * Make app responsive
    * Associate reviews with a user, to ensure they can only leave one review per movie (pass user info when comment and rating are saved, and do a check for existing user rating before save).