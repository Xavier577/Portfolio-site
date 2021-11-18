import selector from "./selector.js";

const toggleID = selector("#nav-toggle", "querySelector");
const navMenuId = selector("#nav-menu", "querySelector");
const navLink = selector(".nav-link", "querySelectorAll");

const menu = () => {
  const toggle = () => {
    if (navMenuId.classList.contains("show")) {
      toggleID.innerHTML = "&times;";
      toggleID.style = "font-size: 2.8rem; font-weight: 100;";
    } else {
      toggleID.innerHTML = "&#9776;";
      toggleID.style = "font-size: 1.5rem;  ";
    }
  };

  const show = () => {
    navMenuId.classList.toggle("show");
    toggle();
  };

  const trackActive = (event) => {
    let element = event.target;
    navLink.forEach((link) => link.classList.remove("active"));
    if (element.classList.contains("nav-link")) {
      element.classList.add("active");

      navMenuId.classList.remove("show");

      toggle();
    }
  };
  return {
    toggle,
    show,
    trackActive,
  };
};

export default menu;
