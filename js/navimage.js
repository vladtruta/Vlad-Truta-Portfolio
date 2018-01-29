$(document).ready(function(){
	var d = new Date();
	var currentTime = d.getHours(); //function that gets time from the computer
	console.log(currentTime);
	var imagePath = "images/sidenav_background";
	var timeOfDay = "_day"; 
	if ((currentTime >= 0 && currentTime <= 8) || (currentTime >= 20 && currentTime <= 23)) {
		timeOfDay = "_night";
	} else {
		timeOfDay = "_day";
	}

	document.getElementById('sidenav_image').src = "images/sidenav_background" + timeOfDay + ".jpg";
});