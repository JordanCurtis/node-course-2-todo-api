const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => { 
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
        console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('59fa1be2aedce6cf14913dbb')
    // }, {
    //     $set: {
    //         completed: true, 
    //     }
    // }, {returnOriginal:false}).then((result)=>{
    //     console.log(result);
    // })

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('59f77a99a324190b5ffb50f8')
    }, {
        $set : {
            name: 'JordanCurtis'
        },
        $inc : {
            age: +1
        }
    }, {returnOriginal:false}).then((result) =>{
        console.log(result);
    })
});
        // db.close();