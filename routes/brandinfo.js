const router = require("express").Router();
const  Brand  = require("../models/brandindex");

//works
router.post('/api/brandindex', (req, res) => {
    const newBrand = new Brand({})

    newBrand
    .save()
    .then(() => res.json("New Brand Created!"))
    .catch(err => res.status(400).json("Error: " + err))
});

//works
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


//get brands by name
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

//
router.delete('api/brands/delete', (req, res) => {
    Brand.findByIdAndDelete(req.params.id).then(() => {
        res.json(true);
    })
    .catch((err) => {
        res.json(err);
    });
});

//This is where you should create a function for logging-in "POST"
router.post('/api/brands/sign-up', (req, res) => {
    console.log(req.body);
    Brand.create(req.body).catch(admin => res.json(admin))
    .catch(err => res.status(422).json(err));
    //router.post(Brand.create);
//fix this 

});

//buggy 
router.post('/api/brands/login', (req, res) => {
    Brand.create(); {
        const {name, id, address, website, email, password} = req.body;
        const newUser = {name, id, address, website, email, password};
        Brand.newUser.create(newUser).then(() => res.json({ status: "success" }))
        .catch((err) => res.status(503).json(err));
    };
});
//This is where you shouuld create a function for logging-out "POST"

module.exports = router;
