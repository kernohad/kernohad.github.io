$(document).ready(function() {

	$("#button-box").on('mouseenter' , function() {
	 	$('#button-box').css('border', 'solid 1px blue');
	 	
	 });
	$("#button-box").on('mouseleave' , function() {
	 	$('#button-box').css('border', 'solid 1px black');
	 	
	 });

	 $("button").on('click', function() {
	 	alert("This button does not do anything.");
	 });

	 //$('#external-links').height($(document).height());
	 

	$("#links").children().children().on('mouseenter', function() {
	 	$(this).parent().css('border', 'solid 1px blue');
	 	
	 });

	$("#links").children().children().on('mouseleave',  function() {
	 	$(this).parent().css('border', 'solid 1px black');

	 });

});