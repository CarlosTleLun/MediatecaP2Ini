const menuToggle = document.getElementById("menu-toggle");
const menuLinks = document.getElementById("menu-links");
const closeMenu = document.getElementById("close-menu");

// Mostrar/ocultar el menú al hacer clic en el botón
menuToggle.addEventListener("click", () => {
  menuLinks.classList.toggle("show"); // Cambiar entre mostrar y ocultar el menú
});

// Evento para cerrar el menú al hacer clic en "Cerrar Menú"
closeMenu.addEventListener("click", () => {
  menuLinks.classList.remove("show"); // Cerrar el menú
});

// Seleccionar todos los enlaces del menú
const menuItems = document.querySelectorAll("#menu-links a");

// Agregar evento a cada enlace para cerrar el menú al hacer clic
menuItems.forEach(item => {
  item.addEventListener("click", () => {
    menuLinks.classList.remove("show"); // Cerrar el menú
  });
});

window.onload = function() {
  document.getElementById('loading').style.display = 'none';
};


