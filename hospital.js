let menuBar=document.querySelector("header .menu-icon #menu-bar");
let mynav=document.querySelector("header nav");
let searchForms=document.querySelector(".search-form ");
let styleSwitcher=document.querySelector('.style-switcher');
menuBar.onclick=() =>{
menuBar.classList.toggle("fa-times");
mynav.classList.toggle("active");
searchForms.classList.remove("active");
styleSwitcher.classList.remove("open")
}
document.querySelector("#search-box").onclick = () =>{
searchForms.classList.toggle("active")
menuBar.classList.remove("active")
mynav.classList.remove("active");
styleSwitcher.classList.remove("open")
}

let section=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');
window.onscroll=() =>{
  menuBar.classList.remove('fa-times');
  mynav.classList.remove('active')

}
section.forEach(sec => {
let top=window.scrollY;
let height=sec.offsetHeight;
let offset=sec.offsetTop - 150;
let id=sec.getAttribute('id');

if(top >= offset && top > height){
  navLinks.forEach(links => {
    links.classList.remove('active');
    document.querySelector('header nav a[href*='+id+']').classList.add('active');
  })
}
});
/* toggle style switcher */
const styleSwitcherToggler=document.querySelector('.style-switcher-toggler');
styleSwitcherToggler.addEventListener("click", () => {
    document.querySelector('.style-switcher').classList.toggle("open");
    searchForms.classList.remove("active");
});

window.addEventListener("scroll", () => {
    if( document.querySelector('.style-switcher').classList.contains("open")){
        document.querySelector('.style-switcher').classList.remove("open")
    }
});
/* theme color */
const alternateStyle = document.querySelectorAll('.alternate-style');

function setActiveStyle(color) {
  alternateStyle.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
} 
    /*     loader function    */
function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
      }
      function fadeOut(){
        setInterval(loader, 100);
      }
      window.onload=fadeOut;
      // Back to top button
const btnBackToTop = document.querySelector('.btn--back-to-top');

window.addEventListener('scroll', function() {
  if (window.pageYOffset > 300) {
    btnBackToTop.classList.add('btn--visible');
  } else {
    btnBackToTop.classList.remove('btn--visible');
  }
});

btnBackToTop.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

//sticky navbar
window.addEventListener('scroll', () =>{
  let header=document.querySelector("header")
  header.classList.toggle("sticky",window.scrollY > 0)
});
//scrolling animation effect

// JavaScript code to trigger the animation on scroll
function handleScroll() {
  const sections = document.querySelectorAll('.section');

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight * 0.75) {
      section.classList.add('appear');
    }
  });
}
// Event listener to trigger the animation on scroll
window.addEventListener('scroll', handleScroll);
let shopItemData=[
  {name: "eye care",
    img: "https://i.pinimg.com/474x/16/b5/ad/16b5ad5aa23eebaec2a658fb296ddd90.jpg"
  },
  {
    name: "dental care",
  img: "https://i.pinimg.com/474x/96/39/6c/96396cd3d9d9e144463afa348a804992.jpg"
},
{
  name: "primary care",
  img: "https://i.pinimg.com/474x/54/b1/32/54b132a7a74561604f7183ad745c9559.jpg"
},
{
  name: "orthopedic care",
  img: "https://i.pinimg.com/474x/36/0d/d9/360dd9f0b38774883a8fc5c68a084527.jpg"
},
{
  name: "dermatological care",
  img: "https://i.pinimg.com/474x/f7/d4/80/f7d48010da6bfd59bc2ca87104b5230f.jpg"
},
{
  name: "heart care",
  img: "https://i.pinimg.com/474x/db/81/41/db8141ebbbf877a2e649ce544ee55e78.jpg"
},
];
// Get DOM elements
let services = document.querySelector(".services .main-services");
// Function to generate  HTML elements
let generateSevicesSection = () => {
// Map shop item data to HTML elements and join them
services.innerHTML = shopItemData
  .map((el) => {
    // Generate HTML element for the item
    return `
    <div class="main-inner-services">
    <div class="services-img">
        <img src="${el.img}">
    </div>
    <div class="services-content">
        <h2>${el.name}</h2>
           <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem facilis nesciunt voluptatibus mi</p>
           <a href="#">read more</a>
        </div>
</div>
    `;
  })
  .join("");
};
generateSevicesSection();
let doctorsJson=[
 {
  img: "https://i.pinimg.com/474x/16/96/71/169671343ef815d20808e6c9e43c5c19.jpg"
},
{
  img: "https://i.pinimg.com/474x/2a/c3/87/2ac387f5e5742b3ea31bafd2bed70dc2.jpg"
},
{
  img: "https://i.pinimg.com/474x/1b/0a/41/1b0a41cf2132a34bf05a9b4dee30c1a6.jpg"
},
{
  img: "https://i.pinimg.com/474x/e0/02/de/e002de06c1f526ec45e6019ddcd29c67.jpg"
},
{
  img: "https://i.pinimg.com/474x/ef/d0/94/efd09480361a7ede8ef71bd97eedb2c5.jpg"
},
{
  img: "https://i.pinimg.com/474x/4e/7e/0b/4e7e0bf4cbc76932e94ff1eb26f9174a.jpg"
},
{
  img: "https://i.pinimg.com/474x/e5/3e/87/e53e8760a712ca7f9753944e270cc2df.jpg"
},
{
  img: "https://i.pinimg.com/474x/80/2f/9a/802f9a21a08aed98c26ddc0e040d1208.jpg"
},
{
  img: "https://i.pinimg.com/474x/6c/6e/d7/6c6ed7f4011b7f926b3f1505475aba16.jpg"
},
];
// Get DOM elements
let doctors = document.querySelector(".our-exports .swiper-wrapper");


// Function to generate  HTML elements
let generateOurExportSection = () => {
// Map shop item data to HTML elements and join them
doctors.innerHTML = doctorsJson
  .map((el) => {
    // Generate HTML element for the item
    return `
    <div class="swiper-slide">
    <div class="swiper-image">
  <img src="${el.img}" alt="doctor image">
<div class="image-content">
  <h2>dr. jhon doe</h2>
  <div class="social-media">
       <i class="fab fa-facebook"></i>
       <i class="fab fa-twitter"></i>
       <i class="fab fa-linkedin-in"></i>

  </div>
</div>
</div>  
</div>
    `;
  })
  .join("");
};
generateOurExportSection();


