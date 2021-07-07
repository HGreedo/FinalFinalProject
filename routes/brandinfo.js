const router = require("express").Router();
const  Brand  = require("../models/brandindex");
const signInLogIn = require("../config/signinLogin"); 
// const indexGetAll = require("../config/indexGetAll");

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

//working returns brands //still works
router.get('/api/brands', (req, res) => {
    console.log("found brand");
    Brand.find({}) 
    .then((admin) => {
        res.json(admin);
    }).catch((err) => {res.json(err)
    });
});

//returns err
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


//working on this //works from browser
router.post('/api/brands/sign-up', (req, res) => {
    console.log(req.body)
    Brand.create(req.body).then(admin => res.json(admin));
});






router.post('/api/brands/login', (req, res) => {
    console.log(req.body);
    Brand.findOne(req.brandLogin).then(admin => res.json(admin));
});



// router.route('/api')
//   .post(signInLogIn.create)
//   .get(signInLogIn.findOne);

// router.route('api/brands/login')
//     .post(signInLogIn.findOne);



module.exports = router;


// router.post('/api/brands' + _id, (req, res) => {
//     console.log("found exact brand");
//     Brand.findOne({_id}) 
//     .then((brand) => {
//         res.json(brand);
//     }).catch((err) => {res.json(err)
//     });
// });