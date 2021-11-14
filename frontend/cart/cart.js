


function applyCoupon(){
   
    let couponCode = document.getElementById("cCode").value;


    if(couponCode== "MEFIRST" && document.querySelector('.coupon > button').value != "MEFIRST" ){
        document.getElementById("greentick").style.display = 'block';
        document.querySelector('.coupon p').style.display  = 'none';
        document.querySelector('.coupon > button').innerHTML = "Applied";
        document.querySelector('.disc1').style.display = 'block';
        document.querySelector('.disc2').style.display = 'block';
        document.getElementById('totalAmount').innerHTML = "397 Rs";
    }
    else{
        document.querySelector('.coupon p').style.display  = 'block';
        document.getElementById("greentick").style.display = 'none';
        document.querySelector('.coupon > button').innerHTML = "Apply";
        document.querySelector('.disc1').style.display = 'none';
        document.querySelector('.disc2').style.display = 'none';
        document.getElementById('totalAmount').innerHTML = "440 Rs";
    }
    if(couponCode==""){
     window.alert("Enter Copon First");
     document.querySelector('.coupon p').style.display  = 'none';
     document.querySelector('.disc1').style.display = 'none';
        document.querySelector('.disc2').style.display = 'none';
    }
}
