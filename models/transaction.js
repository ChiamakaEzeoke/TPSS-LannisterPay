const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    //id :
    currency: {type: Number, required : true},
    customerEmail: {type: String, required: true},
    splitInfo: [object],
})

const transaction = mongoose.model('transaction', transactionSchema);
module.exports = transaction;