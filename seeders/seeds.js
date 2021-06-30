const mongoose = require('mongoose');
const Boutique = require("../models/boutiqueindex");
const Brand = require("../models/brandindex");
//const fetch = require("node-fetch");

mongoose.connect(
    "mongodb://localhost:27017/admin"
    );
   

const brandSeed = [{
    name:"tom",
    id: "123412341234",
    address: "1234 Rainbow Road",
    website: "www.idaanderssonshop.com",
    description: "Swedish Cozy Wear",
    email: "idaanderssonshop@gmail.com",
    password: "password"
}];

const boutiqueSeed = [{
    name:"Jerry",
    id:"42857243509852",
    address: "1234 Murkwood Dr",
    website: "www.google.com",
    description: "We buy Vintage",
    email: "jerry@jerry.com",
    password: "password1"
}];

Boutique 
.remove({})
.then(() => Boutique.collection.insertMany(boutiqueSeed))
.then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

Brand
.remove({})
.then(() => Brand.collection.insertMany(brandSeed))
.then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });