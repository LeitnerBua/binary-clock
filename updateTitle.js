
function updateTime() {
	let currentDate = new Date();

	let s = formatTime(currentDate.getSeconds());
	let m = formatTime(currentDate.getMinutes());
	let h = formatTime(currentDate.getHours());

	let clock = h + ":" + m + ":" + s;

	postMessage(clock);

	setTimeout("updateTime()", 200);
}

function formatTime(time) {
	return ("0" + time).slice(-2);
}

updateTime();





