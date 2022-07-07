const express = require('express');
const router = express.Router();
const Transaction = require('../models/transaction');


router.get('/split-payments/cmpute', function(req, res, next){

});


router.post('/split-payments/compute', function(req, res, next){
    Transaction.create(req.body).then(function(transaction) {
        res.send(transaction);
    }).catch(next);
});

module.exports = router;