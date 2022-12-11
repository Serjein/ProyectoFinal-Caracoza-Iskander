const carrito = JSON.parse(localStorage.getItem("miCarrito")) || []

function retornoCard(album){
    return `<div class="card" id="card${album.id}">
                <div class="front">
                    <img src="${album.imagen}" alt="${album.artista}">
                </div>
                <div class="back">
                    <h2>${album.album}</h2>
                    <p class="back__text"><span>${album.artista}</span><br> ${album.texto} <br>
                        <button class="button" title="Agregar al carrito album ${album.album}" id="${album.id}">$${album.importe}MXN</button>
                    </p>
                </div>
            </div>`
}

