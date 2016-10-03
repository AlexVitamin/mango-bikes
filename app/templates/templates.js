module.exports = {

	// Model Builder 

	getSpeedItem:function(obj){
		return '<option color="#ff" data-id="'+obj.Id+'" class="select-speed" value="'+obj.name+'">'+obj.name+'</option>';
	},
	getPartsItem:function(obj){
		return '<option class="partOption" data-id="'+obj.partsId+'" value="'+obj.partsName+'"><h3>'+obj.partsName+'</h3></option>';
	},

	getTypes:function(obj){
      return '<div class="types" data-id="'+obj.partsId+'"></div>'
	},

	getAspects:function(obj){
		return '<div class="types-list" data-id="'+obj.partsId+'" data-name="'+obj.partsName+'" ><h1>'+obj.aspectsName+'</h1><hr><select size="6" class="optsList" data-id="'+obj.aspectsId+'"></select></div>';
	},

	getOpts:function(obj){
       return '<option data-id="'+obj.aspectsId+'" class="select-part" value="'+obj.optsName+'">'+obj.optsName+'</option>';
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