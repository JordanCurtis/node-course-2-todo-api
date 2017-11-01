const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => { 
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
        console.log('Connected to MongoDB server');

    //     db.collection('Users').deleteMany({name: 'JordanCurtis'}).then((result) => {
    //     console.log(result);
    // }); 

//     db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
//         console.log(result);
//     })
// });
    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('59f77a58f13dd60b5d4ba9e6') 
    }).then((result) =>{
        console.log(JSON.stringify(result, undefined, 2));
    });
});
        // db.close();
