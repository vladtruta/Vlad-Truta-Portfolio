$(document).ready(function(){
	var d = new Date();
	var currentTime = d.getHours(); //function that gets time from the computer
	console.log(currentTime);
	var imagePath = "images/sidenav_background";
	var timeOfDay = "_day"; 
	if (currentTime >= 8 && currentTime <= 10) {
		timeOfDay = "_dawn";
	} else if (currentTime >= 19 && currentTime <= 21) {
		timeOfDay = "_dusk";
	} else if ((currentTime >= 22 && currentTime <= 23) || (currentTime >= 0 && currentTime <= 7)) {
		timeOfDay = "_night";
	} else {
		timeOfDay = "_day";
	}

	document.getElementById('sidenav_image').src = imagePath + timeOfDay + ".png";
});