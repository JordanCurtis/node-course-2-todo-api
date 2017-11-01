const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => { 
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
        console.log('Connected to MongoDB server');
        // db.collection('Todos').find({
        //     _id: new ObjectID("59fa1be2aedce6cf14913dbb")
        // }).toArray().then((docs) => {
        //     console.log('Todos');
        //     console.log(JSON.stringify(docs, undefined, 2));
        // }, (err) =>{
        //     console.log('Unable to fetch todos', err);
        // })
        
        db.collection('Todos').find().count().then((count) => {
            console.log(`Todos count: ${count}` );
        }, (err) =>{
            console.log('Unable to fetch todos', err);
        })

        db.collection('Users').find( {name:'JordanCurtis'}).toArray().then((users) => {
            console.log(JSON.stringify(users, undefined, 2));
        }, (err) => {
            console.log('Unable to fetch users');
        })
      
      
        // db.close();
});