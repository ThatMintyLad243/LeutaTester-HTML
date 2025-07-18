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

// If you don't like the look

let clickCount = 0;
const button = document.getElementById('uiChange');
const element = document.getElementById('uiStyle');

button.addEventListener('click', () => {
    clickCount++;
    switch (clickCount) {
        case 1:
            element.setAttribute('href', 'https://unpkg.com/xp.css@/dist/98.css');
            console.log('Primo click');
            break;
        case 2:
            element.setAttribute('href', 'https://unpkg.com/7.css');
            console.log('Secondo click');
            break;
        case 3:
            element.setAttribute('href', 'https://unpkg.com/98.css');
            console.log('Terzo click');
            break;
        default:
            alert('Fuck you');
            break;
    }
});


