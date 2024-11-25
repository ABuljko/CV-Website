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

/*// Dark Mode Toggle
const lightModeIcon = document.querySelector("#lightMode-icon");

if (lightModeIcon) {
  lightModeIcon.onclick = () => {
    lightModeIcon.classList.toggle("bx-moon");
    document.body.classList.toggle("light-mode");
  };
}*/

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
