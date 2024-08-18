//created navBar tabs data to populate the NavBar 
let navBarTabs = [
    { text: "home", class:"", class:"home"},
    { text: "about", class:"", class:"about" },
    { text: "exhibits", class:"", class:"exhibits"},
    { text: "contact", class:"", class:"contact"},
]

// created cardsInfo to have data to populate information cards
let cardsInfo = [
    { title: "title", subTitle: "subtitle", date: 1900, textBody: "here is where all the text will go", src: "/imgs/bridge\ lift.jpg"},
    { title: "title", subTitle: "subtitle", date: 1900, textBody: "here is where all the text will go", src: "/imgs/bridge\ lift.jpg"},
    { title: "title", subTitle: "subtitle", date: 1900, textBody: "here is where all the text will go", src: "/imgs/bridge\ lift.jpg"},
    { title: "title", subTitle: "subtitle", date: 1900, textBody: "here is where all the text will go", src: "/imgs/bridge\ lift.jpg"},
    { title: "title", subTitle: "subtitle", date: 1900, textBody: "here is where all the text will go", src: "/imgs/bridge\ lift.jpg"},
]

//selected title for page to ensure js was being read by index.html
//sert it's backgronud to light blue 
let title = document.querySelector("h1")
title.style.backgroundColor = "lightblue";
title.classList.add("flex-ctr");

//created a nav element, created a query for the header, 
// and appended the navBar to the header element 
let navBar = document.createElement("nav")
let headerEl = document.getElementById("header")
headerEl.appendChild(navBar);
navBar.classList.add("flex-around")

//used forEach to make an <a> element for each tab
navBarTabs.forEach((link) => {
    const navTabs = document.createElement("a");
    navTabs.textContent = link.text;
    navTabs.classList = link.class
    navBar.appendChild(navTabs)
})

let navTabs = document.querySelectorAll("a")

navBar.addEventListener("click", (event) => {
    console.log(event.target)
    let eventClass = event.target.classList
    let realEventArray = Array.from(eventClass)
    console.log(realEventArray)
    console.log(typeof realEventArray)
    console.log(typeof eventClass)
    console.log(eventClass)
    event.preventDefault();
    if (event.target !== "a"){
        navTabs.forEach((link) => {
          let isCurrentEvent = link == event.target;
          if (link !== event.target) {
            link.classList.remove("active");
          }
          if (isCurrentEvent) {
            if (link.classList == "active") {
              link.classList.remove("active"); 
            } else {
              link.classList.add("active");
              itemDisplay(realEventArray);
            } 
          }
        });
    }
});

function itemDisplay(realEventArray) {
    let homeDiv = document.getElementById("home");
    let homeDivId = homeDiv.id;
    let aboutDiv = document.getElementById("about");
    let aboutDivId = aboutDiv.id;
    let exhibitDiv = document.getElementById("exhibits");
    let exhibitDivId = exhibitDiv.id;
    let contactDiv = document.getElementById("contact");
    let contactDivId = contactDiv.id;
    console.log(homeDiv);
    console.log(aboutDiv);
    console.log(exhibitDiv);
    console.log(contactDiv);

    if (realEventArray.includes(homeDivId) && homeDiv.style.display == "none") {
        homeDiv.classList.remove("display")
    } 
    if (realEventArray.includes(aboutDivId) == true && aboutDiv.style.display == "none") {
        aboutDiv.style.bottom = "block";
    } 
    if (realEventArray.includes(exhibitDivId) == true && exhibitDiv.style.display == "none") {
        exhibitDiv.style.display = "block";
    }
    if (realEventArray.includes(contactDivId) == true && contactDiv.style.display == "none") {
        contactDiv.style.display = "block";
    }
    else {
      homeDiv.style.display.add("display")
      aboutDiv.style.bottom = "0%";
      exhibitDiv.style.display = "none";
      contactDiv.style.display = "none";
    }

  }


// creation of information cards
const cardContainer = document.getElementById("card-container")
cardContainer.classList.add("flex-around")
cardContainer.style.padding = "10px";
const fragment = new DocumentFragment();

cardsInfo.forEach((card) => {
    let infoCard = document.createElement("div");
    infoCard.classList.add("card");

    let title = document.createElement("h2");
    title.textContent = card.title;

    let cardImage = new Image( 200, 100)
    cardImage.setAttribute("src", card.src);

    let subTitle = document.createElement("h3");
    subTitle.textContent = card.subTitle;

    let date = document.createElement("p");
    date.textContent = card.date;

    let textBody = document.createElement("p");
    textBody.textContent = card.textBody;

    infoCard.appendChild(title);
    infoCard.appendChild(cardImage);
    infoCard.appendChild(subTitle);
    infoCard.appendChild(date);
    infoCard.appendChild(textBody);
    infoCard.style.padding = "10px";
  
    
    fragment.append(infoCard);
})
cardContainer.append(fragment);

// contact form 

// let submitButton = document.getElementById("submit")

// submitButton.addEventListener("click", (submission) => {
//     submission.preventDefault();
//     console.log(submission)
//     let thanksMessage = document.getElementById("form-container");
//     thanksMessage.innerHTML = "<p> Thank you for messaging us - a member of our team will respond to you shortly!</p>";

//     let nameVal = submission.firstName
//     console.log(nameVal)
// })

let contactForm = document.getElementById("contact-form");

contactForm.onsubmit = function() {submitFunction()};

function submitFunction() {
    submission.preventDefault();
    console.log(submission)
    let thanksMessage = document.getElementById("form-container");
    thanksMessage.innerHTML = "<p> Thank you for messaging us - a member of our team will respond to you shortly!</p>";
    // alert("submitted")
}



// submitButton.addEventListener("submit", validateName);

// 1 registration form
// function validateName() {
//   let nameVal = submitName.value;
//   console.log(nameVal);

//   if (nameVal.length === 0) {
//     alert("you must enter a name!");
//   } 
// }