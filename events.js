// Create variables to point to DOM elements
var sections = document.getElementsByClassName("article-section");
var output = document.getElementById("output-target");

//create function that recognizes what section was clicked and display a comment


// When any section is clicked the output target text should be "You clicked on the {text of the section} section"

function displaySection(event){
		var display = event.target.textContent;
		 output.innerHTML = `<div><p>You have clicked the  ${display} </p></div>`;
	}

	document.body.addEventListener("click", displaySection);

// When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".
function hover(event){

}

// When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".
// When you type characters into the input field, the output element should mirror the text in the input field.
// When you click the "Add color" button, the guinea-pig element's text color should change to blue.
// When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.
// When you click the "Capture it" button, the guinea-pig element should have a border added to it.
// When you click the "Rounded" button, the guinea-pig element's border should become rounded.
// The first section's text should be bold.
// The last section's text should be bold and italicized.
// Make the buttons stop appearing next to each other as inline elements. Change them into block elements.
