/* ItemDetailContainer viene de App y va a ItemDetail 
Encargado de obtener un producto y se lo pasa a ItemDetail mediante props.*/
import React from 'react'
import ItemDetail from './ItemDetail'


const ItemDetailContainer = () => {
  const ojotas = [
    { id: 1, titulo: "Top", descripcion: "Modelo base", precio: 5000, categoria: "Hombre", image: "images/productos/Top.webp" },
    { id: 2, titulo: "Slim", descripcion: "Modelo fino de mujer", precio: 5500, categoria: "Mujer", image: "images/productos/Slim.webp" },
    { id: 3, titulo: "Power", descripcion: "Modelo comodo de hombre", precio: 9000, categoria: "Hombre", image: "images/productos/Power.webp" },
    { id: 4, titulo: "Sweet", descripcion: "Modelo economico de mujer", precio: 4500, categoria: "Mujer", image: "images/productos/Sweet.webp" },
    { id: 5, titulo: "Wadges", descripcion: "Modelo ergonomico de mujer", precio: 10000, categoria: "Mujer", image: "images/productos/Wadges.webp" },
    { id: 6, titulo: "Kmax", descripcion: "Modelo base de nene", precio: 8000, categoria: "Niño", image: "images/productos/KMax.webp" },
  ]

  const getOjotas = new Promise((resolve, reject) => {
    if (ojotas.length > 0) {
      setTimeout(() => {
        resolve(ojotas)
      }, 2000)
    } else {
      reject(new Error("No hay datos"))
    }
  })

  getOjotas
    .then((res) => {
    })
    .catch((error) => {
      console.log(error)
    })
  return (
    <>
      <ItemDetail productos={ojotas}/>
    </>
  )
}

export default ItemDetailContainer