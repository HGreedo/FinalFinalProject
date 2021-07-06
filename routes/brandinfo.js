const router = require("express").Router();
const  Brand  = require("../models/brandindex");
const signInLogIn = require("../config/signinLogin"); 
const indexGetAll = require("../config/indexGetAll");

const brandLogin = signInLogIn.brandLogin;


// const  newBrand = require("../models/brandindex");
//works
// router.post('/api/brandindex', (req, res) => {
//  const newBrand = new Brand({})

//     newBrand
//     .save()
//     .then(() => res.json("New Brand Created!"))
//     .catch(err => res.status(400).json("Error: " + err))
// });

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


//working on this 
router.post('/api/brands/sign-up', (req, res) => {
    Brand.create(req.body).then(admin => res.json(admin));
    // console.log(admin)
});

router.post('/api/brands/login', (req, res) => {
    Brand.findOne(req.brandLogin).then(admin => res.json(admin));
    console.log(findOne.res);
});
//This is where you shouuld create a function for logging-out "POST"

//this route returns brand by id in the index search
router.route('api/brands/idSort').get(indexGetAll.findById)


module.exports = router;
