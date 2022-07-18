//Array vacia para los Discos
let discos = [];

//Array vacia para almacenar los productos comprados en el Carrito
let carrito = [];

//Mostrando el precio final en el carrito modificando DOM y sumando el total
const precioTotal = document.getElementById('precioTotal')


//Fetch para obtener los datos del archivo json
fetch("assets/js/discos.json")
  .then((response) => response.json())
  .then((data) => {

    discos = data

    mostrarProductos(discos)

  })
  .catch((error) => {
    console.log(error)
  })


//filtros para selectores 
const filterSelector = document.getElementById('filter')

function filtros() {
  filterSelector.addEventListener('change', () => {
    console.log(filterSelector.value);
    if (filterSelector.value == 'all') {
      console.log("Filtrando all", discos);
      mostrarProductos(discos)
    } else if (filterSelector.value == 'sort') {
      console.log("Filtrando Alfabeticamente", discos.sort((a, b) => a.artista.localeCompare(b.artista)));
      mostrarProductos(discos.sort((a, b) => a.artista.localeCompare(b.artista)))
    }
    else if (filterSelector.value == 'sort2') {
      console.log("Filtrando Alfabeticamente", discos.sort((a, b) => a.nombre.localeCompare(b.nombre)));
      mostrarProductos(discos.sort((a, b) => a.nombre.localeCompare(b.nombre)))

    }
    else if (filterSelector.value == 'sort3') { //filtro por año
      console.log("Filtrando por año de menor a mayor", discos.sort((a, b) => a.año - b.año));
      mostrarProductos(discos.sort((a, b) => a.año - b.año))

    } else if (filterSelector.value == '70s') {
      let array70s = discos.filter(elemento => elemento.año >= 1970 && elemento.año <= 1979);
      console.log("Filtrando por discos de los 70´s", array70s);
      mostrarProductos(array70s)

    } else if (filterSelector.value == '80s') {
      let array80s = discos.filter(elemento => elemento.año >= 1980 && elemento.año <= 1989);
      console.log("Filtrando por discos de los 80´s", array80s);
      mostrarProductos(array80s)

    } else if (filterSelector.value == '90s') {
      let array90s = discos.filter(elemento => elemento.año >= 1990 && elemento.año <= 1999);
      console.log("Filtrando por discos de los 90´s", array90s);
      mostrarProductos(array90s)

    } else if (filterSelector.value == '2000s') {
      let array2000s = discos.filter(elemento => elemento.año >= 2000);
      console.log("Filtrando por discos de los 2000", array2000s);
      mostrarProductos(array2000s)
    }
  })
}
filtros();


mostrarProductos(discos)


//Imprimiendo todas las tarjetas de discos en una grilla con plantilla literal & innerHTML
function mostrarProductos(discos) {
  let discosGrid = "";
  discos.forEach(disco => {
    discosGrid += `
    <div class="col-12 col-md-6 col-xl-3">
      <article>
          <img class="card-img-top" src="${disco.img}" alt="${disco.nombre}">
            <h2 class="card-text disco-artist">${disco.artista}</h2>
            <p class="card-text disco-name">${disco.nombre}</p>
            <p class="card-text disco-name">Año: ${disco.año}</p>
            <p class="card-text disco-precio">Precio: $${disco.precio}</p>
            <!--iframe class="spotify-player" style="border-radius:12px" src="${disco.url}"" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe-->
            <div class="d-flex justify-content-between align-items-center">
                <button type="button" class="btn btn-dark add">Add to cart</button>
            </div>
      </article>
    </div>
    `;
    document.getElementById('discos').innerHTML = discosGrid;

    //Agregando evento al boton de add to cart 
    const add = document.getElementsByClassName('add')
    for (let i = 0; i < add.length; i++) {
      add[i].addEventListener('click', () => {
        console.log("Agregando al carrito");

        //agregar el producto al carrito
        let producto = {
          nombre: discos[i].nombre,
          artista: discos[i].artista,
          año: discos[i].año,
          precio: discos[i].precio,
          img: discos[i].img
        }
        Toastify({
          text: discos[i].artista + " " + discos[i].nombre + " agregado al carrito",
          className: "info",
          gravity: "bottom",
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          }
        }).showToast();

        carrito.push(producto)
        console.log(carrito);
        localStorage.setItem('carrito', JSON.stringify(carrito))
        contadorSumar();
        mostrarCarrito();

      })
    }


  });
}



mostrarProductos(discos);


//Funcion para mostrar items agregados en el carrito de compras 
function mostrarCarrito() {
  let carritoItem = "";
  for (let disco of carrito) {
    carritoItem += `
    <div>
        <article class="row">
        <div class="col-6">
            <img class="cart-img" src="${disco.img}" alt="${disco.nombre}">
        </div>
        <div class="col-6">
              <h2 class="card-text cart-artist">${disco.artista}</h2>
              <p class="card-text cart-name">${disco.nombre}</p>
              <p class="card-text cart-precio">Precio: $${disco.precio}</p>
        </div>
        </article>
      `;
  }
  document.getElementById('contenedorCarrito').innerHTML = carritoItem;
  finalPrice();
}


let contador = 0;
let resultado = document.getElementById('contadorCarrito');

//Funcion para sumar items agregados en el carrito de compras
function contadorSumar() {
  contador++;
  resultado.innerHTML = contador;
}
contadorSumar();


//Funcion para restar items agregados en el carrito de compras
function contadorRestar() {
  contador--;
  resultado.innerHTML = contador;

  if (contador < 0) {
    //volver el contador a 0 cuando el carrito esta vacio y no se puede restar mas de 0 productos 
    contador = 0;
    resultado.innerHTML = contador;
  }
}
contadorRestar();


function emptyCart() {
  //event listener para eliminar productos del carrito al hacer click en el icono #clearCart 
  document.getElementById('clearCart').addEventListener('click', () => {
    carrito = [];

    // if (contador == 0) {
    //   Swal.fire('El carrito ya esta vacio')
    // } else {
    //   contador = 0;
    //   Swal.fire('Vaciaste el carrito')
    //   resultado.innerHTML = contador;
    // }

    //Remplazando con Operador ternario
    contador == 0 ? Swal.fire('El carrito ya esta vacio') : Swal.fire('Vaciaste el carrito')
    contador = 0;
    resultado.innerHTML = contador;

    localStorage.setItem('carrito', JSON.stringify(carrito))
    finalPrice();
    mostrarCarrito();
  })
}
emptyCart();
//end event listener



//funcion para recuperar el carrito de compras del localStorage
function recuperarCarrito() {
  // let carritoRecuperado = JSON.parse(localStorage.getItem('carrito'))

  //Operador logico OR ||
  let carritoRecuperado = JSON.parse(localStorage.getItem('carrito')) || [];

  //   if (carritoRecuperado != null) {
  //     carrito = carritoRecuperado
  //     contador = carrito.length //contador de productos agregados al carrito 
  //     resultado.innerHTML = contador;

  //   }
  //   else {
  //     carrito = []
  //   }
  // }

  //Remplazo con Operador ternario
  carritoRecuperado != null ? carrito = carritoRecuperado : carrito = []
  contador = carrito.length
  resultado.innerHTML = contador;
}
  recuperarCarrito();
  mostrarCarrito();


  //Method reduce array para mostrar el precio total de los productos agregados al carrito en el span #total
  function finalPrice() {
    precioFinal = carrito.reduce((acc, prod) => acc + prod.precio, 0)
    precioTotal.innerText = `Precio total: $${precioFinal}`
  }
  finalPrice();

  //end reduce method


  //CHECKOUT
  const wspMessage = 'Quiero confirmar el pedido realizado desde High Fidelity Store',

    //btn checkout 
    btnCheckout = document.getElementById('btn-checkout');

  //Boton finalizar compra y checkout 
  function checkout() {
    btnCheckout.addEventListener('click', () => {
      if (carrito.length > 0) {
        Swal.fire({
          title: 'Compra finalizada!',
          html: 'Total de productos agregados al carrito:' + " " + '<b>' + carrito.length + '</b>' + '<br><br>' + '\n' + 'Total a pagar: $' + precioFinal,
          icon: 'success',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Pedido por whatsapp'
        })

          .then((result) => {
            if (result.isConfirmed) {
              window.open(`https://wa.me/543413802958?text=${encodeURIComponent(wspMessage)}`, '_blank');
              contador = 0;
              resultado.innerHTML = contador;
              carrito = [];
              localStorage.setItem('carrito', JSON.stringify(carrito))
              finalPrice();
              mostrarCarrito();

            }
          })

      } else {
        Swal.fire('El carrito no tiene productos')
      }
    })
  }
  checkout();