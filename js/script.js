const hamburger = document.getElementById("hamburger");
const navDrop = document.querySelector("#nav-drop");
const navLinks = document.querySelector("#nav-links");
const aboutSection = document.getElementById("about");

hamburger.addEventListener("click", ()=>{
  navDrop.style.display === "block";
  if(navDrop.style.display === "block"){
    navDrop.style.display = "none";
  }else{
    navDrop.style.display = "block";
  }
});


const removeActive = ()=>{
  let buttonList = document.querySelectorAll(".nav-button");
  for(let i = 0; i < buttonList.length; i++){
    buttonList[i].classList.remove("active");
  }
};

// on click if nav button is clicked, make active.
navLinks.addEventListener("click", e =>{
  const element = e.target;
  removeActive();
  if(element.tagName === "A"){
    element.classList.toggle("active");
  }
});


const scrollPostionFixed = (positionYOne, positionYTwo)=>{
  window.addEventListener("scroll", ()=>{
    console.log("scroll");
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
  console.log(`Y scroll position is: ${window.scrollY}`);
  console.log(`screen width is: ${screenWidth}`);
});

