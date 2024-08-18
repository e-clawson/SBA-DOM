//created navBar tabs data to populate the NavBar 
let navBarTabs = [
    { text: "home", class:"", class:"home"},
    { text: "about", class:"", class:"about" },
    { text: "exhibits", class:"", class:"exhibit"},
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
title.style.opacity = "70%";
title.style.alignContent = "center";
title.style.width = "50%";
title.style.margin = "auto";
title.style.padding = "15px"
title.style.borderRadius = "10px"

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
    // infoCard.style.padding = "10px";
    
    fragment.append(infoCard);
    })

    cardContainer.append(fragment);


let navTabs = document.querySelectorAll("a")

navBar.addEventListener("click", (event) => {
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
              let info = link.classList;
              let otherInfo = Array.from(info);
              console.log(otherInfo);
              itemDisplay(otherInfo);
              
            } 
          }
        });
    }
});

function itemDisplay(otherInfo) {
    let homeDiv = document.getElementById("home");
    // let homeDivId = homeDiv.id;
    let homeDivArray = homeDiv.classList
    let realHomeDivArray = Array.from(homeDivArray)
    let aboutDiv = document.getElementById("about");
    // let aboutDivId = aboutDiv.id;
    let aboutDivArray = aboutDiv.classList
    let realAboutDivArray = Array.from(aboutDivArray)
    let exhibitDiv = document.getElementById("exhibits");
    // let exhibitDivId = exhibitDiv.id;
    let exhibitDivArray = exhibitDiv.classList
    console.log(exhibitDivArray)
    let realExhibitDivArray = Array.from(exhibitDivArray)
    let contactDiv = document.getElementById("contact");
    // let contactDivId = contactDiv.id;
    let contactDivArray = contactDiv.classList
    let realContactDivArray = Array.from(contactDivArray)

    if (otherInfo.includes("home") && otherInfo.includes("active")) {
        homeDiv.classList.remove("default")
        aboutDiv.classList.add("default");
        exhibitDiv.classList.add("default");
        contactDiv.classList.add("default");
    } 
    if (otherInfo.includes("about") == true && realAboutDivArray.includes("default")) {
        homeDiv.classList.add("default");
        aboutDiv.classList.remove("default");
        exhibitDiv.classList.add("default");
        contactDiv.classList.add("default");
    } 
    if (otherInfo.includes("exhibit") == true && realExhibitDivArray.includes("default")) {
        homeDiv.classList.add("default");
        aboutDiv.classList.add("default");
        exhibitDiv.classList.remove("default");
        contactDiv.classList.add("default");
    }
    if (otherInfo.includes("contact") == true && realContactDivArray.includes("default")) {
        homeDiv.classList.add("default");
        aboutDiv.classList.add("default");
        exhibitDiv.classList.add("default");
        contactDiv.classList.remove("default");
    }
  }

// contact form 

let contactForm = document.getElementById("contact-form");
let firstName = contactForm.elements["firstname"];
let lastName = contactForm.elements["lastname"];
let email = contactForm.elements["email"];
let message = contactForm.elements["message"];

contactForm.addEventListener("submit", onSubmit);

function validateName() {
    if (firstName.value == null || firstName.value == ""){
        alert("please enter a first name!")
        firstName.focus();
        return false
    }
    else {
        return true
    }
}

function validateMessage() {
    if (message.value == null || message.value == ""){
        alert("please enter a message!")
        message.focus();
        return false
    }
    else {
        return true
    }
}

// can't get the second validation for the message to work right now it is skipping right to the else 
//statement regardless of if I have inputs for firstname or message

function onSubmit(event) {
    event.preventDefault()
    const validatedName = validateName();
    const validatedMessage = validateMessage();
    let thanksMessage = document.getElementById("form-container");

    if (validatedName === false){
        event.returnValue = false;
        return false;
    } if (validatedMessage === false){
        event.returnValue = false;
        return false;
    } else {
        thanksMessage.innerHTML = "<p> Thank you for messaging us - a member of our team will respond to you shortly!</p>";
        return true;
    }
}
