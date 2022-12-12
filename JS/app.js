const imgCarrito = document.getElementById("img-carrito")
const container = document.getElementById("container")
const buscar = document.querySelector("input#buscar")
const URL = 'JSON/albums.json'
const discos = []


async function extraerAlbums() {
    try {
        const response = await fetch(URL)
        const data = await response.json()
        if (data.length > 0) {
            discos.push(...data)
            llamarAlbums(discos)
            activarBotones()
        }
    } catch (error) {
        // container.innerHTML = retornoError()
    }
}
extraerAlbums()

imgCarrito.addEventListener("mousemove", ()=> {
    let totalProductos = album.length
        imgCarrito.title = `${totalProductos} productos en el carrito`
})

function llamarAlbums(array) {
    let contenido = ""
    if (array.length > 0) {
        array.forEach(album => {
            contenido += retornoCard(album)
        })
        container.innerHTML = contenido
  
    }
}

function activarBotones() {
    const botonesAdd = document.querySelectorAll("button.button.agregar")
    botonesAdd.forEach(btn => {
        btn.addEventListener("click", () => {
            let resultado = discos.find(disc => disc.id === parseInt(btn.id))
           album.push(resultado)
            localStorage.setItem("miAlbum", JSON.stringify(album))
        })
    })
}

function filtrarAlbums() { //Aplicamos operador ternario
    let resultado = discos.filter(disco => disco.artista.toUpperCase().includes(buscar.value.toUpperCase().trim()))
        if (resultado.length > 0) {
            llamarAlbums(resultado)
            activarBotones()
        } else {
            toast(`No lo tenemos por el momento`, '#FA5706')
        }
}

buscar.addEventListener("search", ()=> { 
    buscar.value.trim() !== "" ? filtrarAlbums() : llamarAlbums(discos)
})

buscar.addEventListener("change", ()=> activarBotones())

const toast = (text, bgcolor)=> {
    Toastify({
        text: text,
        duration: 3000,
        close: true,
        gravity: "top", 
        position: "right",
        stopOnFocus: true, 
        style: { background: bgcolor || 'CornFlowerBlue', fontSize: '18px'}
      }).showToast();
}
