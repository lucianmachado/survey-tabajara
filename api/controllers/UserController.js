module.exports = {
		register : function(req,res){
			var user = req.body;

			User.create(user).exec(function(err,created){
				if(err){
					res.send(err,500);
				}else{
				res.send(created,201);
				}
			});
		},

    definition: function(req, res) {
        res.json(User.definition);
    }

};
