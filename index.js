//created navBar tabs data to populate the NavBer 
let navBarTabs = [
    { text: "home", href: "/index.html" },
    { text: "about", href: "/about.html" },
    { text: "exhibits", href: "/exhibits" },
    { text: "contact", href: "/contact.html" },
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
    navTabs.setAttribute("href", link.href);
    navTabs.textContent = link.text;
    navBar.appendChild(navTabs)
})

// navBar.addEventListener("click", (event) => {
//     console.log(event.target)
//     event.preventDefault();
//     if (event.target !== "a"){
//         console.log("made it to a!")
//         // event.target.classList.toggle("active")
//         navBarTabs.forEach((link) => {
//             console.log(link)
//           let isCurrentEvent = link == event.target;
//           if (!isCurrentEvent) {
//             console.log(link)
//             link.classList.remove("active");
//           }
//           if (isCurrentEvent) {
//             if (link.classList == "active") {
//               console.log("inactivate it");
//               link.classList.remove("active");
//             } else {
//               console.log("activate it");
//               link.classList.add("active");
//             } 
//           }
//         });
//     }
// });

// creation of information cards
const cardContainer = document.getElementById("card-container")
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
    
    fragment.append(infoCard);
})
// cardContainer.append(fragment);

// contact form 

let submitButton = document.getElementById("submit")
console.log(submitButton);
let hello = document.getElementById("form-container")
console.log(hello)

submitButton.addEventListener("click", (submission) => {
    submission.preventDefault();
    console.log(submission)
    let thanksMessage = document.getElementById("form-container");
    console.log(thanksMessage)
    thanksMessage.innerHTML = "<p> Thank you for messaging us - a member of our team will respond to you shortly!</p>";
    document.appendChild(thanksMessage)
})