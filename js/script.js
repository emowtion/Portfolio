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
    title: "Mobile-first Responsive Layout",
    description: "Created a website using CSS and mobile-first responsive layout."
  },
  // UNIT 3
  {
    url: "https://prycedom.github.io/Unit-3-Online-Registration_Form/",
    img: "img/UNIT 3 img.png",
    alt: "Registration Form",
    title: "Online Registration Form",
    description: "Created a registration form using CSS, HTML tables, html forms, CSS flexbox."
  },
  // UNIT 4
  {
    url: "https://prycedom.github.io/Unit-4/",
    img: "img/UNIT 4 img.png",
    alt: "Style Guide",
    title: "Web Style Guide",
    description: "Created a Style Guide using transitions and transforms, Sass, HTML, and CSS."
  },
  // UNIT 5
  {
    url: "https://prycedom.github.io/Unit-5/",
    img: "img/UNIT 5 img.png",
    alt: "Photo Album",
    title: "Interactive Photo Gallery",
    description: "Created an interactive photo gallery using HTML CSS, and JavaScript."
  },
  // UNIT 6
  {
    url: "https://prycedom.github.io/Unit-6/",
    img: "img/UNIT 6 img.png",
    alt: "Game Show",
    title: "Game Show App",
    description: "Created an interactive photo gallery using HTML CSS, and JavaScript."
  },
  // UNIT 7
  {
    url: "https://prycedom.github.io/Unit-7/",
    img: "img/UNIT 7 img.png",
    alt: "Dashboard",
    title: "WebApp Dashboard",
    description: "Created an interactive dashboard for a web application using SVG graphics and JavaScript creating interactive tables, charts, and graphics."
  },
  // UNIT 8
  {
    url: "https://prycedom.github.io/Unit-8/",
    img: "img/UNIT 8 img.png",
    alt: "Directory",
    title: "Employee Directory",
    description: "Created an interactive photo gallery using HTML CSS, and JavaScript."
  }
];
// Unit-Cards
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
  // Effects
let myPhoto = document.getElementById("myPhoto");

myPhoto.addEventListener("mouseenter", () => {
  animateCSS("#myPhoto", "flip");
});

let welcome = document.getElementById("welcome");

welcome.addEventListener("mouseenter", () => {
  animateCSS("#welcome", "bounce");
});

const animateCSS = (element, animation, prefix = 'animate__') =>
  // Create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, clean the classes and resolve the Promise
    function handleAnimationEnd() {
      node.classList.remove(`${prefix}animated`, animationName);
      node.removeEventListener('animationend', handleAnimationEnd);

      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd);
});