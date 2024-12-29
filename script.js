// Toggle Menu for Mobile View
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Highlight Active Section Link on Scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  const top = window.scrollY;
  
  sections.forEach(sec => {
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    const id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        document.querySelector(`header nav a[href*="${id}"]`).classList.add("active");
      });
    }
  });

  // Sticky Header on Scroll
  const header = document.querySelector('.header');
  header.classList.toggle("sticky", window.scrollY > 100);

  // Close Menu on Scroll
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// Dark Mode Toggle
let darkModeIcon = document.querySelector("#darkMode-icon");

darkModeIcon.onclick=()=>{
  darkModeIcon.classList.toggle("bx-sun");
  document.body.classList.toggle("dark-mode");
}

const colors = ["#ff0000", "#0000ff", "#ffd700", "#754ef9"]; // Define 4 main colors
let currentColorIndex = 0;

const paintColor = document.getElementById("paint-icon");

paintColor.onclick = () => {
  // Increment the index and loop back to the start if it exceeds the length
  currentColorIndex = (currentColorIndex + 1) % colors.length;

  // Change the CSS variable for the main color
  document.documentElement.style.setProperty("--main-color", colors[currentColorIndex]);
};

// ScrollReveal Animations
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal(".home-content, .heading, .skills h2", { origin: "top" });
ScrollReveal().reveal(".home-img img, .portfolio-box, .contact form", { origin: "bottom" });
ScrollReveal().reveal(".home-content h1, .about-img img, .skill-bar", { origin: "left" });
ScrollReveal().reveal(".home-content h3, .home-content p, .about-content, .title", { origin: "right" });

// Popup Functions
function openPopup() {
  const popupBox = document.getElementById("popupBox");
  if (popupBox) popupBox.style.display = "flex";
}

function closePopup() {
  const popupBox = document.getElementById("popupBox");
  if (popupBox) popupBox.style.display = "none";
}

// Download Function
function downloadFile() {
  const fileUrl = "path/to/your/file.pdf"; // Replace with the actual URL of your file
  const a = document.createElement("a");
  a.href = fileUrl;
  a.download = "yourfile.pdf";
  a.click();
}
