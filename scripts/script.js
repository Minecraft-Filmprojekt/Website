var color_online_text = "#5e8a35";
var color_online_back = "#abf88c";
var color_online_border = "#7ae219";
var color_offline_text = "#ca2121";
var color_offline_back = "#f17a7a";
var color_offline_border = "#ad1313";

window.addEventListener('load', function() {
    var container = document.getElementById("container-status");
    var text_status = document.getElementById("text_status");
    var text_version = document.getElementById("text_status_version");
    var text_player = document.getElementById("text_status_player");
    
    fetch('https://api.mcsrvstat.us/2/mcfp.gq')
        .then(response => response.text())
        .then(function(data) {
            var json = JSON.parse(data);
            if(json.online) {
                container.style.backgroundColor = color_online_back;
                container.style.borderColor = color_online_border;
                container.style.boxShadow = "0px 0px 5px " + color_online_back;
                text_status.innerText = "Der Server ist online.";
                text_status.style.color = color_online_text;
                text_version.innerText = "Version: " + json.version;
                text_player.innerText = "Spieler: " + json.players.online + " von " + json.players.max;
            } else {
                container.style.backgroundColor = color_offline_back;
                container.style.borderColor = color_offline_border;
                container.style.boxShadow = "0px 0px 5px " + color_offline_back;
                text_status.innerText = "Der Server ist offline.";
                text_status.style.color = color_offline_text;
            }
            container.style.opacity = 1;
        });
});



function scrollSec(sec) {
    document.getElementById("section" + sec).scrollIntoView();
}