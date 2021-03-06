var Item = require('../models/Item');

module.exports = {

  create: function(req, res) {
    var newItem = new Item(req.body);
    newItem.save(function(err, result) {
      if (err) return res.status(500).send(err);
      else res.send(result);
    });
  },

  read: function(req, res) {
    Item.find(req.query)
      .exec(function(err, result) {
        if (err) return res.status(500).send(err);
        else res.send(result);
      });
  },

  update: function(req, res) {
    Item.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
      if (err) return res.status(500).send(err);
      else res.send(result);
    });
  },

  delete: function(req, res) {
    Item.findByIdAndRemove(req.params.id, function(err, result) {
      if (err) return res.status(500).send(err);
      else res.send(result);
    });
  }

};
