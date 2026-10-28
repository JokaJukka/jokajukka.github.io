import TypeIt from "typeit";

// override of the original toha code for handling typing carousel to make the animation look better
// see https://github.com/hugo-themes/toha/blob/main/assets/scripts/pages/home.js for more info

document.addEventListener("DOMContentLoaded", () => {
  const $ul = document.getElementById("typing-carousel-data")?.children;
  if ($ul == null || $ul.length === 0) return;

  const strings = Array.from($ul).map(($el) => $el.textContent);

  new TypeIt("#typed", {
    strings, // let TypeIt handle type/delete/next-string pauses
    speed: 100,
    deleteSpeed: 60,
    lifeLike: false,
    breakLines: false,
    cursorChar: "|",
    waitUntilVisible: true,
    html: false,
    loop: true,
    nextStringDelay: [1000, 400], // [pause after typing, pause after deleting]
    loopDelay: [500, 1000], // [pause after deleting last, hold last string before deleting]
  }).go();
});
