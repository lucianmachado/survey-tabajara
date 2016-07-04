var moment = require('moment');
module.exports = {

	active: function(req, res) {
		Survey.find({isActive : true}).exec(function(err, survey) {
			if(survey.length === 0 ){
				res.send(404);
			}
			else {
				res.send(survey);
			}
		});
	},

  definition: function(req, res) {
    res.json(Survey.definition);
  }

};
