const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;    

const { Customer } = require('../models/customer');



// Get All Customer
router.get('/api/customers', (req, res) => {
    Customer.find({}, (err, data) => {
        if(!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    });
});
//Add customer
router.post('/api/customers/add', (req, res) => {
    const cus = new Customer({
        nama: req.body.nama,
        alamat: req.body.alamat,
        no_hp: req.body.no_hp
    });
    cus.save((err, data) => {
        if(!err) {
            // res.send(data);
            res.status(200).json({code: 200, message: 'Customer Added Successfully', addCustomer: data})
        } else {
           console.log(err);
        }
    });
});

// Update Customer

router.put('/api/customers/update/:id', (req, res) => {


    const cus = {
        nama: req.body.nama,
        alamat: req.body.alamat,
        no_hp: req.body.no_hp
       
    };
    Customer.findByIdAndUpdate(req.params.id, { $set: cus }, { new: true }, (err, data) => {
        if(!err) {
            res.status(200).json({code: 200, message: 'Customer Updated Successfully', updateCustomer: data})
        } else {
            console.log(err);
        }
    });
});





// Delete Customer
router.delete('/api/customers/:id', (req, res) => {

    Customer.findByIdAndRemove(req.params.id, (err, data) => {
        if(!err) {
            // res.send(data);
            res.status(200).json({code: 200, message: 'Customer deleted', deleteCustomer: data})
        } else {
            console.log(err);
        }
    });
});


module.exports = router;