var a = document.getElementById("cb");

a.addEventListener("click", function()
    {
        if(a.checked == true)
        {
            var btn = document.querySelector("#flex3 > button");
            btn.style.backgroundColor = "#426BB6";
            btn.style.color = "white";
        }
        else
        {
            var btn = document.querySelector("#flex3 > button");
            btn.style.backgroundColor = "#C4D1E8";
            btn.style.color = "#426BB6";
        }
    }
);

import timer from '../component/displayTime/time.js';
timer();