(function () {
  [...document.querySelectorAll(".control")].forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelector(".active-btn").classList.remove("active-btn");
      this.classList.add("active-btn");
      document.querySelector(".active").classList.remove("active");
      document.getElementById(button.dataset.id).classList.add("active");
    });
  });
  document.querySelector(".theme-btn").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });
})();

const lightButton = document.querySelector(".theme-btn");
const downloadButton = document.querySelector(".btn-con");
const nameEl = document.querySelector(".right-header .name");
const nameText = nameEl.textContent;
const nameArray = nameText.split("");
const wrappedText = nameArray.map(
  (letter) => `<span class="name-letter">${letter}</span>`
);
nameEl.innerHTML = wrappedText.join("");

const nameLetters = document.querySelectorAll(".name-letter");
window.addEventListener("load", () => {
  gsap.from(lightButton, {
    duration: 3,
    xPercent: -50,
    rotateX: 360,
    delay: 3,
  });
  gsap.from(lightButton, { duration: 3, xPercent: 50, ease: "bounce.out" });
  gsap.from(nameEl, {
    duration: 5,
    opacity: 0,
    y: -550,
    rotateX: 360,
    x: 150,
    ease: "easeInEaseOut",
  });
  gsap.from(nameLetters, {
    duration: 2,
    opacity: 0,
    stagger: 0.1,
    delay: .5,
  });
  gsap.from(downloadButton, {duration: 5, opacity: 0, x: -200});
});

lightButton.addEventListener("click", () => {
  // (we use "+=360" here to animate every time the button is clicked)
  gsap.to(".fa-adjust", { rotateX: '+=360', duration: 3 });
});

// ======Animate download button=========
const animateDownload = () => {
  gsap.to(".fa-download", { rotateX: 360, duration: 1 });
};
downloadButton.addEventListener("mouseenter", () => {
  animateDownload();
});
downloadButton.addEventListener("mouseleave", () => {
  gsap.set(".fa-download", { clearProps: "all" });
});
// ======Animate download button===========
