/* ItemListContainer Viene de App y va a ItemList */
import React from 'react'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import ojotas from '../data/ojotas'

const ItemListContainer = () => {
  const { categoria } = useParams()


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

  const filtrarProductos = ojotas.filter((producto) => producto.categoria === categoria)
  return (
    <div className='container'>
      {console.log(categoria)}
      <ItemList
        productos={categoria === undefined ? ojotas : filtrarProductos}
      />
    </div>
  );
  
}

export default ItemListContainer