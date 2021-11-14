var inputId = document.getElementById('phoneNumber');

var inputBorder = document.getElementById('mobileInput');

inputId.addEventListener('input', validateMobile);
//inputId.addEventListener('change',validateMobile1);



// document.getElementById('loginContinue').addEventListener('click', () => {
// 	window.location = '../OTP/OTP.html';
// });


function validateMobile() {
	var phoneno = /^[0-9]+$/;

	if (inputId.value == '') {
		inputBorder.style.border = '1px solid gray';
		document.getElementById('phoneError').style.display = 'none';
	}

	if (!inputId.value == '') inputBorder.style.border = '1px solid blue';

	if (inputId.value.toString().length <= 10 && inputId.value != '') {
		if (inputId.value.match(phoneno)) {
			inputBorder.style.border = '1px solid blue';
			document.getElementById('phoneError').style.display = 'none';

			document.getElementById('loginContinue').disabled = true;
			document.getElementById('loginContinue').style.background = '#9ba2af';

			if (inputId.value.toString().length == 10) {
				document.getElementById('loginContinue').disabled = false;
				document.getElementById('loginContinue').style.background = ' #426BB6';
			}
		} else {
			inputBorder.style.border = '1px solid red';
			document.getElementById('phoneError').style.display = 'block';
			document.getElementById('phoneError').style.color = 'red';
		}
	}

	if (inputId.value.toString().length > 10) {
		inputBorder.style.border = '1px solid red';
		document.getElementById('phoneError').style.display = 'block';
		document.getElementById('phoneError').style.color = 'red';
		document.getElementById('loginContinue').disabled = 'true';
		document.getElementById('loginContinue').style.background = '#9ba2af';
	}
}

    if(inputId.value.toString().length >10){
     inputBorder.style.border = "1px solid red";
     document.getElementById("phoneError").style.display = 'block';
     document.getElementById("phoneError").style.color = 'red';
     document.getElementById("loginContinue").disabled = "true";
     document.getElementById("loginContinue").style.background = "#9ba2af";

    }
    if(document.getElementById("loginContinue").click="true"){
      window.location=("../OTP/OTP.html");
    }


let phoneForm = document.querySelector('#phone_input');
phoneForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    let phoneNo = document.querySelector('#phoneNumber').value;
    console.log('phoneNo:', phoneNo);
    let userData = {
        mobileNumber: phoneNo
    };
    let res = await fetch('http://localhost:8080/userservice/users', {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    let data = await res.json();
    console.log('data:', data);

    if (localStorage.getItem('userDetail') === null) {
        localStorage.setItem('userDetail', JSON.stringify({}));
    }
    localStorage.setItem('userDetail', JSON.stringify(data));

});
