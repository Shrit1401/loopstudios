// hamburger

const hamburger = document.querySelector(".home .hamburger"),
      hamburgerMen = document.querySelector(".menue .hamburger"),
      menue = document.querySelector(".menue")

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("cut");
    hamburgerMen.classList.toggle("cut");
    menue.classList.toggle("open");
});

// Alerts on click

function social(){
    alert("Social Links here");
}

function about(){
    alert("about page")
}

function career(){
    alert("career page")
}

function events(){
    alert("events page")
}

function product(){
    alert("product page")
}

function support(){
    alert("support page")
}

function seeAll(){
    alert("See all Page here")
}

function card(){
    alert("cards here");
}