const mongoose = require('mongoose');

const server = '';
const database = 'mongoDb';
const user = '';
const password = '';


mongoose.connect(`mongodb://localhost:27017/${database}`);

const CustomerSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model('Customer', CustomerSchema);