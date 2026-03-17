function enterSite() {
  document.getElementById("opening").style.display = "none";
  document.getElementById("main").style.display = "block";

  document.getElementById("bgMusic").play();

  startSlider();
}

/* IMAGE SLIDER */
let index = 0;

function startSlider() {
  const slides = document.querySelectorAll(".slide");

  setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }, 3000);
}  
