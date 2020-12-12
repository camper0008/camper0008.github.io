// # define private variables
var current, last
var images;

// # define functions
domContentLoaded = function() {
    images = document.getElementsByClassName("resize-image")
    windowResize()
}

windowResize = function() {
    var current = (window.innerWidth/window.innerHeight < 1) && "rect" || "full"
    if (current != last) {
        for (var i = 0; i < images.length; i++) {
            var bgStr = String(images[i].style.backgroundImage)
            
            images[i].style.backgroundImage = 
            bgStr.slice(0, bgStr.lastIndexOf("-") + 1) + current + bgStr.slice(bgStr.lastIndexOf("."));
            console.log("?")
        }
        last = current;
    }
}

// # add event listeners
document.readyState != "loading" && domContentLoaded() || window.addEventListener("DOMContentLoaded", domContentLoaded)
window.addEventListener("resize", windowResize)