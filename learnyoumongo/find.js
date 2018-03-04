const mongo = require('mongodb').MongoClient;

const host = 'localhost';
const port = 27017;
const url = `mongodb://${host}:${port}/learnyoumongo`;

// VERISION NOTE - this code is for mongodb 3.0
// whereas previous versions returned a database object as an argument to the
// connect callback, a client object is returned in 3.0 and later verisons
// see https://github.com/mongodb/node-mongodb-native/blob/3.0.0/CHANGES_3.0.0.md
const age = process.argv[2]

// this version uses the $gt comparison operator https://docs.mongodb.com/manual/reference/operator/query/gt/
mongo.connect(url, function(err, client) {
  if (err) throw err;
  // db gives access to the database
  const db = client.db('learnyoumongo');
  const collection = db.collection('parrots');

  const age = parseInt(process.argv[2]);

  collection.find({
    age: {
      $gt: +age
    }
  }).toArray(function(err, docs) {
      if (err) throw err
      console.log(docs)
      client.close()
    })
});

/*

this version returns all documents in a collection and filters them.
This might be useful if you are to make use of each document, otherwise
it is too expensive


mongo.connect(url, function(err, client) {
  // db gives access to the database
  const db = client.db('learnyoumongo');
  const collection = db.collection('parrots');

  // get the minimumAge from the process.argv array
  const minimumAge = parseInt(process.argv[2]) + 1;

  // callback to filter the docs by minimumAge
  const filterByAge = (array, minimumAge) => array.filter(doc => parseInt(doc.age) > minimumAge);
  // function to collect docs and perform operations
  const findDocuments = function(collection, callback) {
    collection.find({}).toArray(function(err, docs) {
      callback(docs, minimumAge);
    });
  }

  findDocuments(collection, (docs) => console.log(filterByAge(docs, minimumAge)));

  client.close();
});

*/
