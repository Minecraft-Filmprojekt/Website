var isFinished = true;
var leave = false;

function slideOverlay(off, isOverlay) {
    var div = document.getElementById("overlappingDivInput");
    var input = document.getElementById("indexInput");
    var text = document.getElementById("enterText");

    if (off) {
        //if(isOverlay) {
            text.style.opacity = "100%";
        //}
        //input.style.width = "144px";
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

function doSth() {
    
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

function openMenu() {
    var menu = document.getElementById("menu");
    var back = document.getElementById("backgroundMenu");
    var closeIcon = document.getElementById("closeIcon");

    menu.style.zIndex = 1;
    menu.style.opacity = "100%";
    menu.style.width = "350px";
    back.style.zIndex = 1;
    back.style.opacity = "70%";
    back.style.width = "calc(100% - 350px)"
    closeIcon.style.opacity = "100%";
}

function closeMenu() {
    var menu = document.getElementById("menu");
    var back = document.getElementById("backgroundMenu");
    var closeIcon = document.getElementById("closeIcon");

    menu.style.zIndex = -1;
    menu.style.opacity = "0%";
    menu.style.width = "0px";
    back.style.zIndex = -1;
    back.style.opacity = "0%";
    back.style.width = "100%";
    closeIcon.style.opacity = "0%";
}

function moveMenuItemRight(item) {
    item.style.paddingLeft = "25px";
    item.style.background = "#e6e6e6";
}

function moveMenuItemLeft(item) {
    item.style.paddingLeft = "15px";
    item.style.background = "none";
}