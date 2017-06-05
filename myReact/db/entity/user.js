/**
 * 用户信息
 */
var mongoose = require('./db.js'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({          
    userid : { type: String },                    //用户账号
    password: {type: String}                        //密码
});

var MycollectionSchema = new Schema({
    id:{type:String},
    name:{type:String}
})
module.exports = mongoose.model('user',UserSchema);
// module.exports = mongoose.model('users',UserSchema);