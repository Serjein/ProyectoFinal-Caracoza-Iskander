const imgCarrito = document.getElementById("imgCarrito")
const container = document.getElementById("container")
const URL = 'JSON/albums.json'
const albums = []

async function extraerAlbums() {
    try {
        const response = await fetch(URL)
        const data = await response.json()
        if (data.length > 0) {
            albums.push(...data)
            llamarAlbums(albums)
            activarClickBotones()
        }
    } catch (error) {
        container.innerHTML = retornoError()
    }
}
extraerAlbums()


function llamarAlbums(array) {
    let contenido = ""
    if (array.length > 0) {
        array.forEach(album => {
            contenido += retornoCard(album)
        })
        container.innerHTML = contenido
  
    }
}


function activarClickBotones() {
    const botonesAdd = document.querySelectorAll("button.button.button-outline.button-add")
    botonesAdd.forEach(btn => {
        btn.addEventListener("click", () => {
            let resultado = productos.find(prod => prod.id === parseInt(btn.id))
            console.log(resultado)
            carrito.push(resultado)
            localStorage.setItem("miCarrito", JSON.stringify(carrito))
            toast(`'${resultado.nombre}' se agregó al carrito`, 'green')
        })
    })
}