"use strict";
const async = require("async");
const mongoose = require("mongoose");
const database = require("../config/keys").mongoURI;

// const databaseURL = 'mongodb://localhost:5000/mern-ct'; // use keys.js mongoURI?

// const MongoClient = require('mongodb').MongoClient;



const fs = require("fs");
const Category = require("../models/Category");

const categories = [];

const arr = fs.readFileSync("./categories.json");
console.log(JSON.parse(arr));
console.log("file ended");


// fs.readFileSync("./categories.json", (err, data)=>{
//     if (err) throw err;
//     const arr = JSON.parse(data);

//     // console.log(arr);

//     for(let i = 0; i < 2; i++) {
//       const category = new Category(arr[i]);
//       // console.log(category);
//       categories.push(category);
//       console.log("hello")
//       // console.log(categories);
//     }
//     // console.log(categories);
//     // const category1 = new Category(categories[1]);
//     // category1.save;
//     // console.log(category1);
    
// });

// console.log(categories);




// async.series([
//   function(callback) {
//     mongoose.connect(database, function(err, db) {
      
//       if(err) throw err;
      
//       // Drop database which is an asynchronous call
//       db.dropDatabase(function(err, result) {

//         // After successfully dropping database, force 
//         // close database which is another asynchronous call 
//         db.close(true, function(err, result) {

//           // Close successful so execute callback so second 
//           // function in async.serial gets called
//           callback(null, 'SUCCESS - dropped database');
//         });
//       });
//     });
//   },

//     // Second function - connect to MongoDB using 
//   // mongoose, which is an asynchronous call
//   function(callback) {

//     // Open connection to MongoDB
//     mongoose.connect(database);

//     // Need to listen to 'connected' event then execute callback method
//     // to call the next set of code in the async.serial array
//     mongoose.connection.on('connected', function(){
//       console.log('db connected via mongoose');
      
//       // Execute callback now we have a successful connection to the DB
//       // and move on to the third function below in async.series 
//       callback(null, 'SUCCESS - Connected to mongodb');
//     });
//   },

//    // Third function - use Mongoose to create 
//   // a User model and save it to database
//   function(callback) {

//     // BEGIN SEED DATABASE
    
//     // Use an array to store a list of User 
//     // model objects to save to the database
//     let categories = [];
//     let testCatCount = 20;
//     for (let i = 0; i < testCatCount; i++) {

//       let category = new Category({
//         name: i,
//       });

//       // Add newly create User model to 'users' array
//       categories.push(category);
//     }
    
//     console.log("Populating database with %s categories", categories.length);

    
//     // Use 'async.eachSeries' to loop through the 'users' array to make 
//     // sure each asnychronous call to save the user into the database
//     // completes before moving to the next User model item in the array
//     async.eachSeries(
      
//       // 1st parameter is the 'users' array to iterate over 
//       categories, 
        
//       // 2nd parameter is a function takes each user in the 'users' array 
//       // as an argument and a callback function that needs to be executed 
//       // when the asynchronous call complete. 
      
//       // Note there is another 'callback' method here called 'userSavedCallBack'.
//       // 'userSavedCallBack' needs to be called to inform async.eachSeries to 
//       // move on to the next user object in the 'users' array. Do not mistakenly
//       // call 'callback' defined in line 130.
//       function(category, catSavedCallBack){

//         // There is no need to make a call to create the 'test' database.
//         // Saving a model will automatically create the database
//         category.save(function(err) {

//           if(err) {
//             // Send JSON response to console for errors
//             console.dir(err);
//           }
          
//           // Print out which user we are saving
//           console.log("Saving category #%s out of %s", category.name, testCatCount);
          
//           // Call 'userSavedCallBack' and NOT 'callback' to ensure that the next
//           // 'user' item in the 'users' array gets called to be saved to the database
//           catSavedCallBack();
//         });

//       },
//       // 3rd parameter is a function to call when all users in 'users' array have 
//       // completed their asynchronous user.save function
//       function(err){
        
//         if (err) console.dir(err);
        
//         console.log("Finished aysnc.each in seeding db")

//         // Execute callback function from line 130 to signal to async.series that
//         // all asynchronous calls are now done
//         callback(null, 'SUCCESS - Seed database');

//       }
//     );
//   }
// ],
// // This function executes when everything above is done
// function(err, results){

//   console.log("\n\n--- Database seed progam completed ---");
  
//   if(err) {
//     console.log("Errors = ");
//     console.dir(errors)
//   } else {
//     console.log("Results = ");
//     console.log(results);
//   }

//   console.log("\n\n--- Exiting database seed progam ---");
//   // Exit the process to get back to terrminal console 
//   process.exit(0);
// });






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
