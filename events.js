// Create variables to point to DOM elements
var sections = document.getElementsByClassName("article-section");
var output = document.getElementById("output-target");

// When any section is clicked the output target text should be "You clicked on the {text of the section} section"

function displaySection(event){
		var display = event.target.textContent;
		 output.innerHTML = `<div><p>You have clicked the  ${display} </p></div>`;
}

document.body.addEventListener("click", displaySection);

// When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".
var h1hover = document.getElementById("page-title");
  
h1hover.addEventListener("mouseover", function(event) {   
	output.innerHTML = `<div><p>You moved your mouse over the header</p></div>`;
});

// When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".
h1hover.addEventListener("mouseleave", function(event) {   
  output.innerHTML = `<div><p>You left me!!</p></div>`;
});

// When you type characters into the input field, the output element should mirror the text in the input field.
var mimicMe = document.getElementById("keypress-input");

mimicMe.addEventListener("keypress", function(event){

 	var mimicMeElement = document.getElementById("keypress-input").value;
 	output.innerHTML = mimicMeElement;

});

// When you click the "Add color" button, the guinea-pig element's text color should change to blue.
var addColor = document.getElementById("add-color");
var pig = document.getElementById("guinea-pig");

addColor.addEventListener("click", function(){

  pig.classList.add("colorMe");

});

// When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.
var hulkify = document.getElementById("make-large");


hulkify.addEventListener("click", function(){

  pig.classList.add("hulk");

});
// When you click the "Capture it" button, the guinea-pig element should have a border added to it.
var border = document.getElementById("add-border");


border.addEventListener("click", function(){

  pig.classList.add("border");

});

// When you click the "Rounded" button, the guinea-pig element's border should become rounded.
var rounded = document.getElementById("add-rounding");


rounded.addEventListener("click", function(){

  pig.classList.add("rounded");

});
// The first section's text should be bold.
// The last section's text should be bold and italicized.
// Make the buttons stop appearing next to each other as inline elements. Change them into block elements.
