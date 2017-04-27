console.log("hello");



$(document).ready(function(){
	
	console.log("In Document Ready");
	addClickHandler();

});

function rightClickHandler(){
	console.log("Button Clicked");
	$(".correct").toggleClass("hidden");
}

function addClickHandler() {
	
	$(".right").click(rightClickHandler);

	$(".wrong").click(function() {
		$(".incorrect").toggleClass("hidden");
	});

	$(".next").click(function() {
		var currentQuestion = $(".question").not(".hidden");
		currentQuestion.toggleClass("hidden");
		currentQuestion.next().toggleClass("hidden");
	});
};