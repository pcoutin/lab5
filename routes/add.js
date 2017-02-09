var data = require("../data.json");

exports.addFriend = function(req, res) {    
  var newName = req.query.name;
  var newDesc = req.query.description;
  data.friends.push({
    'name': newName,
    'description': newDesc,
    'imageURL': 'http://lorempixel.com/400/400/people'
  });
  res.render('index', {
    'data': data
  });
};
