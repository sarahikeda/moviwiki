*moviwiki* is a search tool to end disputes amongst movie buffs. Have a question about when 'Rocky' came out? Use *moviwiki* to search the title and then voila, a slew of trivia facts will appear.

How to use:
    - Click the search icon to begin!
    - Enter movie title
    - Favorite movie if it's truly, one of your favorites.
    - If favorited, add comment and rate the movie.

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
    - First check if movie title is already saved in database. If so, populate the search result (as well as the comment and review) from there, rather than calling the Omdb API.
    - Post information to DB.
    - Retrieve information from DB, not just from omdb.
    - Return to home page after review is submitted.
    - Have info validation
        - check comment and rating are both filled out
    - User login capabilities with password
