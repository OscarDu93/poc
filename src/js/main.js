// Les imports
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Puis les déclarations de plugins (registerPlugin)
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
  //code JS ici

  //parallax intro
  gsap.to("#object-left-1", {
    opacity: 0,
    y: "-20%",
    scrollTrigger: {
      trigger: "#object-left-1",
      start: "top top",
      scrub: 1,
    },
  });

  gsap.to("#object-right-2", {
    opacity: 0,
    y: "-50%",
    scrollTrigger: {
      trigger: "#object-right-2",
      start: "bottom bottom",
      scrub: 1,
    },
  });

  //horizontal scroll
  gsap.to(".slider-track", {
    scrollTrigger: {
      trigger: ".slider-mask",
      start: "top top",
      end: "+=300%",
      pin: true,
      scrub: true,
      markers: true,
    },
    x: "-75%",
    ease: "sine.inOut",
  });

  // zoom
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".zoom-container",
        start: "top top",
        scrub: 2,
        pin: true,
      },
    })
    .to("#zoom-element", {
      width: 500,
      height: 500,
    });

  // dessin
  // https://scrollmagic.io/examples/advanced/svg_drawing.html
  function pathPrepare(el) {
    const lineLength = el.getTotalLength();
    el.style.strokeDasharray = lineLength;
    el.style.strokeDashoffset = lineLength;
  }

  const svgPath = document.querySelector("#template");

  // SVG
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

  // parallax
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
});
