const navbar = document.getElementById("navbar");
const navbarLinks = document.querySelectorAll("#navbar a");

window.addEventListener("scroll", (e) => {
  if (window.pageYOffset > 0) {
    navbar.classList.add("add-shadow");
  } else {
    navbar.classList.remove("add-shadow");
  }
});

navbarLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    navbarLinks.forEach((link) => {
      link.classList.remove("active");
    });

    link.classList.add("active");
  });
});
