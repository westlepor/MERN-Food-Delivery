"use strict";
const async = require("async");
const mongoose = require("mongoose");
const databaseURL = 'mongodb://localhost:5000/mern-ct'; // use keys.js mongoURI?

const MongoClient = require('mongodb').MongoClient;

const fs = require("fs");
const Category = require("../models/Category");

fs.readFile("./categories.json", (err, data)=>{
    if (err) throw err;
    const categories = JSON.parse(data);
    console.log(categories);
    const category1 = new Category(categories[1]);
    category1.save;
    console.log(category1);
});


async.series({
  function(callback) {
    MongoClient.connect(databaseURL, function(err, db) {
      
      if(err) throw err;
      
      // Drop database which is an asynchronous call
      db.dropDatabase(function(err, result) {

        // After successfully dropping database, force 
        // close database which is another asynchronous call 
        db.close(true, function(err, result) {

          // Close successful so execute callback so second 
          // function in async.serial gets called
          callback(null, 'SUCCESS - dropped database');
        });
      });
    });
  },

    // Second function - connect to MongoDB using 
  // mongoose, which is an asynchronous call
  function(callback) {

    // Open connection to MongoDB
    mongoose.connect(databaseURL);

    // Need to listen to 'connected' event then execute callback method
    // to call the next set of code in the async.serial array
    mongoose.connection.on('connected', function(){
      console.log('db connected via mongoose');
      
      // Execute callback now we have a successful connection to the DB
      // and move on to the third function below in async.series 
      callback(null, 'SUCCESS - Connected to mongodb');
    });
  }
})




// for (i = 0; i < 1000; i++) {
//   let categories = [];
//   const testCategoryCount = 20;
//   for(i = 0; i < testCategoryCount; i++) {

//   }
//   let category = new Category({
//     number: i,
//     images: [
//       {
//         // Asynchronous call to read a file
//         data: fs.readFileSync("./seed/categories.json"),
//         contentType: "image/png"
//       }
//     ]
//   });

//   // Add the newly created user to the users array
//   categories.push(category);
// }

// fs.readFileSync("./seed/categories.json", (err, data) => {
//   if (err) throw err;
//   let categories = JSON.parse(data);
//     console.log(categories.slice(0, 2));

//     async.each(
//     categories,
//     function(category, callback) {
//       const curCategory = new Category(category);
//       curCategory.save(function() {
//         callback();
//       });
//     },
//     // 3rd parameter is a function to call when all
//     // users in 'users' array have completed their
//     // asynchronous user.save function
//     function(err) {
//       // All tasks complete
//       console.log("Finished inserting 2 documents");
//     }
//   );
// });

// // categories = categories.slice(0, 2);
// // console.log(categories);



const category1 = new Category({
    name: "3d printing"
})

category1.save();
