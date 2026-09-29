const cards = document.querySelectorAll(".skill-card");
const dots = document.querySelectorAll(".dot");
const wrapper = document.querySelector(".skills-wrapper");



function activate(number) {
  cards.forEach((card) => {
    if (card.dataset.card === number) {
      card.classList.add("active");
      card.classList.remove("blur");
    } else {
      card.classList.remove("active");
      card.classList.add("blur");
    }
  });

  dots.forEach((dot) => {
    if (dot.dataset.target === number) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

function reset() {
  cards.forEach((card) => {
    card.classList.remove("active");
    card.classList.remove("blur");
  });

  dots.forEach((dot) => {
    dot.classList.remove("active");
  });
}

// Hover pada Titik

dots.forEach((dot) => {
  dot.addEventListener("mouseenter", () => {
    activate(dot.dataset.target);
  });
});

// Hover pada Card

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    activate(card.dataset.card);
  });
});

