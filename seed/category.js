"use strict";
var async = require("async");
const fs = require("fs");
const Category = require("../models/Category");

fs.readFile("./seed/categories.json", (err, data)=>{
    if (err) throw err;
    const categories = JSON.parse(data);
    console.log(categories);
    console.log(new Category(categories[0]))
});

// for (i = 0; i < 1000; i++) {
//   var category = new Category({
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
//   users.push(user);
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



// const category1 = new Category({
//     name: "3d printing"
// })

// category1.save();
