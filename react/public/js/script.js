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
		$('#sectContact').hide();

		$('#nav').show();
		$('#menu').hide();
	});

	$('#navDesigners').click(function(){
		$('#sectIndex').hide();
		$('#sectDesigners').show();
		$('#sectContact').hide();

		$('#nav').hide();
		$('#menu').hide();
	});

	$('#navContact').click(function(){
		$('#sectIndex').hide();
		$('#sectDesigners').hide();
		$('#sectContact').show();

		$('#nav').show();
		$('#menu').hide();
	});

	$(".scroll-down").click(function(){
		$("html, body").animate({
			scrollTop:$(".our-goal").offset().top
		}, 3000);
	});

	$.ajax({
		type: 'GET',
		url: 'http://192.168.33.10:4000/data/staff.json',
		dataType: 'json',
		success: function(data){
			console.log(data);

			var initProfile = data[0].behance;

			$.ajax({
				type: "GET",
				url: "http://192.168.33.10:4000/behance/user/"+initProfile+"/projects/projects",
				dataType: "json",
				success: function(projData){
					console.log(projData);
				},
				error: function(projErr){
					console.log("Error "+projErr.status);
					console.log(projErr);
				}
			});
		},
		error: function(err){
			console.log('Error '+err.status);
			console.log(err);
		}
	});
});

function setProfileBackground(image){

}
