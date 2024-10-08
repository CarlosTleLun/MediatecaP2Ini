// Selecciona el header
const header = document.querySelector("header");

// Función para manejar el scroll
function handleScroll() {
  if (window.scrollY > 0) {
    header.classList.add("scrolled"); // Agrega la clase si se hace scroll
  } else {
    header.classList.remove("scrolled"); // Quita la clase si no hay scroll
  }
}

// Añade un evento de scroll a la ventana
window.addEventListener("scroll", handleScroll);
