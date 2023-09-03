"use strict";
let heroImage = document.getElementById("hero-image");

let shoeCard = document.getElementsByClassName("shoe-card");

for (let i = 0; i < shoeCard.length; i++) {
  shoeCard[i].addEventListener("click", () => {
    heroImage.src = shoeCard[i].src;
  });
}

//Scroll reveal animations
let sr = ScrollReveal({
  origin: "top",
  distance: "40px",
  duration: 2000,
  delay: 200,
  reset: true,
});

sr.reveal(".hero-section", { origin: "left" });
sr.reveal(".hero-image", { origin: "right" });
sr.reveal(".hero-cards", { origin: "bottom" });

sr.reveal(".popular-products");
sr.reveal(".about-description", { origin: "left" });
sr.reveal(".about-image", { origin: "right" });
sr.reveal(".about-cards", { origin: "bottom" });

sr.reveal(".offer-text", { origin: "left" });
sr.reveal(".offer-button", { origin: "right" });

sr.reveal(".sign-up-text", { origin: "left" });
sr.reveal(".sign-up-button", { origin: "right" });
sr.reveal(".sign-up-input", { origin: "right" });

sr.reveal(".footer", { origin: "top", interval: 600 });

sr.reveal(".customer-text");
sr.reveal(".customer-1", { origin: "left" });
sr.reveal(".customer-2", { origin: "right" });
