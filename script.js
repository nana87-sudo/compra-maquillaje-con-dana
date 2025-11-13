// 🌸 Cuando se carga la página, mostrar una bienvenida suave
window.addEventListener("load", () => {
  alert("💋 ¡Bienvenida a GlamShop! Tu tienda de belleza favorita 💄");
});

// 💕 Botón principal (Explorar productos)
document.getElementById("explorarBtn").addEventListener("click", () => {
  document.getElementById("productos").scrollIntoView({
    behavior: "smooth"
  });
});

// 💄 Botones de “Agregar al carrito” (sin pago real)
const botones = document.querySelectorAll(".card button");
botones.forEach(boton => {
  boton.addEventListener("click", () => {
    const nombre = boton.parentElement.querySelector("h3").textContent;
    alert(`🛍️ Has agregado "${nombre}" a tu carrito (sin pago real).`);
  });
});

// 💋 Animación suave al hacer scroll
window.addEventListener("scroll", () => {
  const elementos = document.querySelectorAll(".card, .video-card");
  elementos.forEach(el => {
    const pos = el.getBoundingClientRect().top;
    if (pos < window.innerHeight - 50) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    } else {
      el.style.opacity = 0;
      el.style.transform = "translateY(20px)";
    }
  });
});

// 🌟 Efecto inicial de aparición
document.querySelectorAll(".card, .video-card").forEach(el => {
  el.style.transition = "all 0.8s ease";
  el.style.opacity = 0;
  el.style.transform = "translateY(20px)";
});


