import './style.css'
async function obtenerProductos() {
    const respuesta = await fetch("https://dummyjson.com/products");
    const datos = await respuesta.json();
    console.log(datos);
    console.log(datos.products);
    console.log(datos.products[0].category);
    console.log(datos.products[1].category);
    console.log(datos.products[2].category);
    const lista = document.querySelector('#lista-productos');

    for (const producto of datos.products) {
      if(producto.category !== 'groceries') {
         const tarjeta = document.createElement('div');
      tarjeta.classList.add('tarjeta-producto');

      const nombre = document.createElement('h3');
      nombre.textContent = producto.title;

      const imagen = document.createElement('img');
      imagen.src = producto.thumbnail;
      imagen.alt = producto.title;

      const precio = document.createElement('p');
      precio.textContent = '$' + producto.price;
       
      tarjeta.appendChild(imagen);
      tarjeta.appendChild(nombre);
      tarjeta.appendChild(precio);
      lista.appendChild(tarjeta);
    }
      }
      
     
    console.log(respuesta.status);
}

obtenerProductos();

document.querySelector('#app').innerHTML = `

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