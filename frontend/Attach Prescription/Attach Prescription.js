var a = document.getElementById("flex");
var b = document.getElementById("flex1");
var btn = document.getElementById("bt");

function changeColor1()
{
    document.getElementById("file").style.visibility = "hidden";
    a.style.border = "2px solid #385B9B";
    b.style.border = "1px solid #385B9B";
    btn.style.backgroundColor = "#426BB6";
    btn.style.color = "white";
}

function changeColor2()
{
    document.getElementById("file").style.visibility = "visible";
    b.style.border = "2px solid #385B9B";
    a.style.border = "1px solid #385B9B";
    btn.style.backgroundColor = "#426BB6";
    btn.style.color = "white";
    
}