var countDownDate;

window.onload = function () {
	setTime();
};

function setTime() {
	var now = new Date();
	countDownDate = now.setDate(now.getDate() + 3);
	setTimeInterval();
	var x = setInterval(function () {
		// Get today's date and time
		setTimeInterval();
		// Display the result in the element with id="demo"
	}, 1000);
}
function setTimeInterval() {
	var day = document.getElementById("day");
	var hour = document.getElementById("hour");
	var minute = document.getElementById("minute");
	var second = document.getElementById("second");
	var distance = countDownDate - new Date().getTime();
	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	day.innerHTML = days;
	hour.innerHTML = hours;
	minute.innerHTML = minutes;
	second.innerHTML = seconds;
}
