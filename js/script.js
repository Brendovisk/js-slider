import Slide from "./slide.js";

const slide = new Slide(".slide", ".slide-wrapper");
slide.init();
slide.transition(true);
slide.changeSlide(0);
slide.activePrevSlide();
