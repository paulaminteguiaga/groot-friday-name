exports = module.exports = function(app, mongoose) {

	var grootTeamSchema = new mongoose.Schema({
    team:         { type: String },
    complete:     { type: String }
  });

	mongoose.model('GrootTeam', grootTeamSchema);

};