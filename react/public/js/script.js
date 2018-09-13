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
        $('#menu').hide();
	});

	$('#navDesigners').click(function(){
        $('#sectDesigners').show();
        $('#sectIndex').hide();
        $('#sectContact').hide();
        $('#nav').hide();
	});

    $('#navContact').click(function(){
        $('#sectContact').show();
		$('#sectIndex').hide();
        $('#sectDesigners').hide();
        $('#menu').hide();
    });

    $('.scroll-down').click(function(){
        $('html, body').animate({
            scrollTop:$('.our-goal').offset().top
        }, 3000);
 	});

	$('.scroll-up').click(function(){
        $('html, body').animate({
            scrollTop:$('.banner').offset().top
        }, 3000);
 	});

	// View stats button
	$('#viewStats').click(function() {
		$('#sectDesigners').hide();
		$('.header-bar').hide();
		$('#secStatistics').show();
	})

	$.ajax({
		type: 'GET',
		url: 'http://192.168.33.10:4000/data/staff.json',
		dataType: 'json',
		success: function(data){
			console.log(data);

			var initProfile = data[0].behance;

			$.ajax({
				type: 'GET',
				url: 'http://192.168.33.10:4000/behance/user/'+initProfile+'/projects',
				dataType: 'json',
				success: function(projData){
					console.log(projData);

					setProfileBackground(projData.projects[0].covers.original);
				},
				error: function(projErr){
					console.log('Error '+projErr.status);
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
