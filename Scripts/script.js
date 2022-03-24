window.addEventListener('load',function load() {
	document.getElementById('Stream_SpielbaerLP').style.width = window.innerWidth * 0.7 + "px";
	document.getElementById('Stream_SpielbaerLP').style.height = document.getElementById('Stream_SpielbaerLP').style.width.split("p")[0] / 620 * 378 + document.getElementById('SpielbaerLPchat_embed').style.borderWidth + "px";
	document.getElementById('SpielbaerLPchat_embed').style.width = window.innerWidth - document.getElementById('Stream_SpielbaerLP').style.width.split("p")[0] - 120 + "px";
	document.getElementById('SpielbaerLPchat_embed').style.height = document.getElementById('Stream_SpielbaerLP').style.height;
	//document.getElementById('scrollIndiFore').style.width = 450 + "px";
//	document.getElementById('scrollIndiBack').style.width = document.getElementById('scrollDiv').clientWidth - 400 + "px";
});

function openLink(adress) {
	window.open(adress,"_self")
}

function getBlue(x) {
	x.style.transition = "background 0.15s linear 0s";
	x.style.background = '#1c86ee'
}

function getNotBlue(x) {
	x.style.transition = "background 0.15s linear 0s";
	x.style.background = '';
}

function checkScroll() {
	var searchEl = document.getElementById('search');
	var searchInput = document.getElementById('searchInput');
	var satisImg = document.getElementById('satisImg');
	var toTop = document.getElementById('toTop');
	var toBottom = document.getElementById('toBottom');
	var dropDownTi = document.getElementsByClassName('dropDownTitle');
	//var scrollIndiFore = document.getElementById('scrollIndiFore');
	var scrollIndiBack = document.getElementById('scrollIndiBack');
	var disclaimer = document.getElementsByClassName('disclaimer');
	searchEl.style.transition = "height 0.2s linear 0s";
	searchInput.style.transition = "height 0.2s linear 0s";
	satisImg.style.transition = "height 0.2s linear 0s";
	toTop.style.transition = "opacity 0.3s linear 0s";
	toBottom.style.transition = "opacity 0.3s linear 0s";
	//scrollIndiFore.style.transition = "height 0.2s linear 0s";
	scrollIndiBack.style.transition = "height 0.2s linear 0s, width 0.1s linear 0s";
//überschreibt sich das? \/ !!!
	
//	scrollIndiFore.style.transition = "margin 0.2s linear 0s";
//	scrollIndiBack.style.transition = "margin 0.2s linear 0s";
//	scrollIndiBack.style.transition = "width 0.1s linear 0s";
	if (window.pageYOffset > 30) {
		searchEl.style.height = '40px';
		searchInput.style.height = '21px';
		satisImg.style.height = '40px';
		toTop.style.opacity = '100%';
		toTop.style.pointerEvents = 'auto';
		//scrollIndiFore.style.height = '40px';
		scrollIndiBack.style.height = '40px';
		for (i=0;i<dropDownTi.length;i++) {
			dropDownTi[i].style.transition = "height 0.2s linear 0s";
			dropDownTi[i].style.height = '40px';
		}
	} else {
		searchEl.style.height = '80px';
		searchInput.style.height = '26px';
		satisImg.style.height = '80px';
		toTop.style.opacity = '0%';
		toTop.style.pointerEvents = 'none';
		//scrollIndiFore.style.height = '80px';
		scrollIndiBack.style.height = '80px';
		for (i=0;i<dropDownTi.length;i++) {
			dropDownTi[i].style.transition = "height 0.2s linear 0s";
			dropDownTi[i].style.height = '80px';
		}
	}
	if (window.scrollY < (window.scrollMaxY - 30)) {
		toBottom.style.opacity = '100%';
		toBottom.style.pointerEvents = 'auto';
	} else {
		toBottom.style.opacity = '0%';
		toBottom.style.pointerEvents = 'none';
	}

	scrollIndiBack.style.width = (window.scrollY/window.scrollMaxY) * (450) + "px";

}

function bodyClicked(e) {
	//alert(e.offsetHeight);
}

function search(e) {
	
	if ((e == 'none') || e.keyCode == '13') {
		var sElList = document.getElementById('content').querySelectorAll('p,h1,h2,iframe,a');
		var sElCoordList = [];
		var ul = document.getElementById('searchResList');
		var keyword = document.getElementById('searchInput').value;
	
		ul.innerHTML = "";
		
		for (i=0;i<sElList.length;i++) {
			if (sElList[i].innerText.toLowerCase().includes(keyword.toLowerCase()) && sElList[i].children.length === 0 && !(keyword === "") && !(keyword === " ")) {
				sElCoordList.push(sElList[i].offsetTop-60);
				var entry = document.createElement('li');
				entry.className = "searchResItem"
				entry.id = "searchResItem" + (ul.childElementCount);
				entry.addEventListener("click", function hi(){
					scrTo(0,sElCoordList[this.id.split("m")[1]]);
				});
				entry.appendChild(document.createTextNode(sElList[i].innerHTML));
				ul.appendChild(entry);
			}
		}
		
		if(ul.innerHTML === "" && keyword === "" || keyword === " ") {
			ul.innerText = "Bitte geben Sie einen gültigen Suchbegriff ein!"
		} else if (ul.innerHTML === "") {
			ul.innerText = "Leider gibt es keine Suchergebnisse zu " + keyword + ".";
		}
		
		if (!(keyword === "") & !(keyword === " ")) {
	/*	var request = new XMLHttpRequest();
	      	request.open("POST", "https://discord.com/api/webhooks/812075663669461023/AtuJ3BaWd6enu_WSbyjtmxLuMREMIBAmxKyr-GnbhCw4NbOc3TVHAtrdQTWbsJheT0MX");
	
	      	request.setRequestHeader('Content-type', 'application/json');
	
	      	var params = {
	      	  username: "Website Webhook",
	     	   avatar_url: "",
	      	  content: "Suchbegriff: '" + keyword + "'\n"
						+ ul.innerText
	      	}
	
	     	 request.send(JSON.stringify(params));*/
		}
		
		window.scrollTo(0,1710);
	}
}

function scrollUp() {
	//html.style.transition = "scroll-behavior 1s smooth 0s";
	window.scrollTo(0,0);
}
function scrollDown() {
	//html.style.transition = "scroll-behavior 1s smooth 0s";
	window.scrollTo(0,window.scrollMaxY);
}

function dropDown(x) {
	x.children[0].style.transition = "background 0.1s linear 0s";
	x.children[0].style.background = '#96D532';
	var liList = x.getElementsByTagName('li');
	for (i=1;i<liList.length;i++) {
		liList[i].style.transition = "opacity 1s linear 0s"
		liList[i].style.opacity = '100%';
		liList[i].style.display = 'block'
	}
}

function dropUp(x) {
	x.children[0].style.transition = "background 0.1s linear 0s";
	x.children[0].style.background = 'rgba(102,204,0,0.75)';
	var liList = x.getElementsByTagName('li');
	for (i=1;i<liList.length;i++) {
		liList[i].style.transition = "opacity 1s linear 0s"
		liList[i].style.opacity = '0%';
		liList[i].style.display = 'none'
	}
}

function scrTo(x,y) {
	window.scrollTo(x,y);
}

function searchInpFoc(isIn) {
	document.getElementById('searchInput').style.transition = "box-shadow 0.1s linear 0s";
	if (isIn) {
		document.getElementById('searchInput').style.boxShadow = '0 0 3px gray';
	} else {
		document.getElementById('searchInput').style.boxShadow = 'none';
	}
}