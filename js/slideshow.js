//images stored in an array
var imgs =[];
var searchResults = {};

$(function() {
	//attach form submit to a search function
	$("#search-form").on("submit", search);
});

$("#stop").click("click", function() {
	$("#search-bar").removeClass("searching");
	$("#stop").removeClass("searching");
	$("#slideshow").removeClass("searching");
	searchResults = {};
	imgs =[];

});

function search(event) {
	//stop the default reload behavior of the form
	event.preventDefault();
	//set the following elements to display none
	$("#search-bar").addClass("searching");
	$("#stop").addClass("searching");
	$("#slideshow").addClass("searching");
	//grab userInput, save it as userInput
	//use babies as a search value
	var userInput = $("#query").val() || "babies";
	console.log("User Input was", userInput);

	$.get("http://www.reddit.com/search.json", {
		q: userInput + "nsfw:no",
		limit: 10
	}).done(function(response){
		console.log(response.data.children);
		// addSearchResult(response.data.children);
	});
}

//Logic to filter through the array and pick out the img links

//logic to add the links to the slide show div
function startDaShow (){
	interval = setInterval()
};


//clear the results when I hit search again
// function clearSearchResults(){
// 	$("#results").html("");
// }