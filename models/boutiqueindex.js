const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BoutiqueSchema = new Schema({
    name: { type: String, required: true},
    address: { type: String, required: true},
    website: { type: String, required: true},
    description: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true}
});
const Boutique = mongoose.model('BoutiqueInfo', BoutiqueSchema);

module.exports = Boutique;