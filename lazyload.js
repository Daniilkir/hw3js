const btn = document.querySelector(".btn-load");
const images = document.querySelectorAll(".image-container .blur-up");

btn.addEventListener("click", () => images.forEach(img => img.classList.add("lazyload")));
