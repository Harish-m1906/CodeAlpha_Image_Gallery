const images = document.querySelectorAll(".img");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");

const closeBtn = document.querySelector(".close");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentIndex = 0;

// OPEN IMAGE
images.forEach((img, index) => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
    currentIndex = index;
  });
});

// CLOSE
closeBtn.onclick = () => {
  modal.style.display = "none";
};

// NEXT
function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  modalImg.src = images[currentIndex].src;
}

// PREV
function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  modalImg.src = images[currentIndex].src;
}

nextBtn.onclick = nextImage;
prevBtn.onclick = prevImage;

// FILTER
function filterImages(category, btn) {
  const buttons = document.querySelectorAll(".filters button");

  buttons.forEach(b => b.classList.remove("active"));
  btn.classList.add("active");

  images.forEach(img => {
    img.style.display =
      category === "all" || img.classList.contains(category)
        ? "block"
        : "none";
  });
}