var a = document.getElementById("change1");	
var b = document.getElementById("change2");
var c = document.getElementById("change3");
var d = document.getElementById("change4");	
var e = document.getElementById("change5");
var f = document.getElementById("change6");

var audio = document.getElementById("you-win");

function nextImage(el){
	if (el.src.match("image/zombies.jpg")){
		el.src = "image/wow.jpg";
	} else if (el.src.match("image/wow.jpg")){
		el.src = "image/run.jpg";
	} else if (el.src.match("image/run.jpg")){
		el.src = "image/zombies.jpg";
	} else if (el.src.match("image/zombies.jpg")){
		el.src = "image/wow.jpg";
	} else if (el.src.match("image/wow.jpg")){
		el.src = "image/zombies.jpg";
	} else {
		//do nothing
	}
}

function nextImage1(el){
	if (el.src.match("image/wow.jpg")){
		el.src = "image/zombies.jpg";
	} else if (el.src.match("image/zombies.jpg")){
		el.src = "image/run.jpg";
	} else if (el.src.match("image/run.jpg")){
		el.src = "image/zombies.jpg";
	} else if (el.src.match("image/zombies.jpg")){
		el.src = "image/wow.jpg";
	} else {
		//do nothing
	}
}

function nextImage2(el){
	if (el.src.match("image/zombies.jpg")){
		el.src = "image/wow.jpg";
	} else if (el.src.match("image/wow.jpg")){
		el.src = "image/run.jpg";
	} else if (el.src.match("image/run.jpg")){
		el.src = "image/zombies.jpg";
	} else if (el.src.match("image/zombies.jpg")){
		el.src = "image/wow.jpg";
	} else if (el.src.match("image/wow.jpg")){
		el.src = "image/zombies.jpg";
	} else {
		//do nothing
	}
}

function nextImage3(el){
	if (el.src.match("image/wow.jpg")){
		el.src = "image/zombies.jpg";
	} else if (el.src.match("image/zombies.jpg")){
		el.src = "image/run.jpg";
	} else if (el.src.match("image/run.jpg")){
		el.src = "image/zombies.jpg";
	} else if (el.src.match("image/zombies.jpg")){
		el.src = "image/wow.jpg";
	} else {
		//do nothing
	}
}

function nextImage4(el){
	if (el.src.match("image/wow.jpg")){
		el.src = "image/zombies.jpg";
	} else if (el.src.match("image/zombies.jpg")){
		el.src = "image/run.jpg";
	} else if (el.src.match("image/run.jpg")){
		el.src = "image/wow.jpg";
	} else if (el.src.match("image/zombies.jpg")){
		el.src = "image/wow.jpg";
	} else if (el.src.match("image/wow.jpg")){
		el.src = "image/zombies.jpg";
	} else {
		//do nothing
	}
}

function nextImage5(el){
	if (el.src.match("image/wow.jpg")){
		el.src = "image/zombies.jpg";
	} else if (el.src.match("image/zombies.jpg")){
		el.src = "image/run.jpg";
	} else if (el.src.match("image/run.jpg")){
		el.src = "image/wow.png";
	} else if (el.src.match("image/zombies.jpg")){
		el.src = "image/wow.png";
	} else if (el.src.match("image/wow.jpg")){
		el.src = "image/zombies.jpg";
	} else {
		//do nothing
	}
}

function nextImage5(el){
	if (el.src.match("image/wow.jpg")){
		el.src = "image/zombies.jpg";
	} else if (el.src.match("image/zombies.jpg")){
		el.src = "image/run.jpg";
	} else if (el.src.match("image/run.jpg")){
		el.src = "image/wow.jpg";
	} else if (el.src.match("image/zombies.jpg")){
		el.src = "image/wow.jpg";
	} else if (el.src.match("image/wow.jpg")){
		el.src = "image/zombies.jpg";
	} else {
		//do nothing
	}
}

function  checkConfiguration(el){
	if(a.src.match("image/run.jpg") && b.src.match("image/run.jpg") && c.src.match("image/run.jpg") && d.src.match("image/run.jpg") && e.src.match("image/run.jpg") && f.src.match("image/run.jpg")){
		a.classList.add("hide");
		b.classList.add("hide");
		c.classList.add("hide");
		d.classList.add("hide");
		e.classList.add("hide");
		f.classList.add("hide");
		document.getElementById("house").classList.add("display");
		document.getElementById("key").classList.remove("display");
		audio.play();
	} else {
		
	}
	// when the JACKPOT! button is clicked, play the slot machine sound
}