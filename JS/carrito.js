function recuperarCarrito() {
    let tablaHTML = ""
    const tbody = document.querySelector("tbody")
    const album = JSON.parse(localStorage.getItem("miAlbum")) || []
    (album.length > 0) && album.forEach(alb => tablaHTML += retornoCarrito(alb))
    tbody.innerHTML = tablaHTML
    calcularTotal()
}
recuperarCarrito()

function calcularTotal() {
    let total = document.querySelector("p#total")
    let totalCarrito = album.reduce((acc, alb)=> acc + alb.importe, 0)
        total.innerText = `$ ${totalCarrito.toFixed(2)}`
}