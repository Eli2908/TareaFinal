// menu

function toggleMenu() {
  const navUl = document.querySelector("nav ul");
  navUl.classList.toggle("show");
}

let slideIndex = 0;
showSlides(slideIndex);

function nextSlide() {
  showSlides((slideIndex += 1));
}

function prevSlide() {
  showSlides((slideIndex -= 1));
}

function showSlides(n) {
  const slides = document.querySelectorAll(".carousel-item");
  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  for (let slide of slides) {
    // slide.style.transform = `translateX(-${slideIndex * 100}%)`;
  }
}

// Función para cambiar automáticamente cada 3 segundos
function autoSlide() {
  nextSlide();
  setTimeout(autoSlide, 3000); // Cambia el slide cada 3 segundos
}

autoSlide(); // Inicia el cambio automático

// contactanos

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

//Producto
// function showSection(sectionId) {
//   // Ocultar todas las secciones
//   var sections = document.getElementsByClassName("section");
//   for (var i = 0; i < sections.length; i++) {
//     sections[i].style.display = "none";
//   }
//   // Mostrar la sección seleccionada
//   var section = document.getElementById(sectionId);
//   section.style.display = "block";
// }

// function showSection(sectionId) {
//   // Ocultar todas las secciones
//   var sections = document.getElementsByClassName("section");
//   for (var i = 0; i < sections.length; i++) {
//     sections[i].style.display = "none";
//   }
//   // Mostrar la sección seleccionada
//   var section = document.getElementById(sectionId);
//   section.style.display = "block";
// }

function showSection(sectionId) {
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => {
    section.style.display = "none";
  });
  document.getElementById(sectionId).style.display = "block";
  if (sectionId === "cart") {
    displayCart();
  }
}

// function toggleMenu() {
//   const menu = document.querySelector(".menu");
//   menu.classList.toggle("active");
// }

function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Producto agregado al carrito");
  console.log(localStorage);
}

function displayCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartItems = document.getElementById("cartItems");
  let totalPrice = document.getElementById("totalPrice");
  cartItems.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    cartItems.innerHTML = "<p>No hay productos en el carrito</p>";
  } else {
    cart.forEach((item) => {
      let div = document.createElement("div");
      div.textContent = `${item.name} - $${item.price}`;
      cartItems.appendChild(div);
      total += item.price;
    });
    totalPrice.textContent = `Total: $${total.toFixed(2)}`;
  }
}
