const path = require("path");
const router = require("express").Router();

router.get('/brands', (req, res) => {
    res.sendFile(path.join(__dirname, "../client/public/Brand.html"))
});

router.get('/boutiques', (req, res) => {
    res.sendFile(path.join(__dirname,"../client/public/Boutique.html"))
});


module.exports = router;