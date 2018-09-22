# Word Search Generator


### Deployment

[Live App](https://word-search-generator.netlify.com/) on Netlify

[Server-Side Repo](https://github.com/MorganHuegel/word-search-generator-server)

[Algorithm for Generating Puzzles](https://github.com/MorganHuegel/word-search-algorithm)


### Description

Word search generator allows users to input a list of words and the dimensions of their word-search, and it will return a randomized, NxN square word-search with those words.  The word-search is then formatted as HTML.  Users can also view other word-searches that have already been created, update the title of a word search, and delete a word-search.

*Note: This app has no authorization feature, so all word-searches are open/editable to all users*


### Screenshots

###### Landing Page

![Screenshot of Landing Page](https://github.com/MorganHuegel/word-search-generator-client/blob/master/src/images/screenshot-viewing-landing.png?raw=true)

###### Add Word-Search Page

![Screenshot of Adding Word-Search](https://github.com/MorganHuegel/word-search-generator-client/blob/master/src/images/screenshot-adding.png?raw=true)

###### Viewing a Small Puzzle

![Screenshot of Smaller Puzzle](https://github.com/MorganHuegel/word-search-generator-client/blob/master/src/images/screenshot-viewing-small.png?raw=true)  

###### Viewing a Larger Puzzle

![Screenshot of Larger Puzzle](https://github.com/MorganHuegel/word-search-generator-client/blob/master/src/images/screenshot-viewing-big.png?raw=true)

###### Mobile Views

![Screenshot of Mobile View](https://github.com/MorganHuegel/word-search-generator-client/blob/master/src/images/screenshot-viewing-mobile-2.png?raw=true)



### Tech-Stack

###### Front-End: 
The front-end for this app was created using React and Redux.  React-spinkit is used for the loading spinners.  It is continuously deployed on Netlify.

###### Back-End:
The back-end for this app is written entirely in Python.  It was built using Django as a framework.  The server-side is continuously deployed on Heroku, where the SQL database is also housed.
