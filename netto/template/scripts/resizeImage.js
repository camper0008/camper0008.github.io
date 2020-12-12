// # define private variables
var current, last
var images;

// # define functions
domContentLoaded = function() {
    images = document.getElementsByClassName("resize-image")
    windowResize()

    document.getElementsByTagName("offers")[0].onclick = function() {window.location = "http://www.netto.dk/tilbudsavis/#"}
}

windowResize = function() {
    var current = (window.innerWidth/window.innerHeight < 1) && "rect" || "full"
    if (current != last) {
        for (var i = 0; i < images.length; i++) {
            var bgStr = String(images[i].style.backgroundImage)            
            images[i].style.backgroundImage = bgStr.slice(0, bgStr.lastIndexOf("-") + 1) + current + bgStr.slice(bgStr.lastIndexOf("."));
        }
        last = current;
    }
}

// # add event listeners
document.readyState == "load" && domContentLoaded() || window.addEventListener("load", domContentLoaded)
window.addEventListener("resize", windowResize)