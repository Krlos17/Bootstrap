//? Evento que se ejecuta cuando el DOM ha sido cargado
document.addEventListener('DOMContentLoaded', async () => {

    const listaProductos = document.querySelector('#listaProductos')

    const productos = await getProductos()

    let body = ""

    for (let { image, title, description, price, category } of productos) {
        body += `
                <article class="card custom-shadow p-3 mb-5 bg-body-tertiary rounded m-5 p-3 bg-warning bg-opacity-10
                border border-warning border-start-0 rounded-end text-info-emphasis" style="flex-basis: 18rem;">
                    <img src="${image}" class="card-img-top" alt="${title}">
                    <div class="card-body flex-grow-1">
                        <h5 class="card-title fw-bold">${title}</h5>
                        <p class="card-text fw-light">${description}</p>
                    </div>
                    <div class="mt-auto">
                        <ul class="list-group list-group-flush p-3 bg-warning bg-opacity-10 border border-warning border-start-0 rounded-end">
                            <li class="list-group-item text-info">${category}</li>
                            <li class="list-group-item text-success fw-bold">Lps.${price}</li>
                        </ul>
                        <div class="card-body">
                            <button type="button" class="btn btn-outline-warning">Comprar</button>
                        </div>
                    </div>
                </article>
        `
    }

    listaProductos.innerHTML = body

})

const getProductos = async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    const productos = await response.json()
    return productos
}
