document.addEventListener("DOMContentLoaded", () => {
  loadComponent("header", "components/header.html");
  loadComponent("footer", "components/footer.html");

  // Efek scroll pada navbar + animasi fade-in
  window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    if (nav) {
      if (window.scrollY > 100) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    }

    const sections = document.querySelectorAll(".fade-in");
    sections.forEach((sec) => {
      const rect = sec.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        sec.classList.add("visible");
      }
    });
  });
});

function loadComponent(id, file) {
  fetch(file)
    .then((res) => res.text())
    .then((html) => {
      document.getElementById(id).innerHTML = html;

      const toggle = document.getElementById("menu-toggle");
      const navMenu = document.getElementById("nav-menu");

      if (toggle && navMenu) {
        toggle.addEventListener("click", () => {
          navMenu.classList.toggle("active");
          toggle.classList.toggle("open"); // animasi hamburger jadi X
        });
      }
    })
    .catch((err) => {
      console.error("Error:", err);
    });
}
