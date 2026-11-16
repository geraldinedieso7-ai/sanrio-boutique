import"./style-BO6SUvn7.js";async function e(){let e=await fetch(`https://dummyjson.com/products`),t=await e.json();console.log(t),console.log(t.products),console.log(t.products[0].category),console.log(t.products[1].category),console.log(t.products[2].category);let n=document.querySelector(`#lista-productos`);for(let e of t.products)if(e.category!==`groceries`){let t=document.createElement(`div`);t.classList.add(`tarjeta-producto`);let r=document.createElement(`h3`);r.textContent=e.title;let i=document.createElement(`img`);i.src=e.thumbnail,i.alt=e.title;let a=document.createElement(`p`);a.textContent=`$`+e.price,t.appendChild(i),t.appendChild(r),t.appendChild(a),n.appendChild(t)}console.log(e.status)}e(),document.querySelector(`#app`).innerHTML=`

<header>
<div class="contenedor-logo">
  <h1>Sanrio Boutique</h1>
  <p>Cute Market</p>
<nav>
    <a href="./index.html">Inicio</a>
    <a href="./catalogo.html">Catálogo</a>
</nav>
</header>

<main>
 <section class="catalogo">
   <h2>Nuestro catálogo^^</h2>
   <p>Descubrí todos nuestros productos favoritos.</p>

   <div id="lista-productos"></div>
 </section>
</main>

`;