let clocksSeconds = [];
let clocksMinutes = [];
let clocksHours = [];
let lampPadding = 70;

let areaSpacing = {x: 200, y: 200};


function setup() {
	createCanvas(800, 600);

	clocksSeconds = createArea();
	clocksMinutes = createArea();
	clocksHours = createArea(true);

	frameRate(10);

}

function draw() {
	background(0);

	drawArea(clocksSeconds, width-areaSpacing.x, height-areaSpacing.y);
	drawArea(clocksMinutes, width-(areaSpacing.x * 2), height-areaSpacing.y);
	drawArea(clocksHours, width-(areaSpacing.x * 3), height-areaSpacing.y);

	stroke(255);
	strokeWeight(3);
	line(width-areaSpacing.x-(lampPadding*2), height-areaSpacing.y, width-areaSpacing.x-(lampPadding*2), height-(areaSpacing.y *2));
	line(width-(areaSpacing.x*2)-(lampPadding*2), height-areaSpacing.y, width-(areaSpacing.x * 2) - (lampPadding * 2), height-(areaSpacing.y * 2));

	drawDigits();

	let timeSecond = second();
	let timeMinute = minute();
	let timeHour = hour();

	let bSecond = timeSecond.toString().split("").map(Number).reverse();
	let bMinute = timeMinute.toString().split("").map(Number).reverse();
	let bHour = timeHour.toString().split("").map(Number).reverse();

	updateClock(bSecond, clocksSeconds);
	updateClock(bMinute, clocksMinutes);
	updateClock(bHour, clocksHours);

	digitalClock(timeHour, timeMinute, timeSecond);



}

function createArea(hours) {

	let area = [];

	let y = 0;
	let x = 0;
	let lamps = 4;
	for(let i = 0; i < 2; i++) {
		area.push([])
		for(let j = 0; j < lamps; j++) {
			area[area.length-1].push(new Clock(x, y));
			y -= lampPadding;
		}
		y = 0;
		if(hours)
			lamps = 2;
		else
			lamps = 3;

		x -= lampPadding;
	}
	return area;
}

function drawArea(timeArray, x, y) {
	for(let i = 0; i < timeArray.length; i++) {
		for(let j = 0; j < timeArray[i].length; j++) {
		timeArray[i][j].show(x, y);
		}
	}
}

function drawDigits() {

	push();
	translate(width-(areaSpacing.x / 1.5), height-areaSpacing.y);

	let x = 0;
	let y = 0;

	fill(255);
	textSize(48);
	noStroke();
	textAlign(CENTER, CENTER);

	for(let i = 1; i <= 8; i *= 2) {
		text(i, x, y)

		y -= lampPadding;
	}

	pop();

}

function digitalClock(h, m, s) {
	push();
	fill(255);
	noStroke();
	textSize(96);
	textAlign(RIGHT, CENTER);
	let seperator = ":";

	let formattedSeconds = ("0" + s).slice(-2);
	let formattedMinutes = ("0" + m).slice(-2);
	let formattedHours = ("0" + h).slice(-2);

	text(formattedSeconds, width-areaSpacing.x+20, height-areaSpacing.y+100);
	text(seperator, width-areaSpacing.x-(lampPadding*2)+15, height-(areaSpacing.y/2)-10);
	text(formattedMinutes, width-(areaSpacing.x * 2)+20, height-areaSpacing.y+100);
	text(seperator, (width-areaSpacing.x*2)-(lampPadding*2)+15, height-(areaSpacing.y/2)-10);
	text(formattedHours, width-(areaSpacing.x * 3)+20, height-areaSpacing.y+100);

	document.title = formattedHours + ":" + formattedMinutes + ":" + formattedSeconds;

	pop();
}

function updateClock(time, lampArray) {

	if(time.length < 2)
		time.push(0);


	for(let i = 0; i < time.length; i++) {

		for(let j = 0; j < lampArray[i].length; j++) {
			let bit = (time[i] >> j) & 1;

			if(bit)
				lampArray[i][j].color = (255, 0, 0);
			else
				lampArray[i][j].color = 255;

		}
	}

}
