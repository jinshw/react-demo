var User = require("./entity/user.js")
var mongoose = require('mongoose')
class UserDao {
    insert(obj) {
        var _param = obj || {}
        // var user = new User({
        //     userid: "333",
        //     password: "bbbb"
        // })
        var user = new User(obj)
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
        var wherestr = { 'userid': '333' };
        var updatestr = { 'password': 'zzzz' };

        User.update(wherestr, updatestr, { multi: true }, function (err, res) {
            if (err) {
                console.log("Error:" + err);
            }
            else {
                console.log("Res:" + res);
            }
        })
    }

    findByIdAndUpdate() {
        var id = '58f1d7b801cfa805d01c547e';
        var updatestr = { 'password': 'abcd' };

        var promise = new mongoose.Promise();

        User.findByIdAndUpdate(id, updatestr, function (err, res) {

            if (err) {
                console.log("Error:" + err);
            }
            else {
                console.log("Res:" + res);
            }
            promise.resolve(err, res)

        })
        return promise;
    }


    del(obj) {
        var wherestr = { 'userid': '333' };

        User.remove(obj, function (err, res) {
            if (err) {
                console.log("Error:" + err);
            }
            else {
                console.log("Res:" + res);
            }
        })
    }


    getByConditions() {
        console.log(".........getByConditions......")
        var wherestr = {};
        var promise = new mongoose.Promise();
        User.find(wherestr, function (err, res) {
            console.log(".........jinru......")
            if (err) {
                console.log("Error:" + err);
            }
            else {
                console.log("Res:", res);
                // console.log(res.userid, res.password)
            }
            promise.resolve(err, res)
        })
        return promise;
    }

}

module.exports = UserDao