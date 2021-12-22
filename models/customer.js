let mongoose = require('mongoose');



// Customer Schema
const Customer = mongoose.model('Customer', {
    nama: {
        type: String,
        required:true
    }, 
    alamat: {
        type:String,
        required:true
    },
    no_hp: {
        type:String,
        required:true
    }
});


module.exports = {Customer}