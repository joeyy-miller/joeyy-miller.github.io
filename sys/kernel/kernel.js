//Make the DIV element draggagle:
/*
	dragElement(document.getElementById("mydiv"));

	function dragElement(elmnt) {
	  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
	  if (document.getElementById(elmnt.id + "header")) {
	    /* if present, the header is where you move the DIV from:*
	    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
	  } else {
	    /* otherwise, move the DIV from anywhere inside the DIV:*
	    elmnt.onmousedown = dragMouseDown;
	  }

	  function dragMouseDown(e) {
	    e = e || window.event;
	    e.preventDefault();
	    // get the mouse cursor position at startup:
	    pos3 = e.clientX;
	    pos4 = e.clientY;
	    document.onmouseup = closeDragElement;
	    // call a function whenever the cursor moves:
	    document.onmousemove = elementDrag;
	  }

	  function elementDrag(e) {
	    e = e || window.event;
	    e.preventDefault();
	    // calculate the new cursor position:
	    pos1 = pos3 - e.clientX;
	    pos2 = pos4 - e.clientY;
	    pos3 = e.clientX;
	    pos4 = e.clientY;
	    // set the element's new position:
	    if ((elmnt.offsetTop - pos2) < 433 && (elmnt.offsetTop - pos2) > 8) {
	  	  elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
		}
		if ((elmnt.offsetLeft - pos1) < 460 && (elmnt.offsetLeft - pos1) > 8)
	    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";

	    console.log("Position 1:" + pos1 + " Position 2: " + pos2 + " Position 3:" + pos3 + " Position 4:" + pos4);
	  }

	  function closeDragElement() {
	    /* stop moving when mouse button is released:*
	    document.onmouseup = null;
	    document.onmousemove = null;
	  }
	}

	dragElement2(document.getElementById("term"));

	function dragElement2(elmnt) {
	  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
	  if (document.getElementById(elmnt.id + "header")) {
	    /* if present, the header is where you move the DIV from:*
	    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
	  } else {
	    /* otherwise, move the DIV from anywhere inside the DIV:*
	    elmnt.onmousedown = dragMouseDown;
	  }

	  function dragMouseDown(e) {
	    e = e || window.event;
	    e.preventDefault();
	    // get the mouse cursor position at startup:
	    pos3 = e.clientX;
	    pos4 = e.clientY;
	    document.onmouseup = closeDragElement2;
	    // call a function whenever the cursor moves:
	    document.onmousemove = elementDrag;
	  }

	  function elementDrag(e) {
	    e = e || window.event;
	    e.preventDefault();
	    // calculate the new cursor position:
	    pos1 = pos3 - e.clientX;
	    pos2 = pos4 - e.clientY;
	    pos3 = e.clientX;
	    pos4 = e.clientY;
	    // set the element's new position:
	    if ((elmnt.offsetTop - pos2) < 433 && (elmnt.offsetTop - pos2) > 8) {
	  	  elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
		}
		if ((elmnt.offsetLeft - pos1) < 460 && (elmnt.offsetLeft - pos1) > 8)
	    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";

	    console.log("Position 1:" + pos1 + " Position 2: " + pos2 + " Position 3:" + pos3 + " Position 4:" + pos4);
	  }

	  function closeDragElement2() {
	    /* stop moving when mouse button is released:*
	    document.onmouseup = null;
	    document.onmousemove = null;
	  }
	}


function getTime() {
	var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    if (m < 10) {m = "0" + m};
    if (s < 10) {s = "0" + s};
    if (h < 1) {h = "12"} // 0 hours or 12 am
    if (h > 12) {h-=12;s += " pm"}else{s+=" am"};
	return h + ":" + m + ":" + s;
}

function time() {
    document.getElementById('time').innerHTML = getTime();
    setTimeout(time, 500);
}

time();

var open = true;
var term = false;
var safee = true;
var hamm = false;
var power = true;
function welcome() {
	if (open == true) {
		document.getElementById("mydiv").style.display = "none";
		open = false;

	} else {
		document.getElementById("mydiv").style.display = "block";
		open = true;
	}

}
function ham() {
	if (hamm == true) {
		document.getElementById("drop-down").style.display = "none";
		hamm = false;

	} else {
		document.getElementById("drop-down").style.display = "block";
		hamm = true;
	}

}
function terminal() {
	if (term == true) {
		document.getElementById("term").classList.add("hidden");
		term = false;

	} else {
		document.getElementById("term").classList.remove("hidden");
		term = true;
	}
}

function safe() {
	if (safee == true) {
	document.getElementById("topBar").style.background = "#00A635";  
	document.getElementById("hamburger").style.background = "#00A635";  
	document.getElementById("ctitle").innerHTML = "Console OS 6 [SAFE MODE]";  
	safee = false;

	} else {
	document.getElementById("topBar").style.background = "#272822";
	document.getElementById("hamburger").style.background = "#272822";
	document.getElementById("ctitle").innerHTML = "Console OS";  
		safee = true;
	}
}
function shutdown () {
	if (power == true) {
		document.getElementById("screen").style.display = "none";
		document.getElementById("pwr-btn").style.display = "block";
		power=false;
	} else {
		document.getElementById("screen").style.display = "block";
		document.getElementById("pwr-btn").style.display = "none";
		power=true;
	}
}
*/

/* Example Object 
let obj = (function(){
    let _prop1 = 'Starman';
    return {
        prop2: 1981,
        get prop1(){
            return 'Movie:' + _prop1;
        },
        set prop1(_val){
            _prop1 = _val;
        }
    }
})();

for(let prop in obj){
    console.log(prop);
}
console.log( obj.prop2 ); //1981
console.log( obj.prop1 ); //Starman
obj.prop1 = 'The Big Lebowski';
console.log( obj.prop1 );
console.log( obj._prop1);

*/

/**************************
  Lightening  Kernel 0.1
**************************/
let kernel = (function() {

	// Private Variables
	let _power = false; // System power status. false = off, true = on.

	return {

		// Public Variables
		version : '0.1x', // kernel version

		// Get functions
		get power() { /* Turns system on or off */
			if(_power == false) { // System off, so turn on.

				_power = true;
				document.getElementById("indicator").style.color = "#9ed62a";
				display.boot;
				
			} else { // System is on, turn off.

				_power = false;
				document.getElementById("indicator").style.color = "#ce2732";
				display.clear;

			}
		},

		get panic() {/* Calls system panic. */
		},

		// Info funcitons
		get powerSts() { // Return the status of the power
			return _power;
		}

		// Set functions
	}
})();
function power() { kernel.power; } // Binds power

/*******************
 iJD Display Driver
*******************/
let display = (function() {

	// Private Variables
	let _background = "", // Path to background.
		_boot_bg = ""

	return {

		version : '0.1', // Display Driver Version

		get boot() { // What to show while booting up.
			setTimeout(function() {document.getElementById("screen").style.background = '#fff';},200);
			setTimeout(function() {document.getElementById("screen").style.backgroundImage = 'url("sys/styles/boot.jpg")';},1000);
			setTimeout(function() {document.getElementById("screen").style.backgroundImage = 'none';},4800);
			setTimeout(function() {document.getElementById("screen").style.background = '#fff';},4800);
			setTimeout(function() {document.getElementById("screen").style.backgroundImage = 'url("sys/styles/wallpaper_blur.jpg")';},5000);
			setTimeout(function() {document.getElementById("screen").innerHTML = '<div id="login-title">Welcome.</div><input class="welcome-input" type="text" placeholder="Enter username."><input class="welcome-input" type="password" placeholder="Enter password."><button onclick="sys.login;" id="login-button">Login <i class="fas fa-sign-in-alt"></i></button>'},5000);
		},

		get clear() { // Clears the screen for shutdown
			document.getElementById("screen").innerHTML = '';
			document.getElementById("screen").style.backgroundImage = 'none';
			document.getElementById("screen").style.background = '#000';

		},

		get desktop() { // Show the desktop
			document.getElementById("screen").innerHTML = '';
			setTimeout(function() {document.getElementById("screen").style.background = '#fff';},500);
			setTimeout(function() {document.getElementById("screen").innerHTML = '<div id="top-bar"><a id="info"><i class="fas fa-info"></i></a><span class="mono"> consoleOS 6</span><a id="time"></a></div>'},1200);
			setTimeout(function() {document.getElementById("screen").style.backgroundImage = 'url("sys/styles/wallpaper.jpg")';time();},1200);
		},

		date() {
			var date=new Date().getDay();
			switch(date)
			{
				case 0:
					date="Sunday";
					break;
				case 1:
					date="Monday";
					break;
				case 2:
					date="Tuesday";
					break;
				case 3:
					date="Wednesday";
					break;
				case 4:
					date="Thursday";
					break;
				case 5:
					date="Friday";
					break;
				case 6:
					date="Saturday";
					break;
				default:
					date= reg_error + "fetching date";
			}
			var currentTime = new Date();
			var month = currentTime.getMonth() + 1;
			var day = currentTime.getDate();
			var year = currentTime.getFullYear();
			consoleWrite("It is "+date+"; "+month + "/" + day + "/" + year+".");
		},

		get getTime() {
			var today = new Date();
		    var h = today.getHours();
		    var m = today.getMinutes();
		    var s = today.getSeconds();
		    if (m < 10) {m = "0" + m};
		    if (s < 10) {s = "0" + s};
		    if (h < 1) {h = "12"} // 0 hours or 12 am
		    if (h > 12) {h-=12;s += " pm"}else{s+=" am"};
			return h + ":" + m + ":" + s;
		}
	}
})(); 

let sys = (function() {
	// Private Variables

	return {
		get login() {
			display.desktop; // Load in desktop.
		}
	}
	
})();

function time() {
    document.getElementById('time').innerHTML = display.getTime;
    if (kernel.powerSts)
    	setTimeout(time, 500);
 	else 
		document.getElementById("time").innerHTML = '';
}


/* Keydown Event
   Listener event that runs whenver a key is pressed to check if an action 
   	needs to be performed.
*/
document.onkeydown = function(evt) {
	evt = evt || window.event;
	
	var isEnter = false;
	if ("key" in evt) { isEnter = (evt.key == "Enter");
	} else { isEnter = (evt.keyCode == 13); }
	if (isEnter) {
		power();
	}
}