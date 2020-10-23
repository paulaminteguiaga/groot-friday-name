exports = module.exports = function(app, mongoose) {

	var grootUserSchema = new mongoose.Schema({
    name:     { type: String },
    team:     { type: String }
  });

	mongoose.model('GrootUser', grootUserSchema);

};