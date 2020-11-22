var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

// Seed data
data = [
  {
    name: "Fire",
    image:
      "https://images.unsplash.com/photo-1487730116645-74489c95b41b?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    name: "Earth",
    image:
      "https://images.unsplash.com/photo-1532309975451-db55af55d385?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    name: "Water",
    image:
      "https://images.unsplash.com/photo-1564249565553-640848aa641a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

function seedDB() {
  // Remove all campgrounds
  Campground.remove({}, function (err) {
    // if(err){
    // 	console.log("Error:", err);
    // }
    // console.log("removed campground");
    // // Removing comments
    // Comment.remove({}, function(err){
    // 	if(err){
    // 		console.log("Error:", err);
    // 	}
    // 	console.log("removed comments");
    // });
    // //add a few campgrounds
    // data.forEach(function(seed){
    // 	Campground.create(seed, function(err, campground){
    // 		if(err){
    // 			console.log("Error:", err);
    // 		} else {
    // 			console.log("added a campground");
    // 			// add a few comments
    // 			Comment.create({
    // 				text: "This place is great, but I wish there was internet connectiion",
    // 				author: "Homer"
    // 			}, function(err, comment){
    // 				if(err){
    // 					console.log("Error:", err);
    // 				} else {
    // 					campground.comments.push(comment);
    // 					campground.save();
    // 					console.log("Created new comment");
    // 				}
    // 			});
    // 		}
    // 	});
    // });
  });
}

module.exports = seedDB;
