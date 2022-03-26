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

function suchen() {
    
}