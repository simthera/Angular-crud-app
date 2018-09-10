var mangoose = require('mongoose');
var Schema = mongoose.Schema;

var Employee = new Schema({
    name: {
        type: String
    },
    age: {
        type: Number
    },
    id: {
        type: Number
    }
 }, {
        collection: 'employees'
});

module.exports = mongoose.model('Employee', Employee);