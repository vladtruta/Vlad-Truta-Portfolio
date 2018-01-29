var avatarList = ["anon", "alien", "batman", "flash", "mareommarecaracter", "rasta", "cocalar", "ninja", 
					"furby", "medic", "specops", "mafeot", "copperfield", "spongebob", "gherla", "ciordales"];
var avatarPath = ["images/avatars_small/"];

var currentPos = 0;
var localStorageAvatarPos = "0";
try {
	localStorageAvatarPos = localStorage['currentPos'] || "0"; 
	currentPos = parseInt(localStorageAvatarPos);
} catch(err) {	
	console.log(err);
	currentPos = Math.round(Math.random() * avatarList.length);
}

document.getElementById("navbar_avatar").src = avatarPath + avatarList[currentPos % avatarList.length] + ".png";

function changeAvatar() {
	currentPos += 1;
    document.getElementById("navbar_avatar").src = avatarPath + avatarList[currentPos % avatarList.length] + ".png";
    try {    
    	localStorage['currentPos'] = currentPos.toString();
    } catch(err) {
    	console.log(err);    	
    }
}