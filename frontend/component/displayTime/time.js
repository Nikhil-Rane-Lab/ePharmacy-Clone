function timer() {
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

	setTimeout(timer,1000 );
}

export default timer;
