const {ObjectID} = require('mongodb');
const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');
const jwt = require('jsonwebtoken');
const userOneId = new ObjectID();
const userTwoId = new ObjectID();

const users = [{
    _id: userOneId,
    email: 'jordan@example.com',
    password: 'userOnePass',
    tokens: [{
        access: 'auth', 
        token: jwt.sign({_id: userOneId, access: 'auth'}, 'abc123').toString()
    }] 
}, {
    _id: userTwoId,
    email: 'jen@example.com',
    password: 'userTwoPass'

}];
const todos = [{
    _id: new ObjectID(), 
    text: "Sample todo1"
}, {
    _id: new ObjectID(),
    text: "Sample todo2",
    completed: true,
    completedAT: 333
}];

const populateTodos = (done) => {
    Todo.remove({}).then(() => {
     return Todo.insertMany(todos);
    }).then(() => done()); 
}

const populateUsers = (done) =>{
    User.remove({}).then(() =>{
        var userOne = new User(users[0]).save();
        var userTwo = new User(users[1]).save();

        Promise.all([userOne, userTwo])
    }).then(() =>done());
};
module.exports = {
    todos, 
    populateTodos,
    users,
    populateUsers
};