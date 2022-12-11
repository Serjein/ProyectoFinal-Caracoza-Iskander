function recuperarCarrito() {
    let tablaHTML = ""
    const tbody = document.querySelector("tbody")
    const album = JSON.parse(localStorage.getItem("miAlbum")) || []
    (album.length > 0) && album.forEach(alb => tablaHTML += retornoCarrito(alb))
    tbody.innerHTML = tablaHTML
    // calcularTotal()
}
recuperarCarrito()

// function recuperarCarrito() {
//     let tablaHTML = ""
//     const tbody = document.querySelector("tbody")
//     const carrito = JSON.parse(localStorage.getItem("miCarrito")) || []
//     (carrito.length > 0) && carrito.forEach(alb => tablaHTML += retornoCarrito(alb))
//     tbody.innerHTML = tablaHTML
//     // calcularTotal()
// }
// recuperarCarrito()