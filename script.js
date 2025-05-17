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

function myFunction() {
	location.replace('about:blank')
	alert('I am banishing you to the under construction shadow realm');
}
	
function aiFunction() {
	alert("IDs may interfer with UI elements");
	console.log("LeutaTester Emulator was imported successfully. Emulation started")
}
	