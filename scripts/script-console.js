var path = "C:";
var isCaretWhite = true;
var interval;

function doFocus() {
    interval = setInterval(function () {
            var caret = document.getElementById("barCaret");
            if(isCaretWhite) {
                caret.style.backgroundColor = "transparent";
            } else {
                caret.style.backgroundColor = "white";
            }
            isCaretWhite = !isCaretWhite;
        }, 500);
}

function noFocus() {
    clearInterval(interval);
}

function inputChanged(char) {
    var line0 = document.getElementById("line0").lastElementChild;
    var caret = document.getElementById("barCaret");
    if(char) {
        caret.style.marginLeft = (path.length + line0.selectionStart + 3) * 15 + 12 + "px";
    } else {
        if(line0.selectionStart === 0) {
            caret.style.marginLeft = (path.length + line0.selectionStart + 2) * 15 + 12 + "px";
        } else {
            caret.style.marginLeft = (path.length + line0.selectionStart + 1) * 15 + 12 + "px";
        }
    }
}

function keyPressed(e) {
    var line0 = document.getElementById("line0").lastElementChild;
    if(e.key == "Enter") {
        refreshLines(line0.value);
    } else {
        if(e.key.match(/^[a-zA-Z() ,;/\\&%$§"!^°?={}[\]]$/)) {
            inputChanged(true);
        } else {
            inputChanged(false);
        }
    }
}

function refreshLines(text) {
    var line0 = document.getElementById("line0").lastElementChild;
    var line1 = document.getElementById("line1");
    var line2 = document.getElementById("line2");
    var line3 = document.getElementById("line3");
    var line4 = document.getElementById("line4");
    var line5 = document.getElementById("line5");

    line5.innerHTML = line4.innerHTML;
    line4.innerHTML = line3.innerHTML;
    line3.innerHTML = line2.innerHTML;
    line2.innerHTML = line1.innerHTML;
    if(path === "C:") {
        line1.innerHTML = path + "\\> " + text;
    } else {
        line1.innerHTML = path + "> " + text;
    }
    line0.value = "";
    var caret = document.getElementById("barCaret");
    caret.style.marginLeft = (path.length + 2) * 15 + 12 + "px";
}