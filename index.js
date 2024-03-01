
function openNavlinks() {
    var x = document.getElementById("navlinks");
    var y = document.getElementById("introduction")
    var z=document.getElementsByClassName("cross-icon")
    if (x.style.display === "flex") {
        x.style.display = "none";
        x.style.visibility = "visible";
        y.style.visibility = "visible";
        z.style.display ="none";
        z.style.display ="visible";

        
        
    } else {
        x.style.display = "flex";
        y.style.visibility = "hidden";
        z.style.visibility = "hidden";
    }
}



