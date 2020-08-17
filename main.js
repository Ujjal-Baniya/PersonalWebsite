const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navlinks = document.querySelectorAll(".nav-links li");

// burger
burger.addEventListener("click", function(){
    nav.classList.toggle("burger-active");
    navlinks.forEach((link, index) => {
        if(link.style.animation){
            link.style.animation = ''
             }
        else{
        link.style.animation = `navlinkFade 0.5s ease forwards ${index /5 +0.6}s`;
            }
        })
        burger.classList.toggle('toggle')

    })


//parallax effect
window.addEventListener("scroll", function(){
    const parallax = document.querySelector(".Home");
    let scrollpos = window.pageYOffset;
    parallax.style.backgroundPositionY = scrollpos * 0.5 + "px";
})

//navbar
var lastscrollTop = 0
var navbar = document.getElementById("navbar")
window.addEventListener("scroll", function(){
    var scrolltop = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolltop > lastscrollTop){
        navbar.style.top = "-80px";
    }
    else{
        navbar.style.top ="0px";
    }
    lastscrollTop = scrolltop;
})


//Landing effect
window.addEventListener("load", loading)
var x = 0
function loading(){
    str = "Hello I am UjjaL baniya"
    var h = document.querySelector("#lavda")
    var naa = document.querySelector("#naam")
    if(x<str.length){
        if(x == 5){
            lavda.innerHTML += "<br>";
        }
        if(x>10){
            naam.innerHTML += str.charAt(x);
            x++;
        }
        else{
            lavda.innerHTML += str.charAt(x); 
            x++;
        }
        setTimeout(loading, 200);
    }
    
}   


var left = document.getElementById("left");
var right = document.getElementById("right");

function scrll(){
    var body = document.getElementsByClassName("warper");
    body[0].scrollLeft += 90;

}

function scrlll(){
    var body = document.getElementsByClassName("warper");
    body[0].scrollLeft -= 90;
}

right.addEventListener("click", scrll);
left.addEventListener("click", scrlll);


/// cont

var cunt = document.getElementById("cont")
cunt.addEventListener("click", ()=>{
    nav.classList.remove("burger-active");
    navlinks.forEach((link, index) => {
        link.style.animation = "";
        })
    burger.classList.remove('toggle')
})