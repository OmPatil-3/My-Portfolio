document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("nav-active");

    hamburger.classList.toggle("toggle");
  });

  document.querySelectorAll(".nav-links li a").forEach((link) => {
    link.addEventListener("click", () => {
      if (navLinks.classList.contains("nav-active")) {
        navLinks.classList.remove("nav-active");
        hamburger.classList.remove("toggle");
      }
    });
  });

  const sections = document.querySelectorAll(
    ".content-section, .content-section-alt"
  );

  const revealSection = () => {
    const triggerBottom = (window.innerHeight / 5) * 4;

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop < triggerBottom) {
        section.classList.add("visible");
      } else {
      }
    });
  };

  window.addEventListener("scroll", revealSection);
  revealSection();
});
