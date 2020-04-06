# Chicken Tinder !

[Chicken Tinder](https://lit-atoll-81167.herokuapp.com/#/) is a single page app designed to help a group decide on a venue for their next gathering. Each user can vote on each venue offered to the group (based on location and filters).

## Key Features

[Chicken Tinder Design Documents](https://github.com/hkryucr/mern-ct/wiki)

In Chicken Tinder, users can create a group and select a location in San Francisco. The group creator can then search for other users to add to their group, as well as determine any initial food restrictions they would like their group to be aware of, whether the bill would be split among all members, and the price range they would like to filter by. Data from restaurants local to the area is then added to the group. The creator will also set a deadline for the members to vote.

![alt text](https://portfolio-henry.s3-us-west-1.amazonaws.com/CT.gif)

All group members can then log in to vote on each one of the pre-selected venues. Users can access any group they have been added to to either vote (if the group is ongoing) or view results (if the group deadline has passed).

Once all the group members have voted or the deadline is reached, the top 3 venues are displayed, based on number of votes.

![alt text](https://github.com/hkryucr/mern-ct/blob/master/frontend/public/results.png "Show vote results")

### User Authentication

- Users can sign up or log in to use the application.
- Users can also log in through a demo account.
- User credentials are securely hashed, salted, and stored with BCrypt.

### Businesses

The businesses markers are displayed on the map using the Yelp API.
The list of preselected businesses is updated as the user zooms in / out, changes the map boundaries or select an area / neighborhood via the search bar.

CODE

### Votes

CODE

## Functionality and MVPs

## Technologies

Chicken Tinder is built with the MERN stack (Mongo DB, Express, React, Node.js).

### Front-end

#### React
The Rails backend API is connected to a React frontend to efficiently render to the virtual DOM.

#### Redux
Redux manages the front-end state. When the database information is retrieved, the Redux state is updated first and re-renders the appropriate React components.

### Back-end

#### Express
Express is the back-end framework used to query the database.

#### Mongo DB
Mongo is a non SQL database used to store users, businesses and associated datas (groups and votes).


## Technical Challenges



## The Team

* [Henry Ryu](https://github.com/hkryucr)
* [Chris Thompson](https://github.com/ChrisThompsonTX)
* [Neil Desai](https://github.com/nsdesai1)
* [Arnaud Cognard](https://github.com/Arno-co)
