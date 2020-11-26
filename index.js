window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.backgroundColor = "white"
    document.getElementById("header").querySelector("button").style.color = "grey"
    document.getElementById("header").querySelector("button").style.borderColor = "grey"
    var aTag =  document.getElementById("header").querySelectorAll("a");
    for(var i=0; i<aTag.length; i++){
        aTag[i].style.color = "grey"
    }   
  } else {
    document.getElementById("header").style.background = "transparent";
    document.getElementById("header").querySelector("button").style.color = "white"
    document.getElementById("header").querySelector("button").style.borderColor = "white"
    var aTag =  document.getElementById("header").querySelectorAll("a");
    for(var i=0; i<aTag.length; i++){
        aTag[i].style.color = "white"
    } 
  }
}