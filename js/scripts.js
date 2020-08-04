import MobileMenu from "./modules/MobileMenu";
import HeroSlider from "./modules/HeroSlider";
import "../css/style.css";


var mobileMenu = new MobileMenu();
var heroSlider = new HeroSlider();

// Allow new JS and CSS to load in browser without a traditional page refresh
if (module.hot) {
  module.hot.accept();
}
