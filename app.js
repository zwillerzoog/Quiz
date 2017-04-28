console.log("hello");



function rightClickHandler(){
	console.log("Button Clicked");
	$(".correct").removeClass("hidden");
	$(".incorrect").addClass("hidden");
	
}

function wrongClickHandler(){
	console.log("Oops!")
	$(".incorrect").removeClass("hidden");
	$(".correct").addClass("hidden");
}

function addClickHandler() {
	

	$(".right").click(rightClickHandler);

	$(".wrong").click(wrongClickHandler);

	$(".next").click(function() {
		var currentQuestion = $(".question").not(".hidden");
		currentQuestion.toggleClass("hidden");
		currentQuestion.next().toggleClass("hidden");
		$(".incorrect").addClass("hidden");
		$(".correct").addClass("hidden");
	});
};

$(document).ready(function(){
	
	console.log("In Document Ready");
	addClickHandler();

});