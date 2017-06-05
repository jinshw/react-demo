var User = require("./entity/user.js")
class UserDao {
 insert() {
    var user = new User({
        userid: "333",
        password: "bbbb"
    })
    user.save(function (err, res) {
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    })
}

 update() {
    var wherestr = { 'userid': 'aaaa' };
    var updatestr = { 'password': 'zzzz' };

    User.update(wherestr, updatestr, function (err, res) {
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    })
}

 findByIdAndUpdate() {
    var id = '592fe74c4e2d8b27b475b9f8';
    var updatestr = { 'password': 'abcd' };

    User.findByIdAndUpdate(id, updatestr, function (err, res) {
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    })
}


 del() {
    var wherestr = { 'userid': 'aaaa' };

    User.remove(wherestr, function (err, res) {
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    })
}


 getByConditions() {
    var wherestr = { 'userid': '3333' };

    User.find(wherestr, function (err, res) {
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
            console.log(res.userid, res.password)
        }
    })
}

}

// insert();
// update();
// findByIdAndUpdate();
// del();
// getByConditions()

// var user = new UserDao()
// user.insert()
module.exports = UserDao