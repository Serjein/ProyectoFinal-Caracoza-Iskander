const album = JSON.parse(localStorage.getItem("miAlbum")) || []
// const carrito = JSON.parse(localStorage.getItem("miCarrito")) || []

function retornoCard(album){
    return `<div class="card" id="card${album.id}">
                <div class="front">
                    <img src="${album.imagen}" alt="${album.artista}">
                </div>
                <div class="back">
                    <h2>${album.album}</h2>
                    <p class="back__text"><span>${album.artista}</span><br> ${album.texto} <br>
                        <button class="button agregar" title="Agregar al carrito album ${album.album}" id="${album.id}">$ ${album.importe.toFixed(2)}</button>
                    </p>
                </div>
            </div>`
}

// function retornoCarrito(alb){
//     return `<tr>
//                 <td>
//                 <img class="tabla__img-carrito" src="${alb.imagen}" alt="Album">
//                 </td>
//                 <td>
//                 ${alb.artista}         
//                 </td>
//                 <td>
//                     <form action="number">
//                         <label for="Cantidad">
//                         <input class="cantidad" name="cantidad" type="number" placeholder="1" min=1 max=100
//                             required>
//                             </label>
//                     </form>
//                 </td>
//                 <td>
//                 $ ${alb.importe.toFixed(2)}
//                 </td>
//                 <td>
//                     <button id="${alb.artista}" class="material-symbols-outlined tabla__button">close</button>
//                 </td>
//             </tr>`
// }
