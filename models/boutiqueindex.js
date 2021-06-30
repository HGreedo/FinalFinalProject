const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const boutiqueSchema = new Schema({
    name: { type: String, required: true},
    id: { type: String, required: true},
    address: { type: String, required: true},
    website: { type: String, required: true},
    description: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true}
});
const Boutique = mongoose.model( 'Boutique', boutiqueSchema );

module.exports = Boutique;