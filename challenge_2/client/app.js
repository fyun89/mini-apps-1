$(document).ready(function(){
	$('form').on('submit', function(e){
		e.preventDefault();
		
		var data = $('textarea').val()
		$.ajax({
		  type: "POST",
		  url: '/converter',
		  contentType: 'applications/JSON',
		  data: data,
		  success: function(data) {
		  	var result = data; 
			$('#result').append(result)
		  	console.log(data)
		  },
		  error: function(err) {
		  	console.log('error')
		  }
		});
	});
	console.log(result)
});