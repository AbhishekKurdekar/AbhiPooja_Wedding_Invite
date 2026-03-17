function enterSite() {
  document.getElementById("opening").style.display = "none";
  document.getElementById("main").style.display = "block";

  document.getElementById("bgMusic").play();

  revealOnScroll();
}

/* SCROLL ANIMATION */
function revealOnScroll() {
  const elements = document.querySelectorAll(".fade-in");

  window.addEventListener("scroll", () => {
    elements.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        el.classList.add("show");
      }
    });
  });
}
