const mongoose = require('mongoose');

const stockschema = new mongoose.Schema({
    party_name: {
        type: String,
        required: true
    },
    opening_balance: {
        type: String,
        required: true
    },
    table: [{
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
    }],





    // table:[{

    //         name: {
    //             String,
    //         },
    //     }],
    // // work: {
    //     type: String,
    //     required: true
    // },
    // password: {
    //     type: String,
    //     required: true
    // },
    // balance: {
    //     type: String,
    //     required: true
    // },
})

const Post = mongoose.model("Stock", stockschema);

module.exports = Post