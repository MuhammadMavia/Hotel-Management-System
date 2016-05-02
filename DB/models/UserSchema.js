var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    id: {type: String, unique: true},
    password: {type: String, select: false},
    name: String,
    role: String
});

var User = mongoose.model('User', UserSchema);