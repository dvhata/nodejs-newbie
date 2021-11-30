const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/nodejs_learning_f8');
        console.log("Connect successfully")
    } catch (error) {
        console.log("fail")
    }
}

module.exports = { connect };