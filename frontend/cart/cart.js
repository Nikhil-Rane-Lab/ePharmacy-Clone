
 
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
    
        itemBoxDiv.setAttribute("id",`${e.cartItem_id}`);
        

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
                  <a  onclick="decreaseQty(this)"   id="${e.product.product_id}" > <img id="minus" src="../icons/cart/minus.svg" alt=""> </a>
                  <p class="quantity" id="itemQuant${e.product.product_id}" >  ${e.quantity}   </p>
                  <a  onclick="increaseQty(this)" id="${e.product.product_id}">  <img id="plus" src="../icons/cart/plus.svg" alt=""> </a>
                  <button onclick="deleteItem(this)" id="${e.cartItem_id}" class="deleteItem">Delete</button>
              </div> `;
              
              cartbody.append(itemBoxDiv);
            
      });
     document.getElementById("productsMRP").innerHTML = `${cart_total} Rs`;
     var finalAmount = cart_total + 80 ;
     document.getElementById("totalAmount").innerHTML = `${finalAmount} Rs`;

  }

  showCartItems();

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

var totalAfterUpdate =0;
async function totalCartAmount(){
    
    let user = JSON.parse(localStorage.getItem("userDetail"));
      
    let res = await fetch(`http://localhost:8080/cartItems/user/${user.userId}`);
    let data = await res.json();
   
    data.forEach((e)=>{
        totalAfterUpdate = totalAfterUpdate + e.total;
    });
    
    console.log(totalAfterUpdate);

    document.getElementById("productsMRP").innerText = `${totalAfterUpdate} Rs`;
    var cartfinalAmount = totalAfterUpdate + 80 ;
    document.getElementById("totalAmount").innerText = `${cartfinalAmount} Rs`;
}

async function deleteItem(cartItemId){

    console.log(cartItemId.id);

    let res = await fetch(`http://localhost:8080/delete/Item/${cartItemId.id}`,{
        method :'DELETE',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'  
        }
    });
     
 
    window.alert("Item has been Deleted");
    
    window.location.reload();

}


var timerId;
function debounce(func,delay,prodId,updatedQty){
  
    
    if(timerId){
        clearTimeout(timerId);
    }

   
    timerId = setTimeout(()=> {
        func(prodId,updatedQty);
    },delay);
  }
 
   
function decreaseQty(productID){

    var temp = "itemQuant" + productID.id;
    
     
     
    console.log(productID.id)

    var currentQty = Number(document.getElementById(temp).innerText);
     
   
    if(currentQty>1){
    document.getElementById(temp).innerText = currentQty - 1; 
    var updatedQty = currentQty-1;
    debounce(updateQty,500,productID,updatedQty);
    }
    
}


function increaseQty(productID){
    var temp = "itemQuant" + productID.id;

    
    var currentQty = Number(document.getElementById(temp).innerText);
      
      document.getElementById(temp).innerText = currentQty + 1;

      var updatedQty = currentQty + 1;

        debounce(updateQty,500,productID,updatedQty);
}

async function updateQty(productID,updatedQty){


    let userId = JSON.parse(localStorage.getItem('userDetail')).userId;
			fetch(`http://localhost:8080/addtocart/users/${userId}/product/${productID.id}`, {
				method: 'POST',
				body: JSON.stringify({
					quantity: updatedQty
				}),
				headers: {
					'Content-Type': 'application/json'
				}
			});

             
            setTimeout(totalCartAmount,3500);
            
}