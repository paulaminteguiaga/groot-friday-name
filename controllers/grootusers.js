var mongoose = require('mongoose');
var GrootUser  = mongoose.model('GrootUser');

//GET - Return all grootusers in the DB
exports.findAllGrootUsers = function(req, res) {
	GrootUser.find(function(err, grootusers) {
    if(err) res.send(500, err.message);

    console.log('GET /grootusers')
		res.status(200).jsonp(grootusers);
	});
};

exports.findByUserName = function(req, res) {

	GrootUser.findOne({ 'name': req.params.name }, function(err, grootuser) {
    if(err) return res.send(500, err.message);

    console.log('GET /grootuser/' + req.params.name);
		res.status(200).jsonp(grootuser);
	});
};

exports.addGrootUser = function(req, res) {
	console.log('POST');
	console.log(req.body);

	var grootuser = new GrootUser({
		name:    req.body.name,
		team: 	  req.body.team
	});

	grootuser.save(function(err, grootuser) {
		if(err) return res.send(500, err.message);
        res.status(200).jsonp(grootuser);
	});
};

exports.updateGrootUser = function(req, res) {
	GrootUser.findOne({ 'name': req.params.name }, function(err, grootuser) {
		grootuser.name   = req.body.name;
		grootuser.team   = req.body.team;

		grootuser.save(function(err) {
			if(err) return res.send(500, err.message);
      res.status(200).jsonp(grootuser);
		});
	});
};

exports.deleteGrootUser = function(req, res) {

    GrootUser.findByIdAndRemove(req.params.id, function(err, grootuser) {
        if (err) return res.send(500, err.message);
        res.json({"message" : "user deleted"});
    });
};