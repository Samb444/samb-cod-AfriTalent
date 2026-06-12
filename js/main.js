const toggle = document.getElementById("themeToggle");
const body = document.body;


if (toggle) {

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
}


const navbar = document.querySelector(".navbar");

if (navbar) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
}



const topBtn = document.getElementById("backToTop");

if (topBtn) {

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
}



const fadeElements = document.querySelectorAll(".fade-in");

if (fadeElements.length > 0) {

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); 
      }
    });
  });

  fadeElements.forEach(el => observer.observe(el));
}



const counters = document.querySelectorAll(".counter");

if (counters.length > 0) {

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
}



const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

/* js filtrage freelance*/

const filterButtons = document.querySelectorAll(".filter-btn");
const items = document.querySelectorAll(".freelance-item");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {

    const filter = btn.dataset.filter;

    items.forEach(item => {

      if (filter === "all") {
        item.style.display = "block";
      } 
      else {
        if (item.classList.contains(filter)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      }

    });

  });
});

 /* js formulaire*/  

const form = document.getElementById("contactForm");

if (form) {

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    let valid = true;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
    const successMsg = document.getElementById("successMsg");

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMsg.textContent = "";

    
    if (name.value.trim() === "") {
      nameError.textContent = "Le nom est obligatoire";
      valid = false;
    }

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.value.trim() === "") {
      emailError.textContent = "Email obligatoire";
      valid = false;
    } 
    else if (!emailRegex.test(email.value)) {
      emailError.textContent = "Email invalide";
      valid = false;
    }

    if (message.value.trim().length < 20) {
      messageError.textContent = "Le message doit contenir au moins 20 caractères";
      valid = false;
    }

    
    if (valid) {
      successMsg.textContent = "Message envoyé avec succès ✔";
      form.reset();
    }

  });

}