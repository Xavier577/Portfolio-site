import selector from "./selector.js";
import getCurrentYear from "./year.js";
       
const setFooterYear = () => {
      const footerYearElem = selector("#footer-year","querySelector")
      footerYearElem.innerText = getCurrentYear()
}

export default setFooterYear;