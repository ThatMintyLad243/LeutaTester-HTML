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
	location.replace('https://github.com/ThatMintyLad243/LeutaTester-HTML')
	alert("It's under-construction");
}
	
function aiFunction() {
	alert("This is very trash, wait at least ￼￼￼ months")
	console.log("The JavaScript is successfully imported");
}
	
