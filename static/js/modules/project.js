import selector from "./selector.js";
import MyProjects from "./myProjects.js";

const project = {
  show(event) {
    const { name, description, url, previewImgSrc } =
      MyProjects[event.currentTarget.id];
    const projectNameCnt = document.createElement("span");
    const projectDescriptionCnt = document.createElement("span");
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
    btn.append(document.createTextNode("check it out"));
    projectLink.append(btn);

    previewImg.src = previewImgSrc;
    previewImg.alt = "project_preview_img";
    projectLink.href = url;
    projectLink.target = "_blank";
    previewImg.className = "work-preview-img";
    previewImgContainer.className = "work-preview-container";
    projectLink.className = "work-info-link";
    projectNameCnt.className = "work-info-name";
    projectDescriptionCnt.className = "work-info-description";

    infoCnt.appendChild(projectNameCnt);
    infoCnt.appendChild(previewImgContainer);
    infoCnt.appendChild(projectDescriptionCnt);
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
    }
  },
};

export default project;
