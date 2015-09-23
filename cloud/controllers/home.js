var _ = require('underscore');

exports.index = function(req, res){
  res.render('home/index', { layout: 'layout' });
};

