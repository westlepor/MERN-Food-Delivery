const Business = require("../models/Business");

const newBiz = new Business({
    businessName: "Blue Bottle",
    yelpUrl: "http://google.com",
    latitude: "22",
    longitude: "-122",
    categories: "5e7119f489a2a53fccd8be61",
    hours: "5e710cad90cafc37e41e93c9",
    phone: "410-444-3020",
    reviewCount: 6032,
    price: '$$$',
    rating: "4.0",
    zipcode: '94110',
    country: "US",
    state: "CA",
    city: 'San Francisco',
    address1: "Florida, 222",
    address2: '',
    address3: '',
    isClosed: false
});

newBiz.save()