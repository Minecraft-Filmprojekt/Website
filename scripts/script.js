var isFinished = true;
var leave = false;

function slideOverlay(off, isOverlay) {
    var div = document.getElementById("overlappingDivInput");
    var input = document.getElementById("searchInput");
    var text = document.getElementById("enterText");

    if (off) {
        text.style.opacity = "100%";
        input.style.paddingLeft = "5px";
        input.style.paddingRight = "51px";
        div.style.width = "50px";
        div.style.marginLeft = "150px";
        div.addEventListener("transitionend", function (e) {
            if(e.propertyName === "margin-left") {
                div.style.pointerEvents = "all";
                isFinished = true;
                text.style.opacity = "100%";
            }
        });
    } else {
        if(isFinished) {
            if(leave) {
                text.style.opacity = "0%";
                leave = false;
            }
            isFinished = false;
            input.style.paddingLeft = "31px";
            input.style.paddingRight = "5px",
            div.style.width = "30px";
            div.style.marginLeft = "0px";
            div.addEventListener("transitionend", function (e) {
                if(e.propertyName === "margin-left") {
                    div.style.pointerEvents = "none";
                    isFinished = true;
                    text.style.opacity = "0%";
                }
            });
        }
    }
}

function isFinishedTrue() {
    isFinished = true;
}

function leaveTrue() {
    leave = true;
}
function leaveFalse() {
    leave = false;
}

function search(key) {
    
}

function scrollSec(num) {
    document.getElementById("section" + num).scrollIntoView();
}

function scrollOneSecUp() {
    if(window.scrollY > 2*window.innerHeight) {
        scrollSec(3);
    } else if(window.scrollY > window.innerHeight) {
        scrollSec(2);
    } else {
        scrollSec(1);
    }
}
function scrollOneSecDown() {
    if(window.scrollY < window.innerHeight) {
        scrollSec(2);
    } else {
        scrollSec(3);
    }
}

function expandConsole() {
    var console = document.getElementById("console");
    var line0div = document.getElementById("line0");
    var line1 = document.getElementById("line1");
    var line2 = document.getElementById("line2");
    var line3 = document.getElementById("line3");
    var line4 = document.getElementById("line4");
    var line5 = document.getElementById("line5");

    if(console.style.height != "164px") {
        line0div.style.opacity = "0";

        if(window.innerWidth > 400) {
            console.style.width = "40%";
            console.style.marginLeft = "calc(50vw - 20%)";
            console.style.height = "164px";
            console.style.borderRadius = "20px";
            if(window.innerHeight > 500) {
                console.style.marginTop = "calc(50vh - 40px - 82px)";
            }
            console.addEventListener('transitionend', makeConsoleTextVisible);
        }
    }
}
function collapseConsole() {
    var console = document.getElementById("console");
    var line1 = document.getElementById("line1");
    var line2 = document.getElementById("line2");
    var line3 = document.getElementById("line3");
    var line4 = document.getElementById("line4");
    var line5 = document.getElementById("line5");

    console.style.width = "150px";
    console.style.marginLeft = "calc(50vw - 95px)";
    console.style.height = "34px"
    console.style.borderRadius = "34px";
    line1.style.display = "none";
    line2.style.display = "none";
    line3.style.display = "none";
    line4.style.display = "none";
    line5.style.display = "none";
    line1.style.opacity = "0";
    line2.style.opacity = "0";
    line3.style.opacity = "0";
    line4.style.opacity = "0";
    line5.style.opacity = "0";

    console.style.marginTop = "calc(50vh - 40px)";
}

function makeConsoleTextVisible() {
    var line0div = document.getElementById("line0");
    var console = document.getElementById("console");
    var line1 = document.getElementById("line1");
    var line2 = document.getElementById("line2");
    var line3 = document.getElementById("line3");
    var line4 = document.getElementById("line4");
    var line5 = document.getElementById("line5");

    line1.style.display = "block";
    line2.style.display = "block";
    line3.style.display = "block";
    line4.style.display = "block";
    line5.style.display = "block";
    line1.style.opacity = "1";
    line2.style.opacity = "1";
    line3.style.opacity = "1";
    line4.style.opacity = "1";
    line5.style.opacity = "1";
    line0div.style.opacity = "1";

    console.removeEventListener('transitionend', makeConsoleTextVisible);
}

function bodyClicked(e) {
    if(e.target.parentElement.id != "line0") {
        collapseConsole();
    }
}