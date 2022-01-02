"use strict";
import menu from "./modules/menu.js";
import setFooterYear from "./modules/footerYear.js";
import selector from "./modules/selector.js";
import project from "./modules/project.js";
import pageAnimation from "./modules/pageAnimation.js";

selector("#nav-toggle", "querySelector").addEventListener("click", menu().show);
selector(".work-info-screen", "querySelector").addEventListener(
  "click",
  project.hide
);
selector(".work-img", "querySelectorAll").forEach((projectImg) => {
  projectImg.addEventListener("click", project.show);
});
selector("#nav-menu", "querySelector").addEventListener(
  "click",
  menu().trackActive
);


window.onload = () => {
  setTimeout(() => {
    selector(".loader", "querySelector").classList.add("remove-loader");
    selector("html", "querySelector").classList.add("scroll");
    setFooterYear();
    pageAnimation();
  }, 0);
};
