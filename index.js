//created navBar tabs data to populate the NavBer 
let navBarTabs = [
    { text: "home", href: "/index.html" },
    { text: "about", href: "/about.html" },
    { text: "exhibits", href: "/exhibits" },
    { text: "contact", href: "/contact.html" },
]
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
console.log(title)

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

// cards
const cardContainer = document.getElementById("card-container")
console.log(cardContainer)
const fragment = new DocumentFragment();

cardsInfo.forEach((card) => {
    infoCard = document.createElement("div");
    infoCard.classList.add("card")

    title = document.createElement("h2");
    title.textContent = card.title;

    subTitle = document.createElement("h3");
    subTitle.textContent = card.subTitle;

    date = document.createElement("p");
    date.textContent = card.date;

    textBody = document.createElement("p");
    textBody.textContent = card.textBody;

    infoCard.appendChild(title);
    infoCard.appendChild(subTitle);
    infoCard.appendChild(date);
    infoCard.appendChild(textBody);
    
    fragment.append(infoCard)
})
cardContainer.append(fragment)