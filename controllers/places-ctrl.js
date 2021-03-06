var express = require('express');
var Place = require('../models/place');
var User = require('../models/user');

exports.postPlaces = function(req, res) {
  var currentUser = req.user;

  var place = new Place({
    venue      : req.body.venue,
    yelpId     : req.body.yelpId,
    city       : req.body.city,
    zipcode    : req.body.zipcode,
    category   : req.body.category,
    imageUrl   : req.body.imageUrl
  });
  
  currentUser.places.push(place);

  currentUser.save(function(err) {
    if (err) return console.log(err); 
    console.log('Me just saved: ', place);
    res.send({message: 'Place Added!'});
  });
};


exports.deletePlace = function(req, res) {
  var user = req.user;
  var id = req.body.placeId;

  var place = user.places.id(id).remove();

  user.save(function(err) {
    if (err) return res.send(err);
    console.log('Me deleted it');
    res.redirect('/');
  });
  
};