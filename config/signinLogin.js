const brandindex = require('../models/brandindex');
const bcrypt = require('bcrypt');

module.exports = {
    create: function(req, res) {
        const { name, address, website, description, email, password } = req.body;
    const newBrand = { name, address, website, description, email, password};
    newBrand.password = bcrypt.hashSync(req.body.password, "");
    brandindex.Brand.create(newBrand).then(() => res.json({ status: "success" }))
    .catch((err) => res.status(503).json(err));
    },

    find: function(req, res) {
        brandindex.Brand.findAll({ name: req.body.name }).then((brand) => {
            return brand;
        })
    },
    login: function (req, res) {
        brandindex.Brand.findOne({ name: req.body.name })
        .then((brand) => {
            console.log(brand)
            const incrypted = brand.password;
            bcrypt.compare(req.body.password, incrypted, function (err, match) {
                if(err) {
                    console.log(err);
                    res.status(911).send("Server Issue");
                }
                if (match) {
                    req.session.save (() => { 
                        req.session.signedIn = true; 
                        res.json({
                            name: `${Brand.name}`,
                            email: `${Brand.email}`,
                            description: `${Brand.description}`,
                            id: `${Brand.id}`,
                            password: `${Brand.password}`,
                            signedIn: req.session.signedIn
                        });
                        })
            } else if (!match ) {
                res.send(console.log('Sorry Not Found'))
            } else {
                res.status(555).send("Not Authorized");
            }
        }); 
    })
    .catch((err) => res.status(666).json(err));
}
};