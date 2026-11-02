document.getElementById('runButton').addEventListener('click', function() {
    var code = document.getElementById('codeArea').value;
    document.getElementById('output').src = "data:text/html;base64," + btoa(code);
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

document.getElementById('clearButton').addEventListener('click', function() {
    document.getElementById('codeArea').value = '';
	document.getElementById('output').innerHTML = '';
});

function repFunction() {
	location.replace('https://github.com/ThatMintyLad243/LeutaTester-HTML')
	alert("It's under-construction");
}

// If you don't like the look

let clickCount = 0;
const button = document.getElementById('uiChange');
const element = document.getElementById('uiStyle');

button.addEventListener('click', () => {
    clickCount++;
    switch (clickCount) {
        case 1:
            element.setAttribute('href', 'https://unpkg.com/xp.css');
            break;
        case 2:
            element.setAttribute('href', 'https://unpkg.com/7.css');
            break;
        case 3:
            element.setAttribute('href', 'https://unpkg.com/98.css');
            break;
		case 4:
			clickCount = 1;
			break;
        default:
            clickCount = 0;
            break;
    }
});
