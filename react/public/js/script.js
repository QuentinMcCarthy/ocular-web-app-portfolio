$(document).ready(function(){
	$('.menu-btn').click(function(){
		$('.menu').toggle();
	});
	$('.menu-btn').click(function(){
		$('.menu-btn').toggleClass('btnMenuClicked');
	});

	// Temporary navigation
	$('#navIndex').click(function(){
		$('#sectIndex').show();
		$('#sectDesigners').hide();
	});

	$('#navDesigners').click(function(){
		$('#sectIndex').hide();
		$('#sectDesigners').show();
	});

	$.ajax({
		type: 'GET',
		url: 'http://192.168.33.10:4000/data/staff.json',
		dataType: 'json',
		success: function(data){
			console.log(data);
		},
		error: function(err){
			console.log('Error '+err.status);
			console.log(err);
		}
	});
});
