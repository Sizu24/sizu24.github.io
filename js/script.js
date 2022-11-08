const navDrop = document.querySelector("#nav-drop");
const navLinks = document.querySelector("#nav-links");
let screenWidth = window.outerWidth;

// Open and close hamburger menu
window.addEventListener("click", e => {
  if(e.target.id === "hamburger" || e.target.className === "line") {
    navDrop.style.display === "block";
    if(navDrop.style.display === "block") {
      navDrop.style.display = "none";
    }else {
      navDrop.style.display = "block";
    }
  }else {
    if(navDrop.style.display === "block") {
      navDrop.style.display = "none";
    }
  }
});

const removeActive = () => {
  let buttonList = document.querySelectorAll(".nav-button");
  for(let i = 0; i < buttonList.length; i++) {
    buttonList[i].classList.remove("active");
  }
};

// Click function. If nav button is clicked, make active.
navLinks.addEventListener("click", e => {
  const element = e.target;
  removeActive();
  if(element.tagName === "A") {
    element.classList.toggle("active");
  }
});

// click function that shows scroll Y position
const entirePage = document.querySelector(".grid-container");
entirePage.addEventListener("click", () => {
  console.log(`Y scroll position is: ${window.scrollY}`);
  console.log(`screen width is: ${screenWidth}`);
});

// function to make text 0 opacity to help setup textFadeIn after scroll
const zeroOpacityText = () => {
  $(".text").animate({"opacity": "0"}, 0);
  $(".more-info").animate({"opacity": "0"});
  $(".summary").animate({"opacity": "0"});
}

// function to fade in text 
const textFadeIn = (screenPositionOne, screenPositionTwo, screenPositionThree) => {
  if(window.scrollY > screenPositionOne) {
    $(".text").animate({"opacity": "1"}, 2000);
    // turn opacity ot 0 first in css, then opacity to 1.0 here .
  }
  if(window.scrollY > screenPositionTwo) {
    $(".more-info").animate({"opacity": "1"}, 2000);
  }
  if(window.scrollY > screenPositionThree) {
    $(".summary").animate({"opacity": "1"}, 2000);
  }
}

// larger screen fade in text in About Me section for screen width that's greater or equal to 1280px
if(screenWidth >= 1280) {
  // set opacity to 0
  zeroOpacityText();
  // Run textFadeIn function to see if scroll Y position greater than x, fade in
  window.addEventListener("scroll", () => {
    textFadeIn(206, 1096, 1615);
  });
}

// smaller screen fade in text in About Me section for screen width that's less than 577px
if(screenWidth < 577) {
  zeroOpacityText();
  // Run textFadeIn function to see if scroll Y position greater than x, fade in
  window.addEventListener("scroll", () => {
    textFadeIn(482, 1178, 1830);
  });
}

const subtitle = document.querySelectorAll(".subtitle");
$(".subtitle").animate({"opacity": "1"}, 1000);
// // Pop up modal
// // modal info for each website
// const siteOne = {
//   img: "img/site1.jpg",
//   title: "Mobile Auto Spa",
//   description: "Developed auto detailing company site in HTML, \
//                 CSS, and JavaScript. This project has an appointment \
//                 booking implementation"
// }
// const siteTwo = {
//   img: "img/site2.jpg",
//   title: "Nevada Audio Video",
//   description: "Local business site  built in wordpress, \
//                 with custom CSS that I used to add personal styling.\
//                 This project also has an appointment \
//                 booking implementation, as well as payment setup"
// }

// // Modal HTML code
// const modalPopUp = index =>{
// let {image, title, description} = index;

//   const modalHTML = `
//     <div id="modal-overlay">
//       <p id="modal-close">X</p>
//       <div id="modal-content>
//         <div class="modal-image">
//           <img scr="${image}" alt="image preview of website">
//         </div>
//         <div class="modal-info">
//           <p>${title}</p>
//           <p>${description}
//         </div>
//       </div>
//     </div
//   `;
//   return modalHTML;
// };
//   const modalContainer = document.createElement("DIV");
  
//   // select modal from HTML and hide
//   const websitesCard = document.querySelector("#websites");
//   const websitesSection = document.querySelectorAll(".websites-card");
  



//   websitesCard.addEventListener("click", e =>{
//      // add html to container for modal
//     if(e.target.className === "website-image"){
//       e.target.classList.add("showModal");
//       e.target.parentNode.appendChild(modalContainer);
//       modalContainer.innerHTML = modalPopUp(siteOne);

//       const modalCloseButton = document.querySelector("#modal-close");

//       // Remove modal if X button is clicked
//       modalCloseButton.addEventListener("click", e =>{
//         if(e.target.id === "modal-close"){
//           e.target.parentNode.parentNode.remove();
//           e.target.parentNode.parentNode.classList.remove("showModal");
//           console.log("click");
//         }
//       });    
//     }
//   });

//   // 
//   const findModal = () =>{
//     let num = 0;
//     for(let i = 0; i < websitesSection.length; i++){
//       // if showModal is a class name
//       return num - 1;
//     }
//   }


// function onclick to run modalPopUp function


