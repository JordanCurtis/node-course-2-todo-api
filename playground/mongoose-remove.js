const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {ObjectID} = require('mongodb');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

Todo.findOneAndRemove('5a04c829fb4dfac79ee51269').then((todo) => {
    console.log(todo);
})