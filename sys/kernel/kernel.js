

//Make the DIV element draggagle:
	dragElement(document.getElementById("mydiv"));

	function dragElement(elmnt) {
	  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
	  if (document.getElementById(elmnt.id + "header")) {
	    /* if present, the header is where you move the DIV from:*/
	    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
	  } else {
	    /* otherwise, move the DIV from anywhere inside the DIV:*/
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
	    /* stop moving when mouse button is released:*/
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
/*




function kernel_task(data1) {
	switch (data1) {
		case "power":
			sys.power();
			break;
	}
	return "ok";
}


/* System Class
	Used to store system settings and statuses
*
class System {
	constructor() {
		this.pwrSts = false; // Power off 
		this.version = "5.3.0a";
		this.versionShort = "5.3[dev]";
		this.turnOffFlag = true; // This is used by power function to stop the global 'enter' fucntion from turning the system back on
	}

	power() {
		if (this.pwrSts) {
			// Power off system
			this.turnOffFlag = false;
			this.pwrSts = false;
		} else {
			document.getElementById("powerButton").style.display = "none";
			//setTimeout(function() {document.getElementById("powerButton").setAttribute("onclick",'kernel_task("power")'); sys.turnOffFlag = true;}, 450);
			//Power On System
			this.pwrSts = true;
			this.turnOffFlag = false;
		}
	}
}

var sys = new System();*/