
const toggle = document.getElementById("themeToggle");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
}

toggle.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});


const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});



const topBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

/* comit 7 */


const fadeElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

fadeElements.forEach(el => observer.observe(el));


const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {

      const counter = entry.target;
      const target = +counter.dataset.target;

      let count = 0;

      const update = () => {
        const increment = target / 100;

        if (count < target) {
          count += increment;
          counter.innerText = Math.ceil(count);
          setTimeout(update, 20);
        } else {
          counter.innerText = target;
        }
      };

      update();
      counterObserver.unobserve(counter);
    }
  });
});

counters.forEach(counter => counterObserver.observe(counter));


/* footer*/
document.getElementById("year").textContent = new Date().getFullYear();
