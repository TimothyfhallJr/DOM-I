const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Images


let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
let headerpic = document.getElementById('cta-img');

headerpic.setAttribute('src', siteContent['cta']['img-src']);
let middlepic = document.getElementById('middle-img');

middlepic.setAttribute('src', siteContent['main-content']['middle-img-src']);

// Nav-bar
let navText = document.querySelectorAll( 'a');

navText.forEach(heading => {
  heading.style.color = 'green'
});

let services = document.querySelector('a','first-child');

services.textContent = 'Services';

const product = document.querySelector('a:nth-child(2)');
product.textContent = 'Product';

const vision = document.querySelector('a:nth-child(3)');
vision.textContent = 'Vision';

const features = document.querySelector('a:nth-child(4)');
features.textContent = 'Features';

const about = document.querySelector('a:nth-child(5)');
about.textContent = 'About';

const contact = document.querySelector('a:nth-child(6)');
contact.textContent = 'Contact';

const newNav = document.createElement('a');
const nav = document.querySelector('nav');
newNav.textContent = 'NewsLetter';
console.log(newNav);
nav.appendChild(newNav);

const newNavTwo = document.createElement('a');
newNavTwo.textContent = 'Blog';
nav.prepend(newNavTwo);

const navTextGreen = document.querySelectorAll('header nav a');
navTextGreen.forEach(heading => {
  heading.style.color = 'green'
});



// cta


const ctatext = document.querySelector('h1');
ctatext.textContent = siteContent['cta']['h1'];

const button = document.querySelector('button');
button.textContent = siteContent['cta']['button'];

//  Top-Content

const topContentH = document.querySelectorAll(".top-content h4");

topContentH[0].textContent = siteContent['main-content']['features-h4'];

topContentH[1].textContent = siteContent['main-content']['about-h4'];

const topContentParagraph = document.querySelectorAll(".top-content p");
console.log(topContentParagraph);

topContentParagraph[0].textContent = siteContent['main-content']['features-content'];

topContentParagraph[1].textContent = siteContent['main-content']['about-content'];

let headerText = document.querySelectorAll( 'h4');

headerText.forEach(heading => {
  heading.style.color = 'blue';
  heading.style.fontSize = 'xx-large';
});

// Bottom-Content

const bottomContentH = document.querySelectorAll('.bottom-content h4');

bottomContentH[0].textContent = siteContent['main-content']['services-h4'];

bottomContentH[1].textContent = siteContent['main-content']['product-h4'];

bottomContentH[2].textContent = siteContent['main-content']['vision-h4'];

const bottomContentP = document.querySelectorAll('.bottom-content p');

bottomContentP[0].textContent = siteContent['main-content']['services-content'];

bottomContentP[1].textContent = siteContent['main-content']['product-content'];

bottomContentP[2].textContent = siteContent['main-content']['vision-content'];

let pText = document.querySelectorAll( 'h4');

pText.forEach(heading => {
  heading.style.fontSize = 'large';
});


// Contact

const contactH = document.querySelector('.contact h4');

contactH.textContent = siteContent['contact']['contact-h4'];

const contactP = document.querySelectorAll('.contact p');

contactP[0].textContent = siteContent['contact']['address'];

contactP[1].textContent = siteContent['contact']['phone'];

contactP[2].textContent = siteContent['contact']['email'];

// Footer

const footer = document.querySelector('footer p');

footer.textContent = siteContent['footer']['copyright'];


