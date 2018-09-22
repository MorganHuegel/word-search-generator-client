# Word Search Generator


### Live App

[Live App](https://word-search-generator.netlify.com/)

[Server-Side Repo]()

[Algorithm for Generating Puzzles](https://github.com/MorganHuegel/word-search-algorithm)


### Description

Word search generator allows users to input a list of words and the dimensions of their word-search, and it will return a randomized, NxN square word-search with those words.  The word-search is then formatted as HTML.  Users can also view other word-searches that have already been created, update the title of a word search, and delete a word-search.

*Note: This app has no authorization feature, so all word-searches are open/editable to all users*


### Screenshots


### Tech-Stack

###### Front-End: 
The front-end for this app was created using React and Redux.  React-spinkit is used for the loading spinners.  It is continuously deployed on Netlify.

###### Back-End:
The back-end for this app is written entirely in Python.  It was built using Django as a framework.  The server-side is continuously deployed on Heroku, where the SQL database is also housed.
