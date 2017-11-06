const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {ObjectID} = require('mongodb');


// var id = '5a00c8e8981c5ce42d44c02111';

// if(!ObjectID.isValid(id)){
//     console.log('ID not valid');
// };
// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo By ID', todo);
// }).catch((e) => console.log(e));

User.findById('59fb8eeb827853be19d4eea8').then((user) => {
    if(!user){
        return console.log('Sorry, no user found');
    }
    console.log('User: ', user);
}).catch((e) => console.log('Sorry, your user ID was incorrect'));