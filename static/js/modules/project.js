import selector from "./selector.js";
import MyProjects from "./myProjects.js";

const project = {
  show(event) {
    const { name, description, url, previewImgSrc } =
      MyProjects[event.currentTarget.id];
    const projectNameCnt = document.createElement("h1");
    const projectDescriptionCnt = document.createElement("p");
    const projectLink = document.createElement("a");
    const btn = document.createElement("button");
    const previewImgContainer = document.createElement("div");
    const previewImg = new Image();

    const infoScreen = selector(".work-info-screen", "querySelector");
    const infoCnt = selector(".work-info-container", "querySelector");

    infoScreen.style.display = "flex";

    previewImgContainer.append(previewImg);
    projectNameCnt.append(document.createTextNode(name));
    projectDescriptionCnt.append(document.createTextNode(description));
    btn.append(document.createTextNode("Learn more"));
    projectLink.append(btn);

    previewImg.src = previewImgSrc;
    previewImg.alt = "project_preview_img";
    projectLink.href = url;
    projectLink.target = "_blank";
    previewImg.className = "work-preview-img";
    previewImgContainer.className = "work-preview-container";
    projectLink.className = "work-info-link";
    btn.className = "check-work-btn button";
    projectNameCnt.className = "work-info-name";
    projectDescriptionCnt.className = "work-info-description";
    previewImgContainer.style.boxShadow = " 0 30px 50px rgba(0, 0, 0, 0.15)";
    selector("html", "querySelector").classList.remove("scroll");

    infoCnt.appendChild(projectNameCnt);
    infoCnt.appendChild(projectDescriptionCnt);
    infoCnt.appendChild(previewImgContainer);
    infoCnt.appendChild(projectLink);
  },
  hide(event) {
    const isInfoContainer = Array.from(
      selector(".work-info-container", "querySelectorAll")
    ).some(
      (projectImg) =>
        projectImg.isEqualNode(event.target) ||
        projectImg.contains(event.target)
    );

    if (!isInfoContainer) {
      selector(".work-info-screen", "querySelector").style.display = "none";
      selector(".work-info-container", "querySelector").innerHTML = "";
      selector("html", "querySelector").classList.add("scroll");
    }
  },
};

export default project;
