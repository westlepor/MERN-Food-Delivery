# Chicken Tinder

[Chicken Tinder](https://lit-atoll-81167.herokuapp.com/#/) is a single page app designed to help a group decide on a venue for their next gathering. Each user can vote on each venue offered to the group (based on location and filters).

## Key Features

[Chicken Tinder Design Documents](https://github.com/hkryucr/mern-ct/wiki)

In Chicken Tinder, users can create a group and select a location in San Francisco. The group creator can then search for other users to add to their group, as well as determine any initial food restrictions they would like their group to be aware of, whether the bill would be split among all members, and the price range they would like to filter by. Data from restaurants local to the area is then added to the group. The creator will also set a deadline for the members to vote.

<img src="./img/CT_2.gif?raw=true" width="800px">

All group members can then log in to vote on each one of the pre-selected venues. Users can access any group they have been added to to either vote (if the group is ongoing) or view results (if the group deadline has passed).

Once all the group members have voted or the deadline is reached, the top 3 venues are displayed, based on number of votes.

<img src="./img/CT_Swipe.gif?raw=true" height="320px" style="margin-right: 20px"><img src="./img/CT_Mygroups.gif?raw=true" height="320px">


### User Authentication

- Users can sign up or log in to use the application.
- Users can also log in through a demo account.
- User credentials are securely hashed, salted, and stored with BCrypt.

### Businesses

The businesses markers are displayed on the map using the Yelp API.
The list of preselected businesses is updated as the user zooms in / out, changes the map boundaries or select an area / neighborhood via the search bar.

```
// As the user zooms in and out, receive the map boundary information 
// from Mapbox and re-fetch the business data from the backend.

this.map.on("idle", () => {
    const curBound = this.map.getBounds()
    this.props.updateFilter("bounds", curBound);
    this.props.fetchBusinessesByCoordinates(curBound).then(() => { 
    return this.setState({
        lng: this.map.getCenter().lng.toFixed(4),
        lat: this.map.getCenter().lat.toFixed(4),
        zoom: this.map.getZoom().toFixed(2)
    });          
    })
});

// As the user searches by a neighborhood, the server sends new business data, 
// and the map flies to the neighorbood and displays new business markers.

componentDidUpdate(prevProps, prevState) {
    if (!_.isEmpty(this.props.zoom) 
    && (prevProps.zoom.longitude !== this.props.zoom.longitude) 
    && (prevProps.zoom.latitude !== this.props.zoom.latitude)) {
        this.map.flyTo({
            center: [this.props.zoom.longitude, this.props.zoom.latitude],
            zoom: 14,
            bearing: 0,
            speed: 1,
            curve: 1,
            easing: function (t) {
            return t;
            },
            essential: true
        });
    }
    if (!_.isEmpty(this.props.businesses)) {
        this.MarkerManager.updateMarkers(Object.values(this.props.businesses));
    }
}    
```

## Functionality and MVPs

## Technologies

Chicken Tinder is built with the MERN stack (Mongo DB, Express, React, Node.js) and flux architecture.

### Front-end

#### React
The backend API is connected to a React frontend to efficiently render to the virtual DOM.

#### Redux
Redux manages the front-end state. When the database information is retrieved, the Redux state is updated first and re-renders the appropriate React components.

### Back-end

#### Node.js
Node.js allows us to use JavaScript outside web browsers to build fast and scalable network applications. Since Node.js uses a non-blocking, event-driven, efficient I/O model, it is perfect for real-time applications that run across different devices.

#### Express.js 
Express.js is a web application framework that enables us to construct server applications in Node.js. 

#### Mongo DB
Mongo is a NoSQL database used to store users, businesses, and associated data (groups and votes).

## Technical Challenges
- Responsive CSS design
- Implementing search functionality with auto-complete
- Integrating the data with Mapbox API
- Building demo functionalities with a random user and a random group
- Designing user-friendly UI/UX using modals and a carousel
- Creating interactivities with hover effects


## The Team

* [Henry Ryu](https://github.com/hkryucr)
* [Chris Thompson](https://github.com/ChrisThompsonTX)
* [Neil Desai](https://github.com/nsdesai1)
* [Arnaud Cognard](https://github.com/Arno-co)
