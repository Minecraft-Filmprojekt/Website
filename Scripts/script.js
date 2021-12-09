window.addEventListener('load',function load() {
	document.getElementById('scrollDiv').style.height = window.innerHeight /*-55*/ + "px";
	document.getElementById('Stream_SpielbaerLP').style.width = window.innerWidth * 0.7 + "px";
	document.getElementById('Stream_SpielbaerLP').style.height = document.getElementById('Stream_SpielbaerLP').style.width.split("p")[0] / 620 * 378 + document.getElementById('SpielbaerLPchat_embed').style.borderWidth + "px";
	document.getElementById('SpielbaerLPchat_embed').style.width = window.innerWidth - document.getElementById('Stream_SpielbaerLP').style.width.split("p")[0] - 120 + "px";
	document.getElementById('SpielbaerLPchat_embed').style.height = document.getElementById('Stream_SpielbaerLP').style.height;
	document.getElementById('scrollIndiFore').style.width = 450 + "px";
//	document.getElementById('scrollIndiBack').style.width = document.getElementById('scrollDiv').clientWidth - 400 + "px";
});

function openLink(adress) {
	window.open(adress,"_self")
}

function getBlue(x) {
	x.style.color = "white";
	
	x.style.transition = "background 0.2s linear 0s";
	x.style.background = '#1c86ee';
/*	if (x.id === "searchTrigger" && document.documentElement.scrollTop > 30) {
		document.getElementById('search').style.height = '80px';
	}*/
}

function getNotBlue(x) {
	x.style.color = "black";
	
	x.style.transition = "background 0.2s linear 0s";
	x.style.background = '';
/*	if (x.id === "searchTrigger" && getElementById('scrollDiv').scrollTop > 30) {
		document.getElementById('search').style.height = '60px';
	}*/
}

function checkScroll() {
	var searchEl = document.getElementById('search');
	var satisImg = document.getElementById('satisImg');
	var toTop = document.getElementById('toTop');
	var dropDownTi = document.getElementsByClassName('dropDownTitle');
	var scrollIndiFore = document.getElementById('scrollIndiFore');
	var scrollIndiBack = document.getElementById('scrollIndiBack');
	searchEl.style.transition = "height 0.2s linear 0s";
	satisImg.style.transition = "height 0.2s linear 0s";
	toTop.style.transition = "opacity 0.3s linear 0s";
//überschreibt sich das? \/ !!!
	
//	scrollIndiFore.style.transition = "margin 0.2s linear 0s";
//	scrollIndiBack.style.transition = "margin 0.2s linear 0s";
	scrollIndiBack.style.transition = "width 0.1s linear 0s";
	
	if (window.overflowY > 30) {
		searchEl.style.height = '60px';
		satisImg.style.height = '60px';
		toTop.style.opacity = '100%';
		toTop.style.visibility = 'visible';
//		scrollIndiFore.style.marginTop = '65px';
//		scrollIndiBack.style.marginTop = '65px';
		for (i=0;i<dropDownTi.length;i++) {
			dropDownTi[i].style.transition = "height 0.2s linear 0s";
			dropDownTi[i].style.height = '60px';
		}
	} else {
		searchEl.style.height = '80px';
		satisImg.style.height = '80px';
		toTop.style.opacity = '0%';
		toTop.style.visibility = 'hidden';
//		scrollIndiFore.style.marginTop = '85px';
//		scrollIndiBack.style.marginTop = '85px';
		for (i=0;i<dropDownTi.length;i++) {
			dropDownTi[i].style.transition = "height 0.2s linear 0s";
			dropDownTi[i].style.height = '80px';
		}
	}
	
//	scrollIndiBack.style.width = window.toTop + "px";

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
			ul.innerText = "Bitte geben Sie einen gueltigen Suchbegriff ein!"
		} else if (ul.innerHTML === "") {
			ul.innerText = "Leider gibt es keine Suchergebnisse zu " + keyword + ".";
		}
		
		if (!(keyword === "") & !(keyword === " ")) {
			var request = new XMLHttpRequest();
	      	request.open("POST", "https://discord.com/api/webhooks/812075663669461023/AtuJ3BaWd6enu_WSbyjtmxLuMREMIBAmxKyr-GnbhCw4NbOc3TVHAtrdQTWbsJheT0MX");
	
	      	request.setRequestHeader('Content-type', 'application/json');
	
	      	var params = {
	      	  username: "Website Webhook",
	     	   avatar_url: "",
	      	  content: "Suchbegriff: '" + keyword + "'\n"
						+ ul.innerText
	      	}
	
	     	 request.send(JSON.stringify(params));
		}
		
		window.scrollTo(0,1710);
	}
}

function scrollUp() {
	//html.style.transition = "scroll-behavior 1s smooth 0s";
	window.scrollTo(0,0);
}

function dropDown(x) {
	x.children[0].style.transition = "background 0.15s linear 0s";
	x.children[0].style.background = '#96D532';
	var liList = x.getElementsByTagName('li');
	for (i=1;i<liList.length;i++) {
		liList[i].style.display = 'block';
	}
}

function dropUp(x) {
	x.children[0].style.transition = "background 0.15s linear 0s";
	x.children[0].style.background = 'none';
	var liList = x.getElementsByTagName('li');
	for (i=1;i<liList.length;i++) {
		liList[i].style.display = 'none';
	}
}

function scrTo(x,y) {
	window.scrollTo(x,y);
}
