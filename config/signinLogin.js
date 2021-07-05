const db = require('../models/brandindex');
const bcrypt = require('bcrypt');


module.exports = {
    create: function(req, res) {
    const { name, address, website, description, email } = req.body;
    const newBrand = { name, address, website, description, email };
    newBrand.password = bcrypt.hashSync(req.body.password, 10);
     db.Brand.create(newBrand)
    .then((brand) => res.json({ status: "success" }))
    .catch((err) => res.status(503).json(err));
    },

    find: function(req, res) {
        db.Brand.findAll({ name: req.body.name }).then((brand) => {
            return brand;
        })
    },

    //need to reqork findOne, "brand" is undefined ^^^ 
    brandLogin: function (req, res) {
        db.Brand.findOne({ name: req.body.name })
        .then((brand) => {
            console.log(brand)
            const hashed = brand.password;
            bcrypt.compare(req.body.password, hashed, function (err, match) {
                if(err) {
                    console.log(err);
                    res.status(911).send("Server Issue");
                }
                if (match) {
                    req.session.save (() => { 
                        req.session.signedIn = true; 
                        res.json({
                            name: `${brand.name}`,
                            address: `${brand.address}`,
                            website: `${brand.website}`,
                            email: `${brand.email}`,
                            id: `${brand._id}`,
                            signedIn: req.session.signedIn
                        });
                        })
            } else if (!match ) {
                res.send(console.log('Sorry Not Found'));
            } else {
                res.status(555).send("Hey! Where do you think you're going?");
            }
        }); 
    })
    .catch((err) => res.status(666).json(err));
    console.log(brandLogin);
},
logout: function (req, res) {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
}
};