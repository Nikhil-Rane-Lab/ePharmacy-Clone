var times=1;
console.log("uhfs");
function getting_anime(){
    
    var dis=document.getElementById("slide");
   
  
    var cc1=document.getElementById("radio1");
    var cc2=document.getElementById("radio2");
    var cc3=document.getElementById("radio3");
    var mt=document.getElementById("tab1_2");
    var nxt_btn=document.getElementById("next-btn");
    var nv_btn=document.getElementById("navigator-manual");
    var lt=document.getElementById("last_part");
    var btn_lt=document.getElementById("get_started-btn");
    cc1.style.backgroundColor="white";
   if(times==1){
    cc2.style.backgroundColor="#426bb6";
    //btn_round.style.color="#426bb6";
    dis.style.margin="0px 0px 0px -65%";
   } 
   else if(times>1){
    cc2.style.backgroundColor="white";
    cc3.style.backgroundColor="#426bb6";
    dis.style.margin="0px 0px 0px -265%";
    
    setTimeout(showbotttomdelay, 500);
    function showbotttomdelay() {
        mt.style.visibility="hidden";
        nv_btn.style.visibility="hidden";
        nxt_btn.style.visibility="hidden";
    btn_lt.style.visibility="visible";
    lt.style.visibility="visible";
  }


   
   } 
   times++;
  // dis.style.margin=`0px 0px 0px amtpx`;
}
