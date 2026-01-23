const productos = {
  amigurumis: [
    { nombre: "Conejito Rosa", tamaño: "20 cm", precio: "$15", imagen: "img/conejito.jpg" },
    { nombre: "Ballena Azul", tamaño: "25 cm", precio: "$18", imagen: "img/ballena.jpg" },
    { nombre: "Gatito", tamaño: "22 cm", precio: "$16", imagen: "img/gatito.jpg" }
  ],
  llaveros: [
    { nombre: "Mini Pulpo", tamaño: "5 cm", precio: "$5", imagen: "img/pulpo.jpg" },
    { nombre: "Corazón", tamaño: "4 cm", precio: "$4", imagen: "img/corazon.jpg" }
  ],
  flores: [
    { nombre: "Rosa tejida", tamaño: "15 cm", precio: "$10", imagen: "img/rosa.jpg" },
    { nombre: "Tulipán", tamaño: "18 cm", precio: "$12", imagen: "img/tulipan.jpg" }
  ]
};

function centrar(categoria) {
  const items = document.querySelectorAll('.item');
  items.forEach(item => item.classList.remove('center'));
  if (categoria === 'llaveros') {
    items[0].classList.add('center');
    mostrarProductos('llaveros');
  } else if (categoria === 'amigurumis') {
    items[1].classList.add('center');
    mostrarProductos('amigurumis');
  } else {
    items[2].classList.add('center');
    mostrarProductos('flores');
  }
}

function mostrarProductos(categoria) {
  const contenedor = document.getElementById('tarjetas');
  contenedor.innerHTML = '';
  productos[categoria].forEach(p => {
    contenedor.innerHTML += `
      <div class="tarjeta">
        <img src="${p.imagen}" alt="${p.nombre}">
        <h3>${p.nombre}</h3>
        <p>Tamaño: ${p.tamaño ? p.tamaño : 'N/A'}</p>
        <p>Precio: ${p.precio}</p>
        <a href="https://wa.me/593989149595?text=Hola%2C+me+interesa+el+producto+${encodeURIComponent(p.nombre)}" target="_blank" class="boton-wsp">
          <img src="imagenes/whatsapp.png" alt="WhatsApp" style="width:20px; height:20px; margin-right:6px;">
          Pedir
        </a>
      </div>
    `;
  });
}

const descripcion = document.getElementById("descripcion-categoria");

const descripciones = {
  amigurumis: "Amigurumis tejidos a mano con diseños originales y llenos de detalles encantadores.",
  flores: "Flores de crochet perfectas para decorar tu hogar o regalar en cualquier ocasión.",
  llaveros: "Llaveros únicos que complementan tu estilo con un toque artesanal."
};

if (categoria && descripciones[categoria]) {
  descripcion.textContent = descripciones[categoria];
}

document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    const icon = button.querySelector('.icon');
    const answer = button.nextElementSibling;

    button.setAttribute('aria-expanded', !expanded);

    if (expanded) {
      answer.classList.remove('faq-abierta');
      answer.setAttribute('hidden', '');
    } else {
      answer.classList.add('faq-abierta');
      answer.removeAttribute('hidden');
    }
  });
});
