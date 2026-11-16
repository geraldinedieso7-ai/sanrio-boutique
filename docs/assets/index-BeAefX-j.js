import"./style-BO6SUvn7.js";var e=new URL(`hellokitty-Bp-haP-3.jpg`,import.meta.url).href,t=new URL(`hellokittyac-DQTgkxvp.jpg`,import.meta.url).href,n=new URL(`hellokittyhogar-D5JSEtub.jpg`,import.meta.url).href,r=new URL(`papeleriakitty-B2rXaVik.jpg`,import.meta.url).href;document.querySelector(`#app`).innerHTML=`

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
`;var i=document.createElement(`img`);i.src=e,i.alt=`Hello Kitty, colección de ropa`,document.querySelector(`.categoria`).appendChild(i);var a=document.createElement(`img`);a.src=t,a.alt=`Accesorios`,document.querySelector(`.categoria-accesorios`).appendChild(a);var o=document.createElement(`img`);o.src=n,o.alt=`Decoración para el hogar`,document.querySelector(`.categoria-hogar`).appendChild(o);var s=document.createElement(`img`);s.src=r,s.alt=`Papeleria`,document.querySelector(`.categoria-papeleria`).appendChild(s);