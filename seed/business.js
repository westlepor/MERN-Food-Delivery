// "use strict";

// let jsonData = require("./categories.json");
// console.log(jsonData)
// const fs = require("fs");

// let rawdata = fs.readFileSync("./categories.json");
// let categories = JSON.parse(rawdata);
// console.log(categories);

// const Business = require("../models/Business");
// // const async = require("async");

// require("jsdom").env("", function(err, window) {
//   if (err) {
//     console.error(err);
//     return;
//   }

//   var $ = require("jquery")(window);
//   $.getJSON("categories.json", function(json) {
//     console.log(json); // this will show the info it in firebug console
//   });
// });

// const newBiz = new Business({
//     businessName: "Blue Bottle",
//     yelpUrl: "http://google.com",
//     latitude: "22",
//     longitude: "-122",
//     categories: "5e7119f489a2a53fccd8be61",
//     hours: "5e710cad90cafc37e41e93c9",
//     phone: "410-444-3020",
//     reviewCount: 6032,
//     price: '$$$',
//     rating: "4.0",
//     zipcode: '94110',
//     country: "US",
//     state: "CA",
//     city: 'San Francisco',
//     address1: "Florida, 222",
//     address2: '',
//     address3: '',
//     isClosed: false
// });

// newBiz.save()


// Create an empty array that will be used in async.each
// const businesses = [];

// // Create 1000 User mongoose objects
// for (i = 0; i < 2; i++) {
//     const business = new Business({
//         businessName: "Blue Bottle",
//         yelpUrl: "http://google.com",
//         latitude: "22",
//         longitude: "-122",
//         categories: "5e7119f489a2a53fccd8be61",
//         hours: "5e710cad90cafc37e41e93c9",
//         phone: "410-444-3020",
//         reviewCount: 6032,
//         price: '$$$',
//         rating: "4.0",
//         zipcode: '94110',
//         country: "US",
//         state: "CA",
//         city: 'San Francisco',
//         address1: "Florida, 222",
//         address2: '',
//         address3: '',
//         isClosed: false
//     });

//     // Add the newly created user to the users array
//     businesses.push(business);
// }
// console.log(businesses)
// async.each(
//     // 1st parameter is the 'users' array to iterate over
//     businesses,
//     // 2nd parameter is a function takes each user in 
//     // the 'users' array as an argument and a callback 
//     // function that needs to be executed when the 
//     // asynchronous call completes
//     function (business, callback) {
//         // Call user.save which is asynchronous function
//         business.save(function () {
//             // The asyncrhonous DB save call is done, 
//             // execute callback function to alert 
//             // async.each to move on to the next user
//             // object in the array
//             callback();
//         });
//     },
//     // 3rd parameter is a function to call when all 
//     // users in 'users' array have completed their 
//     // asynchronous user.save function
//     function (err) {
//         // All tasks complete 
//         console.log("Finished inserting 2 documents")
//     }
// );
