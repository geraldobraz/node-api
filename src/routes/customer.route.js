const CustomerModel = require('../models/customer.model');
const { Router } = require('express');
const HttpStatus = require('http-status-codes');

const router = Router();

// Create a new Customer
// http://localhost:3000/customer
router.post('/customer', (req, res) => {
    if (!req.body)
        return res.status(HttpStatus.BAD_REQUEST).send('Request body is missing!');

    if (!req.body.email) {

    }

    const model = new CustomerModel(req.body);
    model.save()
        .then(doc => {
            if (!doc || doc.length === 0)
                return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(doc);

            res.status(HttpStatus.CREATED).send(doc);
        })
        .catch(err => {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err);
        });
});

// Find a customer by email
router.get('/customer', (req, res) => {
    if (!req.query.email)
        return res.status(HttpStatus.BAD_REQUEST).send('Missing URL parameter: email');


    CustomerModel.findOne({ email: req.query.email })
        .then(doc => {
            res.json(doc);
        })
        .catch(err => {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err);
        })
});

// Update a custumer
router.put('/customer', (req, res) => {
    if (!req.query.email)
        return res.status(HttpStatus.BAD_REQUEST).send('Missing URL parameter: email');


    CustomerModel.findOneAndUpdate({ email: req.query.email }, req.body, { new: true })
        .then(doc => {
            res.json(doc);
        })
        .catch(err => {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err);
        })
});

// Delete a custumer
router.delete('/customer', (req, res) => {
    if (!req.query.email)
        return res.status(HttpStatus.BAD_REQUEST).send('Missing URL parameter: email');


    CustomerModel.findOneAndRemove({ email: req.query.email })
        .then(doc => {
            res.json(doc);
        })
        .catch(err => {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err);
        })
});


module.exports = router;