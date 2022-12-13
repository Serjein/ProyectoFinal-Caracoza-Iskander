function armarTabla() {
    let tabla = document.getElementById("cuerpo-tabla")
    const album = JSON.parse(localStorage.getItem("miAlbum")) || []

    album.forEach(element => {
        tabla.innerHTML += `<tr>
        <td>
        <img class="tabla__img-carrito" src="${element.imagen}" alt="Album">
        </td>
        <td>
        ${element.artista}         
        </td>
        <td id="importe">
        $ ${element.importe.toFixed(2)}
        </td>
        <td>
            <button id="${element.artista}" class="material-symbols-outlined tabla__button" title="Eliminar producto">close</button>
        </td>
    </tr>`
    });
}
armarTabla()

// let tabla = document.getElementById("cuerpo-tabla")
// // const album = JSON.parse(localStorage.getItem("miAlbum")) || []
// album.forEach(element => {

//     tabla.innerHTML +=`<tr>
//     <td>
//     <img class="tabla__img-carrito" src="${element.imagen}" alt="Album">
//     </td>
//     <td>
//     ${element.artista}         
//     </td>
//     <td>
//         <form action="number">
//             <label for="Cantidad">
//             <input id="cantidad"  class="cantidad" name="cantidad" type="number" placeholder="1" min=1 max=100
//                 required>
//                 </label>
//         </form>
//     </td>
//     <td id="importe">
//     $ ${element.importe.toFixed(2)}
//     </td>
//     <td>
//         <button id="${element.artista}" class="material-symbols-outlined tabla__button">close</button>
//     </td>
// </tr>`
// });

function activarBotonesDelete() {
    const buttonsDelete = document.querySelectorAll("button.material-symbols-outlined.tabla__button")
    buttonsDelete.forEach(btn => {
        btn.addEventListener("click", () => {
            
            let pos = album.findIndex(alb => alb.artista === btn.id)
            if (pos > -1) {
                album.splice(pos, 1)
                localStorage.setItem("miAlbum", JSON.stringify(album))
                // armarTabla()
                // activarBotonesDelete()
            }
        })
    })
}
activarBotonesDelete()

totalCarrito = album.reduce((acumulador, importe) => acumulador + importe.importe, 0)
let precioTotal = document.getElementById("total")
precioTotal.innerText = "Total $ " + totalCarrito.toFixed(2)