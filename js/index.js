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

navItem[0].textContent = siteContent['nav']['nav-item-1'];
navItem[1].textContent = siteContent['nav']['nav-item-2'];
navItem[2].textContent = siteContent['nav']['nav-item-3'];
navItem[3].textContent = siteContent['nav']['nav-item-4'];
navItem[4].textContent = siteContent['nav']['nav-item-5'];
navItem[5].textContent = siteContent['nav']['nav-item-6'];

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
button.textContent = siteContent['cta']['button'];

// Main Content

const content = document.querySelectorAll('h4');
content[0].textContent = siteContent['main-content']['features-h4'];
content[1].textContent = siteContent['main-content']['about-h4'];
content[2].textContent = siteContent['main-content']['services-h4'];
content[3].textContent = siteContent['main-content']['product-h4'];
content[4].textContent = siteContent['main-content']['vision-h4'];

content[5].textContent = siteContent['contact']['contact-h4'];

// Top

const text = document.querySelectorAll('p');
text[0].textContent = siteContent['main-content']['features-content'];
text[1].textContent = siteContent['main-content']['about-content'];

// Bottom 

text[2].textContent = siteContent['main-content']['services-content'];
text[3].textContent = siteContent['main-content']['product-content'];
text[4].textContent = siteContent['main-content']['vision-content'];

// Contact

text[5].innerHTML = '123 Way 456 Street<br> Somewhere, USA';
text[6].textContent = siteContent['contact']['phone'];
text[7].textContent = siteContent['contact']['email'];

// Footer

text[8].textContent = siteContent['footer']['copyright'];


// Images

const heading = document.getElementById('cta-img');
heading.setAttribute('src', siteContent['cta'] ['img-src']);

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


