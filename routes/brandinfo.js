const router = require("express").Router();
const  Brand  = require("../models/brandindex");

//
router.post('/api/brandindex', (req, res) => {
    
    
    
    Brand.create({}).then((admin) => {
        res.json(admin);
    })
    .catch((err) => {
        res.json(err);
    });
    console.log(admin);
});

//
router.put('/api/brandindex/:id', ({ body, params }, res) => {
    Brand.findByIdAndUpdate(
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

//working returns brands 
router.get('/api/brands', (req, res) => {
    console.log("found brand");
    Brand.find({}) 
    .then((admin) => {
        res.json(admin);
    }).catch((err) => {res.json(err)
    });
});

//
router.get('/api/brands/nameSort', (req, res) => {
    Brand.aggregate([
        {
            $addfields: 'name',
        },
    ]).sort({_name: -1}).then((admin) => {
        console.log(admin);
    }).catch((err) => { res.json(err);
    });
});

router.delete('api/brands', ({body}, res) => {
    Brand.findByIdAndDelete(body.id).then(() => {
        res.json(true);
    })
    .catch((err) => {
        res.json(err);
    });
});

module.exports = router;
