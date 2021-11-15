



  
 showCartItems();

 
  var cart_total = 0;
  async function showCartItems(){
    
       
      let cartbody = document.getElementById("cartItemsList");

      let user = JSON.parse(localStorage.getItem("userDetail"));
      
      let res = await fetch(`http://localhost:8080/cartItems/user/${user.userId}`);
      let data = await res.json();
      console.log(data);
      

      data.forEach((e)=>{

        cart_total = cart_total + e.total;
  
        let itemBoxDiv = document.createElement('div');

        let prescrpt = "";

        if(e.product.prescription_required==false){
            prescrpt = "not";
        }
   
        itemBoxDiv.innerHTML =` 
             <div class="cartItem">
                <img src="${e.product.image_url}" alt="">
                 <div>
                    <p id="medicineName"> ${e.product.product_name} </p>
                    <p id="tabletName">${e.product.brand_name} </p>
                    <p id="Prescription"> * Prescription ${prescrpt} required </p>
                 </div>
                 <div id="price"> ${e.product.price} Rs</div>
              </div>
              <div id="itemOperation" >
                  <a href="#" id="${e.cartItem_id}" > <img id="minus" src="../icons/cart/minus.svg" alt=""> </a>
                  <p class="quantity">1</p>
                  <a href="#" id="${e.cartItem_id}">  <img id="plus" src="../icons/cart/plus.svg" alt=""> </a>
                  <button onclick="deleteItem(this)" id="${e.cartItem_id}" class="deleteItem">Delete</button>
              </div> `;
              
              cartbody.append(itemBoxDiv);
            
      });
     document.getElementById("productsMRP").innerHTML = `${cart_total} Rs`;
     var finalAmount = cart_total + 80 ;
     document.getElementById("totalAmount").innerHTML = `${finalAmount} Rs`;

  }

  var cartTotal = 0;
  async function applyCoupon(){
   
    let couponCode = document.getElementById("cCode").value;


    
    let user = JSON.parse(localStorage.getItem("userDetail"));
      
    let res = await fetch(`http://localhost:8080/cartItems/user/${user.userId}`);
    let data = await res.json();
    



    if(couponCode== "MEFIRST" && document.querySelector('.coupon > button').value != "MEFIRST" ){
        document.getElementById("greentick").style.display = 'block';
        document.querySelector('.coupon p').style.display  = 'none';
        document.querySelector('.coupon > button').innerHTML = "Applied";
        document.querySelector('.disc1').style.display = 'block';
        document.querySelector('.disc2').style.display = 'block';
        document.querySelector('.coupon > button').disabled = true;
        

        data.forEach((e)=>{
           cartTotal = cartTotal + e.total;
       });
      
       var finalamount = cartTotal*0.88 + 80;
       console.log(finalamount);

        document.getElementById('totalAmount').innerHTML = `${finalamount} Rs`;
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

async function deleteItem(cartItemId){

    console.log(cartItemId.id);

    let res = await fetch(`http://localhost:8080/delete/Item/${cartItemId.id}`,{method : 'DELETE'});
    let data = await res.json();
    location.reload();


}