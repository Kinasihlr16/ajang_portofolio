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

const certSlider = document.querySelector(".certifications-grid");
const certPrev = document.querySelector(".cert-prev");
const certNext = document.querySelector(".cert-next");
const certProgress = document.querySelector(".certifications-progress-bar");
const certProgressText = document.querySelector(
  ".certifications-progress-text",
);
const certCards = document.querySelectorAll(".certificate-card");

if (certSlider && certPrev && certNext) {
  const totalCertificates = certCards.length;

  function updateCertificateSlider() {
    const maxScroll = certSlider.scrollWidth - certSlider.clientWidth;
    const currentScroll = certSlider.scrollLeft;

    const progress = maxScroll > 0 ? currentScroll / maxScroll : 0;

    const currentIndex = Math.min(
      totalCertificates,
      Math.max(1, Math.round(progress * (totalCertificates - 1)) + 1),
    );

    if (certProgress) {
      certProgress.style.width = `${(currentIndex / totalCertificates) * 100}%`;
    }

    if (certProgressText) {
      certProgressText.textContent = `${String(currentIndex).padStart(2, "0")} / ${String(totalCertificates).padStart(2, "0")}`;
    }

    certPrev.disabled = currentScroll <= 2;
    certNext.disabled = currentScroll >= maxScroll - 2;
  }

  certNext.addEventListener("click", () => {
    certSlider.scrollBy({
      left: certSlider.clientWidth,
      behavior: "smooth",
    });
  });

  certPrev.addEventListener("click", () => {
    certSlider.scrollBy({
      left: -certSlider.clientWidth,
      behavior: "smooth",
    });
  });

  certSlider.addEventListener("scroll", updateCertificateSlider);
  window.addEventListener("resize", updateCertificateSlider);

  updateCertificateSlider();
}