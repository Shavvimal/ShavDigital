import gsap from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger";

export const initAnim = (elem1, elem2) => {
    let tl = gsap.timeline({delay: 0.5});
    tl.from(elem1, {duration: 0.6, ease: "power2. out", opacity:0, y:-40});
    tl.from(elem2, {duration: 0.6, ease: "power2. out", opacity:0});
    }