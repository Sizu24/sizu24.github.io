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


let screenWidth = window.outerWidth;

if(screenWidth > 1024){
  console.log(`screen width is: ${screenWidth}`);
  aboutSection.style.scrollBehavior = "smooth";
  window.addEventListener("scroll", ()=>{
    console.log("scroll");
    if(window.scrollY < 655){
      aboutSection.style.backgroundAttachment = "scroll";
      aboutSection.style.backgroundPosition = "top right";
    

    }else if(window.scrollY > 2539){
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

// click function that shows scroll Y position
entirePage.addEventListener("click", ()=>{
  console.log(`Y scroll position is: ${window.scrollY}`);

  
});

