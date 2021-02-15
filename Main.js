// Selectors
const html = document.querySelector("html");
const toggleID = document.querySelector("#nav-toggle");
const navMenuId = document.querySelector("#nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const loader = document.querySelector(".loader");
//Functions
// below is the logic that makes the nav-menu(hamburger) icon change into the exit icon when toggled i assigned it to a variable so i could use it later
const menuToggle = () => {
  if (navMenuId.classList.contains("show")) {
    toggleID.innerHTML = "&times;";
    toggleID.style = "font-size: 2.8rem; font-weight: 100;";
  } else {
    toggleID.innerHTML = "&#9776;";
    toggleID.style = "font-size: 1.5rem;  ";
  }
};

const showMenu = () => {
  navMenuId.classList.toggle("show");
  menuToggle();
};
const addActive = (e) => {
  let element = e.target;
  navLink.forEach((link) => {
    link.classList.remove("active");
  });
  if (element.classList.contains("nav-link")) {
    //ADD ACTIVE CLASS
    element.classList.add("active");

    //REMOVE MOBILE MENU
    navMenuId.classList.remove("show");

    menuToggle();
  }
};
// Event listeners
navMenuId.addEventListener("click", addActive);
toggleID.addEventListener("click", showMenu);

// Animation effect
window.onload = () => {
  setTimeout(() => {
    loader.classList.add("remove-loader");
    html.classList.add("scroll");
    const sr = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
    // scroll reveal animation
    sr.reveal(".home-title", {});
    sr.reveal(".button", { delay: 200 });
    sr.reveal(".home-img", { delay: 400 });
    sr.reveal(".home-social-icon", { interval: 200 });

    sr.reveal(".about-img", {});
    sr.reveal(".about-subtitle", { delay: 200 });
    sr.reveal(".about-text", { delay: 400 });

    sr.reveal(".skills-subtitle", {});
    sr.reveal(".skills-text", { delay: 200 });
    sr.reveal(".skills-data", { delay: 400 });
    sr.reveal(".skills-img", { delay: 400 });

    sr.reveal(".work-img", { interval: 200 });
    sr.reveal(".contact-input", { interval: 200 });

    sr.reveal(".footer-title", { origin: "left", duration: 2000, delay: 500 });
    sr.reveal("#facebook-icon", {
      origin: "left",
      duration: 2200,
      delay: 1000,
    });
    sr.reveal("#whatsapp-icon", {
      origin: "left",
      duration: 2300,
      delay: 2000,
    });
    sr.reveal("#linkedin-icon", {
      origin: "left",
      duration: 2400,
      distance: "90px",
      delay: 3000,
    });
    sr.reveal("#telegram-icon", {
      origin: "left",
      duration: 2500,
      distance: "100px",
      delay: 4000,
    });
  }, 3000);
};
