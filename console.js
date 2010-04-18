var console = {
	log: function(msg){
		document.body.adopt(new Element('p',{
			'class': 'log',
			text: Object.inspect(msg)
		}));
	},
	error: function(msg){
		document.body.adopt(new Element('p',{
			'class': 'error',
			text: Object.inspect(msg)
		}));
	}
};