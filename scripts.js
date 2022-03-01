// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init () {
    const missionAbort = document.getElementById("missionAbort");
	const takeOff = document.getElementById("takeoff");
	const statusParagraph = document.getElementById("flightStatus");
	const heightParagraph = document.getElementById("spaceShuttleHeight");
	const backgroundForShuttle = document.getElementById("shuttleBackground");
	const land = document.getElementById("landing");
	const rocket = document.getElementById("rocket");
	const up = document.getElementById("up"), down = document.getElementById("down"),
	left = document.getElementById("left"), right = document.getElementById("right");
	let num = 0;

     takeOff.addEventListener('click', event => {
   let result = confirm("Confirm that the shuttle is ready for takeoff.");
        if(result === true){
			statusParagraph.innerHTML = "Shuttle in flight.";
			backgroundForShuttle.style.backgroundColor = "blue";
			num += 10000;
			heightParagraph.innerHTML = num;
		}
});


land.addEventListener('click', event => {
	alert("The shuttle is landing. Landing gear engaged.");
	statusParagraph.innerHTML = "The shuttle has landed.";
	backgroundForShuttle.style.backgroundColor = "green";
	num = 0;
	heightParagraph.innerHTML = num;

});

missionAbort.addEventListener('click', event => {
   let result = confirm("Confirm that you want to abort the mission.");
   if(result === true){
		statusParagraph.innerHTML = "Mission aborted.";
		backgroundForShuttle.style.backgroundColor = "green";
		num = 0;
		heightParagraph.innerHTML = num;
   }
});

let move = 0;

const startingValue = 150;
let newLocation = startingValue;
const moveByThisAmountOfPixels = 10;

left.addEventListener('click', event => {
	 newLocation = newLocation -= moveByThisAmountOfPixels;
	 rocket.style.left = newLocation + "px";
});

right.addEventListener('click', event => {
	const moveByThisAmountOfPixels = 10;
	 newLocation = newLocation += moveByThisAmountOfPixels;
	 rocket.style.left = newLocation + "px";
});

const startingBottomValue = 0;
let newBottomLocation = startingBottomValue;


up.addEventListener('click', event => {
	const moveByThisAmountOfPixels = 10;
	 newBottomLocation = newBottomLocation += moveByThisAmountOfPixels;
	 rocket.style.bottom = newBottomLocation + "px";
	 num += 10000;
	 heightParagraph.innerHTML = num;
});

down.addEventListener('click', event => {
	const moveByThisAmountOfPixels = 10;
	 newBottomLocation = newBottomLocation -= moveByThisAmountOfPixels;
	 rocket.style.bottom = newBottomLocation + "px";
	 num -= 10000;
	 heightParagraph.innerHTML = num;
});

}




window.addEventListener("load", init);