var model = {
	GVSU: {
		title: "GVSU", 
		description:"I am going to GVSU",
		imageSrc: ""
	},
	LCC: {
		title: "LCC", 
		description: "I went to LCC",
		imageSrc: ""
	},
	OE: {
		title: "O-E", 
		description:"I went to O-E",
		imageSrc: ""
	},
	KLA: {
		title: "KLA", 
		description:"I am interning at KL&A",
		imageSrc: ""
	},
	GPR: {
		title: "Genius Phone Repair", 
		description:"I used to work at Genius Phone Repair",
		imageSrc: ""
	},
	LS: {
		title: "GVSU Laker Store", 
		description:"I used to work at the GVSU Laker Store",
		imageSrc: ""
	}
}


$(document).ready(function() {

	$("#button-box").on('mouseenter' , function() {
	 	$('#button-box').css('border', 'solid 1px blue');
	 	
	 });
	$("#button-box").on('mouseleave' , function() {
	 	$('#button-box').css('border', 'solid 1px black');
	 	
	 });

	 $("button").on('click', function() {
	 	location.href="bootstrap-webpage.html"
	 });

	 //$('#external-links').height($(document).height());
	 

	$("#links").children().children().on('mouseenter', function() {
	 	$(this).parent().css('border', 'solid 1px blue');
	 	
	 });

	$("#links").children().children().on('mouseleave',  function() {
	 	$(this).parent().css('border', 'solid 1px black');

	 });


	$(".thumbnail").on("click", function() {
		var modalTitle = $(this).find("h3").text();
		var data = $(this).data("model");
		console.log(data);
		$(".modal-title").text(model[data].title);
		$(".modal-body").text(model[data].description);

	});

});