// --- MENU BURGER ---
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
  menuToggle.classList.toggle("open");
});

// Fermer le menu quand on clique sur un lien
document.querySelectorAll("#navbar a").forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    menuToggle.classList.remove("open");
  });
});

// --- LIEN ACTIF SELON LA SECTION ---
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// --- ANIMATION AU DÉFILEMENT ---
const elements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  elements.forEach(el => {
    const revealTop = el.getBoundingClientRect().top;
    if (revealTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // Lancer au chargement

// --- ANNÉE AUTOMATIQUE ---
document.getElementById("year").textContent = new Date().getFullYear();

// --- EFFET D'ÉCRITURE ---
const typeTarget = document.querySelector(".titre span");
const text = ("Ruben Mwanza");
let i = 0;

function typeWriter() {
  if (i < text.length) {
    typeTarget.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 120);
  }
}
typeTarget.textContent = "";
typeWriter();

// 1. Obtenir les éléments
let mybutton = document.getElementById("scrollToTopButton");
let aproposSection = document.getElementById("apropos");

// 2. Écouter l'événement de défilement de la fenêtre
window.onscroll = function() {
    checkAboutEnd();
};

function checkAboutEnd() {
    // Si la section "À propos" n'existe pas, on arrête pour éviter les erreurs.
    if (!aproposSection) {
        mybutton.style.display = "none";
        return;
    }

    // Récupère la position et les dimensions de la section "À propos"
    const rect = aproposSection.getBoundingClientRect();

    // Calcul : Vérifie si le bas de l'élément est dans la fenêtre visible (viewport).
    // rect.bottom : distance entre le bas de l'élément et le haut de la fenêtre.
    // window.innerHeight : hauteur visible de la fenêtre.

    // Si le bas de la section (rect.bottom) est inférieur ou égal à la hauteur
    // de la fenêtre (ce qui signifie que la fin de l'élément est apparue ou dépassée)
    if (rect.bottom <= window.innerHeight) {
        mybutton.style.display = "block"; // Affiche le bouton
    } else {
        mybutton.style.display = "none";  // Cache le bouton
    }
}

// La fonction de retour en haut reste la même (pour le défilement fluide)
function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
