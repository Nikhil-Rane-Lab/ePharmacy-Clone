
var inputId = document.getElementById('phoneNumber');

var inputBorder = document.getElementById('mobileInput');


inputId.addEventListener('input',validateMobile);
//inputId.addEventListener('change',validateMobile1);


 


function validateMobile(){
   
    var phoneno = /^[0-9]+$/;
   
    if(inputId.value == ""){
    inputBorder.style.border = "1px solid gray";   
    document.getElementById("phoneError").style.display = 'none';
    }

    
    if(!inputId.value == "" )
    inputBorder.style.border = "1px solid blue"; 

    
    if(inputId.value.toString().length <=10 && inputId.value != "" ){
        if(inputId.value.match(phoneno)){
        inputBorder.style.border = "1px solid blue";
        document.getElementById("phoneError").style.display = 'none';

          
            document.getElementById("loginContinue").disabled = true;
            document.getElementById("loginContinue").style.background = "#9ba2af";
          

          if(inputId.value.toString().length==10){
            document.getElementById("loginContinue").disabled = false;
            document.getElementById("loginContinue").style.background = " #426BB6";
          }

        }
        else{
         inputBorder.style.border = "1px solid red";
         document.getElementById("phoneError").style.display = 'block';
         document.getElementById("phoneError").style.color = 'red';
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

}