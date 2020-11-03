const navDrop = document.querySelector("#nav-drop");
const navLinks = document.querySelector("#nav-links");
let screenWidth = window.outerWidth;

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

// click function that shows scroll Y position
const entirePage = document.querySelector(".grid-container");
entirePage.addEventListener("click", ()=>{
  console.log(`Y scroll position is: ${window.scrollY}`);
  console.log(`screen width is: ${screenWidth}`);
});

// fade in text in About Me section
if(screenWidth >= 1280){
  $(".text").animate({"opacity": "0"}, 0);
  $(".more-info").animate({"opacity": "0"});
  $(".summary").animate({"opacity": "0"});

  // if scroll Y position greater than x, fade in
  window.addEventListener("scroll", ()=>{
    if(window.scrollY > 206){
      $(".text").animate({"opacity": "1"}, 1200);
      // turn opacity ot 0 first in css, then opacity to 1.0 here .
    }
    if(window.scrollY > 1096){
      $(".more-info").animate({"opacity": "1"}, 1200);
    }
    if(window.scrollY > 1615){
      $(".summary").animate({"opacity": "1"}, 1200);
    }
  });
}

if(screenWidth < 577){
  $(".text").animate({"opacity": "0"}, 0);
  $(".more-info").animate({"opacity": "0"});
  $(".summary").animate({"opacity": "0"});

  window.addEventListener("scroll", ()=>{
    if(window.scrollY > 482){
      $(".text").animate({"opacity": "1"}, 2000);
      // turn opacity ot 0 first in css, then opacity to 1.0 here .
    }
    if(window.scrollY > 1178){
      $(".more-info").animate({"opacity": "1"}, 2000);
    }
    if(window.scrollY > 1830){
      $(".summary").animate({"opacity": "1"}, 2000);
    }
  });

}
