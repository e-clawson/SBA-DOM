//created navBar tabs data to populate the NavBer 
let navBarTabs = [
    { text: "home", href: "/home" },
    { text: "about", href: "/about" },
    { text: "exhibits", href: "/exhibits" },
    { text: "contact", href: "/contact" },
]

//selected title for page to ensure js was being read by index.html
//sert it's backgronud to light blue 
let mainEl = document.querySelector("main")
mainEl.style.backgroundColor = "lightblue";

//created a nav element, created a query for the header, 
// and appended the navBar to the header element 
let navBar = document.createElement("nav")
let headerEl = document.querySelector("header")
headerEl.appendChild(navBar);


// navBarTabs.forEach
