const page = document.querySelector("body");
const hamburger = document.getElementById("hamburger");
const navDrop = document.querySelector("#nav-drop");
const navLinks = document.querySelector("#nav-links");
const aboutSection = document.getElementById("about");
const aboutInfo = document.querySelector(".info");

// Open and close hamburger menu
window.addEventListener("click", e =>{
  if(e.target.id === "hamburger" || e.target.className === "line"){
    navDrop.style.display === "block";
    if(navDrop.style.display === "block"){
      navDrop.style.display = "none";
    }else{
      navDrop.style.display = "block";
    }
  }else{
    if(navDrop.style.display === "block"){
      navDrop.style.display = "none";
    }
  }
});

const removeActive = ()=>{
  let buttonList = document.querySelectorAll(".nav-button");
  for(let i = 0; i < buttonList.length; i++){
    buttonList[i].classList.remove("active");
  }
};

// Click function. If nav button is clicked, make active.
navLinks.addEventListener("click", e =>{
  const element = e.target;
  removeActive();
  if(element.tagName === "A"){
    element.classList.toggle("active");
  }
});

// Function listens for scroll, checks position of scroll Y, changes main pic to fixed or scroll
const scrollPostionFixed = (positionYOne, positionYTwo)=>{
  window.addEventListener("scroll", ()=>{
    // console.log("scroll");
    if(window.scrollY < positionYOne){
      aboutSection.style.backgroundAttachment = "scroll";
      aboutSection.style.backgroundPosition = "top right";

    }else if(window.scrollY > positionYTwo){
      aboutSection.style.backgroundAttachment = "scroll";
      aboutSection.style.backgroundPosition = "bottom right";
    }
    else{
      aboutSection.style.backgroundAttachment = "fixed";
      aboutSection.style.backgroundPosition = "right";
      aboutSection.style.backgroundPositionY = "45px";
    }
  });
}

let screenWidth = window.outerWidth;

if(screenWidth > 2550){
  scrollPostionFixed(1405, 2283);
  console.log("if");
}else if(screenWidth > 1024){
  scrollPostionFixed(655, 2539);
  console.log("else if");
}else{
  console.log("small screen");
}

// click function that shows scroll Y position
const entirePage = document.querySelector(".grid-container");
entirePage.addEventListener("click", ()=>{
  // console.log(`Y scroll position is: ${window.scrollY}`);
  // console.log(`screen width is: ${screenWidth}`);
});

// fade in text in About Me section
if(screenWidth >= 1280){
  $(".me").animate({"opacity": "0"}, 0);
  $(".more-info").animate({"opacity": "0"});

  window.addEventListener("scroll", ()=>{
    if(window.scrollY > 206){
      $(".me").animate({"opacity": '1'}, 2000);
      // turn opacity ot 0 first in css, then opacity to 1.0 here .
      // console.log("yellow");
    }
    if(window.scrollY > 1096){
      $(".more-info").animate({"opacity": "1"}, 2000);
    }
  });
}
