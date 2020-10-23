var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    methodOverride  = require("method-override"),
    mongoose        = require('mongoose');

var PORT = process.env.PORT || 3000;

// Connection to DB
mongoose.connect('mongodb+srv://rehab:rehab@cluster0.siutf.mongodb.net/grootgamedb?retryWrites=true&w=majority', function(err, res) {
  if(err) throw err;
  console.log('Connected to Database');
});

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

// Import Models and controllers
var models     = require('./models/grootuser')(app, mongoose);
var GrootUserCtrl = require('./controllers/grootusers');

// Example Route
var router = express.Router();
router.get('/', function(req, res) {
  res.send("Groot Friday Game");
});

app.use(router);

// API routes
var grootusers = express.Router();

grootusers.route('/grootusers')
  .get(GrootUserCtrl.findAllGrootUsers)
  .post(GrootUserCtrl.addGrootUser);

grootusers.route('/grootusers/:name')
  .get(GrootUserCtrl.findByUserName)
  .put(GrootUserCtrl.updateGrootUser);

grootusers.route('/grootusers/:id')
  .delete(GrootUserCtrl.deleteGrootUser);

app.use('/api', grootusers);

// Start server
app.listen(PORT, function() {
  console.log("Node server running on http://localhost:3000");
});