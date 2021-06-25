const router = require("express").Router();
const BrandInfo = require('../models/brandindex');

router.post('/api/boutiqueindex', (req, res) => {
    BrandInfo.create({}).then((admin) => {
        res.json(admin);
    })
    .catch((err) => {
        res.json(err);
    });
    console.log(admin);
});

router.put('/api/boutiqueindex/:id', ({ body, params }, res) => {
    BrandInfo.findByIdAndUpdate(
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

router.get('/api/brands', (req, res) => {
    BrandInfo.aggregate([
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

router.get('/api/brands/nameSort', (req, res) => {
    BrandInfo.aggregate([
        {
            $addfields: 'name',
        },
    ]).sort({_name: -1}).then((admin) => {
        console.log(admin);
    }).catch((err) => { res.json(err);
    });
});

router.delete('api/brands', ({body}, res) => {
    BrandInfo.findByIdAndDelete(body.id).then(() => {
        res.json(true);
    })
    .catch((err) => {
        res.json(err);
    });
});

module.exports = router;
