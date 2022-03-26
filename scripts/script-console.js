var path = "C:";
var isCaretWhite = true;
var interval;

function doFocus() {
    clearInterval(interval);
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
        validateInput(line0.value);
    } else {
        if(e.key.match(/^[a-zA-Z() ,;/\\&%$§"!^°?={}[\]]$/)) {
            inputChanged(true);
        } else {
            inputChanged(false);
        }
    }
}

function validateInput(inp) {
    var res = inp;
    var pathBefore = path;
    var emptyPath = " ";
    if(path == "C:") {
        for(var i = 0; i < (path.length + 4); i++) {
            emptyPath += " ";
        }
    } else {
        for(var i = 0; i < (path.length + 1); i++) {
            emptyPath += " ";
        }
    }

    if(inp == "ls") {
        res = "ls"
        if(path == "C:") {
            refreshLines(path + "\\> " + res);
            res = "about.html";
            refreshLines(emptyPath + res);
            res = "kenntnisse.html";
            refreshLines(emptyPath + res);
            res = "werbung.html";
            refreshLines(emptyPath + res);
            res = "kontakt.html";
            refreshLines(emptyPath + res);
        } else {
            refreshLines(path + "> " + res);
            res = "Verzeichnis ist leer";
            refreshLines(emptyPath + res);
        }
    } else if(inp.startsWith("cd ")) {
        if(path == "C:" && inp != "cd ..") {
            switch(inp.split(" ")[1].toLowerCase()) {
                case "about": case "about.html": case "über": case "über.html": case "übermich": case "übermich.html": case "über-mich": case "über-mich.html":
                    res = "cd about.html";
                    path += "\\about";
                    window.open("about.html", "_self")
                    break;
                case "kentnisse": case "kentnisse.html": case "kenntnisse": case "kenntnisse.html": case "knowledge": case "knowledge.html":
                    res = "cd kenntnisse.html";
                    path += "\\kenntnisse";
                    window.open("kentnisse.html", "_self")
                    break;
                case "werbung": case "werbung.html": case "ad": case "ad.html": case "ads": case "ads.html": case "advertisement": case "advertisement.html":
                    res = "cd werbung.html";
                    path += "\\werbung";
                    window.open("werbung.html", "_self")
                    break;
                case "kontakt": case "kontakt.html": case "contakt": case "contakt.html": case "contact": case "contact.html": case "kontact": case "kontact.html": case "kontackt": case "kontackt.html":
                    res = "cd kontakt.html";
                    path += "\\kontakt";
                    window.open("kontakt.html", "_self")
                    break;
                default:    refreshLines(pathBefore + "\\> " + res);
                            res = "Seite nicht gefunden"
            }
        } else {
            res = "Leer"
        }
        if(inp.split(" ")[1] == "..") {
            path = "C:";
            res = "cd ..";
        }
        if(pathBefore == "C:") {
            refreshLines(pathBefore + "\\> " + res);
        } else {
            refreshLines(pathBefore + "> " + res);
        }
    } else if(inp == "cd") {
        res = inp;
        if(pathBefore == "C:") {
            refreshLines(pathBefore + "\\> " + res);
        } else {
            refreshLines(pathBefore + "> " + res);
        }
        res = "Seite nicht gefunden";
        refreshLines(emptyPath + res);
    } else if(inp.trim() == "") {
        if(path == "C:") {
            refreshLines(path + "\\> ");
        } else {
            refreshLines(path + "> ");
        }
    } else {
        if(path == "C:") {
            refreshLines(path + "\\> " + res);
        } else {
            refreshLines(path + "> " + res);
        }
        res = "Befehl nicht gefunden";
        refreshLines(emptyPath + res);
    }
}

function refreshLines(text) {
    var line0 = document.getElementById("line0").lastElementChild;
    var line1 = document.getElementById("line1");
    var line2 = document.getElementById("line2");
    var line3 = document.getElementById("line3");
    var line4 = document.getElementById("line4");
    var line5 = document.getElementById("line5");
    var console = document.getElementById("console");

    console.style.borderRadius = "5px 5px 0 0";

    line5.innerHTML = line4.innerHTML;
    line4.innerHTML = line3.innerHTML;
    line3.innerHTML = line2.innerHTML;
    line2.innerHTML = line1.innerHTML;
    var counter = 0;
    if(line5.innerHTML !== "") {counter++}
    if(line4.innerHTML !== "") {counter++}
    if(line3.innerHTML !== "") {counter++}
    if(line2.innerHTML !== "") {counter++}
    line1.innerHTML = text;
    line0.value = "";
    if(path == "C:") {
        line0.parentElement.firstElementChild.innerHTML = path + "\\> ";
    } else {
        line0.parentElement.firstElementChild.innerHTML = path + "> ";
    }
    var caret = document.getElementById("barCaret");
    caret.style.marginLeft = (path.length + 2) * 15 + 12 + "px";
    console.style.height = 33 + counter * 28 + "px";
}