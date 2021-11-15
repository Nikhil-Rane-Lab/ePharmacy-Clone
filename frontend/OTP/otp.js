var time = 30;
var timer = document.getElementById('timer');

function decTimer() {
	if (time > 0) timer.textContent = --time;

	var t1 = document.getElementById('t1').value;
	var t2 = document.getElementById('t2').value;
	var t3 = document.getElementById('t3').value;
	var t4 = document.getElementById('t4').value;
	var t5 = document.getElementById('t5').value;
	var t6 = document.getElementById('t6').value;

	if (t1 != '' && t2 != '' && t3 != '' && t4 != '' && t5 != '' && t6 != '') colorChangeToDark();
	else colorChangeToFaint();

	progress();
}

setInterval(decTimer, 1000);

function colorChangeToDark() {
	let btn = document.getElementById('btn');
	btn.style.backgroundColor = '#426BB6';
}

function colorChangeToFaint() {
	let btn = document.getElementById('btn');
	btn.style.backgroundColor = '#6889C5B2';
}

var pro = document.getElementById('pro');
var fdiv = document.getElementById('o1a');
function back() {
	window.location = '../login/login.html';
}

// var pro = document.getElementById("pro");
// var fdiv = document.getElementById("o1a");

function showAnimation() {
	fdiv.style.visibility = 'visible';
	setInterval(proInc, 1000);
}

var p = 1;

function proInc() {
	p += 50;

	if (p > 400) p = 380;

	pro.style.width = `${p}` + 'px';

	if (p == 380) window.location = '../home/home.html';
}

function timerClock() {
	var currentTime = new Date();
	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();
	var sec = currentTime.getSeconds();
	if (minutes < 10) {
		minutes = '0' + minutes;
	}
	if (sec < 10) {
		sec = '0' + sec;
	}
	var t_str = hours + ':' + minutes + ':' + sec + ' ';
	if (hours > 11) {
		t_str += 'PM';
	} else {
		t_str += 'AM';
	}
	let t_insert = document.querySelector('.left-top');
	t_insert.innerHTML = t_str;

	setTimeout(timer, 1000);
}

setInterval(timerClock, 1000);

alert('Your OTP is 895314');

// setTimeout(alert, 2000);
