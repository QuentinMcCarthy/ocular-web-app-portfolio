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
		$("#sect-designers").hide();
        $("#menu").hide();
	});

	$("#nav-designers").click(function(){
		$("#sect-index").hide();
		$("#sect-designers").show();
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
