const brandindex = require("../models/brandindex");

module.exports = {
    findById: function(req, res) {
        brandindex.Brand 
    .findById(req.params.id)
      .then(admin => res.json(admin))
      .catch(err => res.status(422).json(err));
  },

};