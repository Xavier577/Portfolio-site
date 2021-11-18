import selector from "./selector.js";
import MyProjects from "./myProjects.js";

const project = {
  show(event) {
    const { name, description, url } = MyProjects[event.currentTarget.id];
    const container = document.createElement("div");
    const projectNameCnt = document.createElement("span");
    const projectDescriptionCnt = document.createElement("span");
    const projectLinkTag = document.createElement("a");
    const btn = document.createElement("button");

    selector(".work-info-screen", "querySelector").style.display = "flex";

    const infoCnt = selector(".work-info-container", "querySelector");

    projectNameCnt.append(document.createTextNode(name));
    projectDescriptionCnt.append(document.createTextNode(description));
    btn.append(document.createTextNode("check it out"));
    projectLinkTag.append(btn);

    projectLinkTag.href = url;
    projectLinkTag.target = "_blank";
    projectLinkTag.className = "work-info-link";
    projectNameCnt.className = "work-info-name";
    projectDescriptionCnt.className = "work-info-description";

    infoCnt.appendChild(projectNameCnt);
    infoCnt.appendChild(projectDescriptionCnt);
    infoCnt.appendChild(projectLinkTag);
  },
  hide(event) {
    const isProjectImg = Array.from(
      selector(".work-info-container", "querySelectorAll")
    ).some((projectImg) => {
      return projectImg.isEqualNode(event.target);
    });

    if (!isProjectImg) {
      selector(".work-info-screen", "querySelector").style.display = "none";
      selector(".work-info-container", "querySelector").innerHTML = "";
    }
  },
};

export default project;
