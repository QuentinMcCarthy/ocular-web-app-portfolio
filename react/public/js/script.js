console.log("JS: Ready");

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
	});

	$("#nav-designers").click(function(){
		$("#sect-index").hide();
		$("#sect-designers").show();
	});
});
