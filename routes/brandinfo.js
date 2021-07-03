const router = require("express").Router();
const  Brand  = require("../models/brandindex");
const signInLogIn = require("../config/signinLogin"); 
const indexGetAll = require("../config/indexGetAll");
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




//This is where you should create a function for logging-in "POST" //works
// router.route('/api/brands/sign-up').post(signInLogIn.create(newBrand));


//none of these work 

router.post('/api/brands/sign-up', (req, res) => {
    signInLogIn.create(req, newBrand).then(() => {
        res.json(true)
    })
});

router.route('/api/brands/login').post(signInLogIn.login)
//This is where you shouuld create a function for logging-out "POST"

//this route returns brand by id in the index search
router.route('api/brands/idSort').get(indexGetAll.findById)


module.exports = router;
