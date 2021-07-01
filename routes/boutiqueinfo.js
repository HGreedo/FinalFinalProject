const router = require("express").Router();
const Boutique = require("../models/boutiqueindex");

router.post('/api/boutiqueindex', (req, res) => {
    Boutique.create({})
    .then((admin) => {
        res.json(admin);
    })
    .catch((err) => {
        res.json(err);
    });
    console.log(admin);
});

router.put('/api/boutiqueindex/:id', ({ body, params }, res) => {
    Boutique.findByIdAndUpdate(
        params.id,
        {$push: { brands: body } },
        {new: true, runValidators: true }
    ) .then((admin) => {
        res.json(admin);
    })
    .catch((err) => {
        res.json(err);
    });
});

//this one works
router.get('/api/boutiques', (req, res) => {
    console.log("found boutique");
    Boutique.find({}) 
    .then((admin) => {
        res.json(admin);
    }).catch((err) => {res.json(err)
    });
});

router.get('/api/boutiques/nameSort', (req, res) => {
    Boutique.aggregate([
        {
            $addfields: 'name',
        },
    ]).sort({_name: -1}).then((admin) => {
        console.log(admin);
    }).catch((err) => { res.json(err);
    });
});

router.delete('api/boutiques/delete', ({body}, res) => {
    Boutique.findByIdAndDelete(body.id).then(() => {
        res.json(true);
    })
    .catch((err) => {
        res.json(err);
    });
});

//This is where you should create a function for logging-in "POST"

//Thuis is where you shouuld create a function for logging-out "POST"
module.exports = router;

