"use strict";

const {MongoClient} = require("mongodb");
// const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI = "mongodb://localhost:27017/tweeter";

MongoClient.connect(MONGODB_URI, (err, db) => {
  if (err) {
    console.error(`Failed to connect: ${MONGODB_URI}`);
    throw err;
  }

  // we have a connection to the "test-tweets" db, starting here:
  // This is the entry point for a database-connected application
  console.log(`Connected to mongodb: ${MONGODB_URI}`);

  // refactored in tweet specific function

  function getTweets(callback) {
    db.collection("tweets").find().toArray(callback);
  }

  getTweets((err, tweets) => {
    if (err) throw err;

    console.log("Logging each tweet: ");
    for (let tweet of tweets) {
      console.log(tweet);
    }
  });

  db.close();


});

