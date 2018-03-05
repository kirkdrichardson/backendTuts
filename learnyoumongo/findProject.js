const mongo = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/learnyoumongo';

const age = parseInt(process.argv[2])

mongo.connect(url, (err, client) => {
  if (err) throw err;

  const db = client.db('learnyoumongo');

  db.collection('parrots').find(
    { age: { $gt: age } }
  ).project({ _id: 0 })
  .toArray((err, results) => {
    if (err) throw err;
    console.log(results);
    client.close();
  })
});
