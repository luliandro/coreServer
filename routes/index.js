var requestHandler = require('lj_modules/requestHandlers')
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', {title: 'Express'})
};

exports.journeyplanner = function(req, res){
    requestHandler.journeyplanner(req, res);

};