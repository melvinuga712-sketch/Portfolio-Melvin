// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      e.preventDefault();

      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// Typing animation
const typingElement = document.querySelector("h2");
const typingText = "Student | Web Developer | Designer";

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
