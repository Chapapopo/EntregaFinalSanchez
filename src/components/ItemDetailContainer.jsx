/* ItemDetailContainer viene de App y va a ItemDetail 
Encargado de obtener un producto y se lo pasa a ItemDetail mediante props.*/
import React from 'react'
import ItemDetail from './ItemDetail'
import ojotas from '../data/ojotas'

const ItemDetailContainer = () => {

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
      <ItemDetail productos={ojotas} />
    </>
  )
}

export default ItemDetailContainer