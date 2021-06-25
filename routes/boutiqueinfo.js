const router = require("express").Router();
const BoutiqueInfo = require('../models/boutiqueindex');

router.post('/api/boutiqueindex', (req, res) => {
    BoutiqueInfo.create({}).then((admin) => {
        res.json(admin);
    })
    .catch((err) => {
        res.json(err);
    });
    console.log(admin);
});

router.put('/api/boutiqueindex/:id', ({ body, params }, res) => {
    BoutiqueInfo.findByIdAndUpdate(
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

router.get('/api/boutiques', (req, res) => {
    BoutiqueInfo.aggregate([
        {
            $addfields: {
                name: {},
                location: {},
                email: {},
                type: {}
            }
        }
    ]) .then((admin) => {
        res.json(admin);
    }).catch((err) => {res.json(err)
    });
});

router.get('/api/boutiques/nameSort', (req, res) => {
    BoutiqueInfo.aggregate([
        {
            $addfields: 'name',
        },
    ]).sort({_name: -1}).then((admin) => {
        console.log(admin);
    }).catch((err) => { res.json(err);
    });
});

router.delete('api/boutiques', ({body}, res) => {
    BoutiqueInfo.findByIdAndDelete(body.id).then(() => {
        res.json(true);
    })
    .catch((err) => {
        res.json(err);
    });
});

module.exports = router;

