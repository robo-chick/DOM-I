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

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Navigation

const navItem = document.querySelectorAll('a');

navItem[0].textContent = 'Services';
navItem[1].textContent = 'Product';
navItem[2].textContent = 'Vision';
navItem[3].textContent = 'Features';
navItem[4].textContent = 'About';
navItem[5].textContent = 'Contact';

// Change nav text color

const navColor = document.querySelectorAll('a');
navColor.forEach(navItem => {
  navItem.style.color = 'green';
});

// New nav items

const home = document.createElement('a');
const portfolio = document.createElement('a');
home.textContent = 'Home';
home.href = 'index.html';
home.style.color = 'green';
portfolio.textContent = 'Portfolio';
portfolio.href = '#';
portfolio.style.color = 'green';

const newNav = document.querySelector('nav');
newNav.prepend(home);
newNav.appendChild(portfolio);

// Header Content

const ctaText = document.querySelector('h1');
ctaText.innerHTML = 'DOM<br> Is<br> Awesome!';

const button = document.querySelector('button');
button.textContent = 'Get Started';

// Main Content

const content = document.querySelectorAll('h4');
content[0].textContent = 'Features';
content[1].textContent = 'About';
content[2].textContent = 'Services';
content[3].textContent = 'Product';
content[4].textContent = 'Vision';
content[5].textContent = 'Contact';

// Top

const text = document.querySelectorAll('p');
text[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
text[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

// Bottom 

text[2].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
text[3].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
text[4].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

// Contact

text[5].textContent = '123 Way 456 Street Somewhere, USA';
text[6].textContent = '1 (888) 888-8888';
text[7].textContent = 'sales@greatidea.io';

// Footer

text[8].textContent = 'Copyright Great Idea! 2018'


// Images

const heading = document.getElementById('cta-img');
heading.src = 'img/header-img.png';

const middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

// Updated Styles

// Header
const h1Color = document.querySelectorAll('h1');
h1Color.forEach(text => {
  text.style.color = 'midnightblue';
});

const btnColor = document.querySelector('button');
button.style.color = 'midnightblue';

// h4 color
const h4Color = document.querySelectorAll('h4');
h4Color.forEach(text => {
  text.style.color = 'midnightblue';
});



