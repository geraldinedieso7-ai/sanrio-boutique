import './style.css'
import hellokitty from './assets/hellokitty.jpg'
import hellokittyac from './assets/hellokittyac.jpg'
import hellokittyhogar from './assets/hellokittyhogar.jpg'
import papeleriakitty from './assets/papeleriakitty.jpg'

document.querySelector('#app').innerHTML= `

<header>
<div class="contenedor-logo">
  <h1>Sanrio Boutique</h1>
  <p>Cute Market</p>
</div>

<nav>
  <a href="./index.html">Inicio</a>
  <a href="./catalogo.html">Catálogo</a>
</nav>
</header>

<main>
  <section class="hero">
    <div class="hero-contenido">
      <h2>¡Bienvenido a Sanrio Boutique!</h2>
      <p>
        Encontrá tus productos favoritos en un mundo
        lleno de colores pastel y ternura.
      </p>

      <a href="./catalogo.html" class="boton-catalogo">
      Explorar catálogo
      </a>
    </div>
  </section>
<section class="categorias">
<h2>Explorá nuestro mundo mágico</h2>

<div class="categorias-lista">
 <div class="categoria">
 <h3>Ropa</h3>
 <p>Prendas re tiernas para todos los días.</p>
 </div>

 <div class="categoria categoria-accesorios">
 <h3>Accesorios</h3>
 <p>Detallitos para completar tu estilo.</p>
 </div>

 <div class="categoria categoria-hogar">
 <h3>Hogar</h3>
 <p>Dale un toque lindo a tu hogar.</p>
 </div>

 <div class="categoria categoria-papeleria">
  <h3>Papelería</h3>
  <p>Organizá tus días con mucho color.</p>
 </div>
</div>
</section>
</main>

<footer>
<p>© 2026 Sanrio Boutique - Cute Market</p>
<p>Proyecto académico de Programación</p>
</footer>
`

const imagenHelloKitty = document.createElement('img');
imagenHelloKitty.src = hellokitty;
imagenHelloKitty.alt = 'Hello Kitty, colección de ropa';

const tarjetaRopa = document.querySelector('.categoria');

tarjetaRopa.appendChild(imagenHelloKitty);

const imagenKitty = document.createElement('img');
imagenKitty.src = hellokittyac;
imagenKitty.alt = 'Accesorios';

const tarjetaAccesorios = document.querySelector('.categoria-accesorios');
tarjetaAccesorios.appendChild(imagenKitty);

const imagenHogar = document.createElement('img');

imagenHogar.src = hellokittyhogar;
imagenHogar.alt = 'Decoración para el hogar';

const tarjetaHogar = document.querySelector('.categoria-hogar');
tarjetaHogar.appendChild(imagenHogar);

const imagenPapeleria = document.createElement('img');
imagenPapeleria.src = papeleriakitty;
imagenPapeleria.alt = 'Papeleria';

const tarjetaPapeleria = document.querySelector('.categoria-papeleria');
tarjetaPapeleria.appendChild(imagenPapeleria);