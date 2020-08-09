let unitsContainer = document.getElementById("units");

let units = [
  // UNIT 1
  {
    url: "https://prycedom.github.io/portfolio_update_v1/",
    img: "img/UNIT 1 img.png",
    alt: "Resume image",
    title: "My Personal Profile Page",
    description: "A simple site demonstrating HTML and CSS."
  },
  // UNIT 2
  {
    url: "https://prycedom.github.io/responsive_layout_v3/",
    img: "img/UNIT 2 img.png",
    alt: "Mobile Phone",
    title: "My Personal Profile Page",
    description: "A simple site demonstrating HTML and CSS."
  },
  // UNIT 3
  {
    url: "https://prycedom.github.io/portfolio_update_v1/",
    img: "img/UNIT 1 img.png",
    alt: "Resume image",
    title: "Mobile-first Responsive Layout",
    description: "Created a website using CSS and mobile-first responsive layout."
  },
  {
    url: "https://prycedom.github.io/portfolio_update_v1/",
    img: "img/UNIT 1 img.png",
    alt: "Resume image",
    title: "My Personal Profile Page",
    description: "A simple site demonstrating HTML and CSS."
  },
  {
    url: "https://prycedom.github.io/portfolio_update_v1/",
    img: "img/UNIT 1 img.png",
    alt: "Resume image",
    title: "My Personal Profile Page",
    description: "A simple site demonstrating HTML and CSS."
  },
  {
    url: "https://prycedom.github.io/portfolio_update_v1/",
    img: "img/UNIT 1 img.png",
    alt: "Resume image",
    title: "My Personal Profile Page",
    description: "A simple site demonstrating HTML and CSS."
  },
  {
    url: "https://prycedom.github.io/portfolio_update_v1/",
    img: "img/UNIT 1 img.png",
    alt: "Resume image",
    title: "My Personal Profile Page",
    description: "A simple site demonstrating HTML and CSS."
  },
  {
    url: "https://prycedom.github.io/portfolio_update_v1/",
    img: "img/UNIT 1 img.png",
    alt: "Resume image",
    title: "My Personal Profile Page",
    description: "A simple site demonstrating HTML and CSS."
  }
];
// Units/Cards
units.forEach(unit => {
  let unitHtml = `<a href="${unit.url}" target="_blank" class="card col-sm-6 col-lg-3 border p-3 mb-2 bg-light text-dark"> 
                  <img src="${unit.img}" class="card-img-top" alt="${unit.alt}">
                  <div class="card-body">
                  <h6>${unit.title}<h6>
                  <p class="card-text">${unit.description}</p>
                  </div>
                  </a>`
  unitsContainer.innerHTML += unitHtml;
});
  
let myPhoto = document.getElementById("myPhoto");

myPhoto.addEventListener("mouseenter", () => {
  animateCSS("#myPhoto", "flip");
});

let welcome = document.getElementById("welcome");

welcome.addEventListener("mouseenter", () => {
  animateCSS("#welcome", "bounce");
});

const animateCSS = (element, animation, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd() {
      node.classList.remove(`${prefix}animated`, animationName);
      node.removeEventListener('animationend', handleAnimationEnd);

      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd);
});