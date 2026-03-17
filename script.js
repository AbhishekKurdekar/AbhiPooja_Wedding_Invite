function enterSite() {
  document.getElementById("opening").style.display = "none";
  document.getElementById("main").style.display = "block";

  document.getElementById("bgMusic").play();

  reveal();
}

function reveal() {
  const els = document.querySelectorAll(".fade-in");

  window.addEventListener("scroll", () => {
    els.forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight - 100) {
        el.classList.add("show");
      }
    });
  });
}
