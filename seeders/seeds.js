const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect('mongodv://localhost/admin', {
    useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const brandSeed = [{
    name:"tom",
    address: "1234 Rainbow Road",
    website: "www.idaanderssonshop.com",
    description: "Swedish Cozy Wear",
    email: "idaanderssonshop@gmail.com",
    password: "password"
}];

const boutiqueSeed = [{
    name:"Jerry",
    address: "1234 Murkwood Dr",
    website: "www.google.com",
    description: "We buy Vintage",
    email: "jerry@jerry.com",
    password: "password1"
}];