const productos=[
    {id: 1, nombre: "Charango", precio: 400000, img: "/img/charango.png", categoria: "cuerdas"},
    {id: 2, nombre: "Armonica", precio: 120000, img: "/img/armonica.png", categoria: "viento"},
    {id: 3, nombre: "Guitarra acustica", precio: 700000, img: "/img/acustica.png", categoria: "cuerdas"},
    {id: 4, nombre: "Bajo", precio: 900000, img: "/img/bajo.png", categoria: "cuerdas"},
    {id: 5, nombre: "Bateria", precio: 2500000, img: "/img/bateria.png", categoria: "percusion"},
    {id: 6, nombre: "Ukelele", precio: 300000, img: "/img/ukelele.png", categoria: "cuerdas"},
    {id: 7, nombre: "Guitarra Electrica", precio: 1500000, img: "/img/gibson.png", categoria: "cuerdas"},
    {id: 8, nombre: "Violin", precio: 850000, img: "/img/violin.png", categoria: "cuerdas"},
]


export const getProductos = (idCategoria) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(idCategoria){
                resolve(productos.filter(item => item.categoria === idCategoria))
            }else{
                resolve(productos)
            }
        }, 2000)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(()=>{
            const producto = productos.find(item => item.id == id)
            resolve (producto)
        },2000)
    })
}