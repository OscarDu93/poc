// Les imports en premier (import)
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Puis les déclarations de plugins (registerPlugin)
gsap.registerPlugin(ScrollTrigger);

// Puis le test de chargement du document
document.addEventListener("DOMContentLoaded", function () {
  // Enfin, tout le code JS ici
});

gsap.to("#object-left-1", {
  opacity: 0,
  y: "-20%",
  scrollTrigger: {
    trigger: "#object-left-1",
    start: "top top",
    scrub: 1,
  },
});

// Anime l'objet  lorsque son centre arrive en bas du viewport
// Il devient visible et est déplacé horizontalement de -25%
gsap.to("#object-right-2", {
  opacity: 0,
  y: "-50%",
  scrollTrigger: {
    trigger: "#object-right-2",
    start: "bottom bottom",
    scrub: 1,
  },
});

// Crée un effet de scroll horizontal
gsap.to(".slider-container", {
  x: "-66.7%",
  scrollTrigger: {
    trigger: ".slider-mask",
    start: "top top",
    scrub: true,
    pin: true,
  },
});

gsap.to(".screen", {
  opacity: 1,
  scrollTrigger: {
    trigger: ".screen",
    scrub: true,
    start: "left 80%",
  },
});

// Effet parallax
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".parallax-container",
      start: "top top",
      scrub: 2,
      pin: true,
    },
  })
  .to("#element-3", {
    y: -100,
  })
  .to(
    "#element-1",
    {
      y: -300,
    },
    0
  )
  .to(
    "#element-2",
    {
      y: -400,
    },
    0
  );

// Draw the SVG
// Based on https://scrollmagic.io/examples/advanced/svg_drawing.html
function pathPrepare(el) {
  const lineLength = el.getTotalLength();
  el.style.strokeDasharray = lineLength;
  el.style.strokeDashoffset = lineLength;
}

const svgPath = document.querySelector("#template");

// prepare SVG
pathPrepare(svgPath);

gsap.to(svgPath, {
  strokeDashoffset: 0,
  stroke: "red",
  scrollTrigger: {
    trigger: ".draw-svg",
    start: "bottom bottom",
    scrub: 2,
    pin: true,
  },
});
