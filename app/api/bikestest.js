module.exports = {
getVariations:function(data, success, error){
		$.ajax({
		'method':'GET',
		'url':'YOU URL HERE',
		dataType:'json',
		data:JSON.stringify(data),
		success:function(response){
		if(typeof success === 'function')success(response);
		},
		error:function(error){
		if(typeof error === 'function')error(response);
		}
		});
      }
   }