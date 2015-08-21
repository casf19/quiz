// Get /author

exports.autor = function(req,res){
	res.render('author',  
			{nombre:'Claudía Saldívar',
		         imagen:'/images/cs.png',
			 errors:[]}
		  );
};
