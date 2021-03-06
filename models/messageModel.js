/**
 *  A model that specifies the attributes af a messages list.
 */
var mongoose = require('mongoose');
var mongooseUniqueValidator  = require('mongoose-unique-validator');

var Schema = mongoose.Schema;

var schema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    content: {type: String, required: true},
    company: {type: String, required: false}
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Message', schema);

