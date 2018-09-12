$(document).ready(function(){
	$(".menu-btn").click(function(){
		$(".menu").toggle();
	});
	$(".menu-btn").click(function(){
		$(".menu-btn").toggleClass("btnMenuClicked");
	});

	// Temporary navigation
	$("#nav-index").click(function(){
		$("#sect-index").show();
        $("#sectHome").show();
		$("#sect-designers").hide();
        $("#sectContact").hide();
        $("#menu").hide();
	});

	$("#nav-designers").click(function(){
        $("#sect-designers").show();
        $("#sect-index").hide();
        $("#sectHome").hide();
        $("#sectContact").hide();
        $("#menu").hide();
	});

    $("#navContact").click(function(){
        $("#sectContact").show();
        $("#sect-designers").hide();
        $("#sectHome").hide();
        $("#menu").hide();
    });

    $(".scroll-down").click(function(){
        $("html, body").animate({
            scrollTop:$(".our-goal").offset().top
        }, 3000);
  });

	$.ajax({
		type: "GET",
		url: "http://192.168.33.10:4000/data/staff.json",
		dataType: "json",
		success: function(data){
			console.log(data);
		},
		error: function(err){
			console.log("Error "+err.status);
			console.log(err);
		}
	});
});
