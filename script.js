document.getElementById('runButton').addEventListener('click', function() {
    var code = document.getElementById('codeArea').value;
    document.getElementById('output').innerHTML = code;
});
	
document.getElementById('toggleButton').addEventListener('click', function() {
	var textarea = document.getElementById('codeArea');
	if (textarea.style.display === "none") {
		textarea.style.display = "block";
	} 
	else {
		textarea.style.display = "none";
	}
});

/* This functions are for toggle, clearing the emulator and starting emulation */

document.getElementById('clearButton').addEventListener('click', function() {
    document.getElementById('codeArea').value = '';
	document.getElementById('output').innerHTML = '';
});

// Non va una beata minchia, porca puttana la troia

function myFunction() {
	location.replace('https://youtu.be/O3349-GRjhQ?si=i2HnXb-qPRqFGnRm')
	alert('GO F*UCK YOURSELF');
}
	
function aiFunction() {
	prompt("Who are you?, "User");
	console.log("stocazzo");
}
	
