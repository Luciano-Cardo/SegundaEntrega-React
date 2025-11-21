const productos=[
    {id: 1, nombre: "Charango", precio: 400000, img: "/img/charango.png"},
    {id: 2, nombre: "Armnonica", precio: 120000, img: "/img/armonica.png"},
    {id: 3, nombre: "Guitarra acustica", precio: 700000, img: "/img/acustica.png"},
    {id: 4, nombre: "Bajo", precio: 900000, img: "/img/bajo.png"},
    {id: 5, nombre: "Bateria", precio: 2500000, img: "/img/bateria.png"},
    {id: 6, nombre: "Ukelele", precio: 300000, img: "/img/ukelele.png"},
    {id: 7, nombre: "Guitarra Electrica", precio: 1500000, img: "/img/gibson.png"},
    {id: 8, nombre: "Violim", precio: 850000, img: "/img/violin.png"},
]

export const getProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(productos)
        }, 2000)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(()=>{
            const producto = productos.find(item => item.id === id)
            resolve (producto)
        },2000)
    })
}