// Typing animation
const typingText = "Student | Web Developer | Designer";
const typingElement = document.querySelector(".hero-text h2");

let typingIndex = 0;
let isDeleting = false;

function typeEffect() {
  if (!typingElement) return;

  if (!isDeleting) {
    typingElement.textContent = typingText.substring(0, typingIndex + 1);
    typingIndex++;

    if (typingIndex === typingText.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1500);
      return;
    }

    setTimeout(typeEffect, 80);
  } else {
    typingElement.textContent = typingText.substring(0, typingIndex - 1);
    typingIndex--;

    if (typingIndex === 0) {
      isDeleting = false;
      setTimeout(typeEffect, 500);
      return;
    }

    setTimeout(typeEffect, 40);
  }
}

typeEffect();
