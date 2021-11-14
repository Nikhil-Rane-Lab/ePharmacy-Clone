var time = 30;
var timer = document.getElementById("timer");

function decTimer()
{
    if(time > 0)
        timer.textContent = --time;

    var t1 = document.getElementById("t1").value;
    var t2 = document.getElementById("t2").value;
    var t3 = document.getElementById("t3").value;
    var t4 = document.getElementById("t4").value;
    var t5 = document.getElementById("t5").value;
    var t6 = document.getElementById("t6").value;
    
    if( (t1 != "") && (t2 != "") && (t3 != "") && (t4 != "") && (t5 != "") && (t6 != "") )
        colorChangeToDark();
    else
        colorChangeToFaint();

    progress();
        
}

setInterval(decTimer, 1000);

function colorChangeToDark()
{
    let btn = document.getElementById("btn");
    btn.style.backgroundColor = "#426BB6";
}

function colorChangeToFaint()
{
    let btn = document.getElementById("btn");
    btn.style.backgroundColor = "#6889C5B2";
}

var pro = document.getElementById("pro");

function showAnimation()
{
    setInterval(proInc ,1000);
}

var p = 1;

function proInc()
{
    p += 50;

    if(p > 400)
        p = 380;

    pro.style.width = `${p}`+ "px";

    if(p == 380)
        window.location = "a.com";
}

