var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mynode');

var UserEntity = require('./entity/User.js') 

var Users = mongoose.model('users', UserEntity);

var addUser = new Users({ userid: '3333',password:'44444' });
addUser.save(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('success..');
  }
});