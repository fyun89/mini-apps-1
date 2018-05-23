//var server = require('../server.js')
$(document).ready(function(){
	$('form').on('submit', function(e){
		e.preventDefault();
		//console.log($('textarea').val())
		
		var data = $('textarea').val()

		$.ajax({
		  type: "POST",
		  url: '/converter',
		  contentType: 'applications/JSON',
		  data: data,
		  success: function(data) {console.log(data)},
		  error: function(err) {console.log('error')}
		  // dataType: 'json'
		});
	});
});