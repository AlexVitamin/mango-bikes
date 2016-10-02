module.exports = {

	// Model Builder 

	getSpeedItem:function(obj){
		return '<option color="#ff" data-id="'+obj.Id+'" class="select-speed" value="'+obj.name+'">'+obj.name+'</option>';
	},
	getPartsItem:function(obj){
		return '<option class="select-part" value="'+obj.partsName+'">'+obj.partsName+'</option>';
	},

	getAspects:function(obj){
		return '<div class="types-list"><h1>'+obj.aspectsName+'</h1> <hr> <select class="select" size="6" id="optsList"></select></div>';
	},

	getOpts:function(obj){
       return '<option data-id="'+obj.optsName+'" class="select-part" value="'+obj.optsName+'">'+obj.optsName+'</option>'
	},

	// Bike Builder 

	getCustomBikeParts:function(obj){
		return '<div class="select-component" id="'+obj.Id+'" data-panels="'+obj.name+'"><span class="select-component__text">'+obj.name+'</span></div>'
	},

	getAspectsName:function(obj){
		return '<h2>'+obj.aspectsName+'</h2><select id="testLists"></select>'
	},

	getAspectsIcon:function(obj){
		return '<img src="" alt="'+obj.optsName+'"/>'
	},

	getAspectsList:function(obj){
		return '<option class="select-part" value="'+obj.optsName+'">'+obj.optsName+'</option>'
	},

	getColourSwatch:function(obj){
		// send the hex code, use that to know which colour to display inside a box to show to the user
		return '<img src="" alt="'+obj.optsName+'"/>'
	},
};

//$('option[data-id="'+obj.Id+'"]').val('dfsdf');