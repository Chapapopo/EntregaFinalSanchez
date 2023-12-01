/* ItemListContainer Viene de App y va a ItemList */
import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import ojotas from '../data/ojotas'



const ItemListContainer = () => {
  const { categoria } = useParams()
  const [productos, setProductos] = useState([])/*  */

  const getOjotas = new Promise((resolve, reject) => {
    if (ojotas.length > 0) {
      setTimeout(() => {
        resolve(ojotas)
      }, 2000)
    } else {
      reject(new Error("No hay datos"))
    }
  })
  
  useEffect(() => {
    getOjotas
    .then((res) => {
      const filtrarProductos = res.filter((producto) => producto.categoria === categoria)
      setProductos(categoria === undefined ? res : filtrarProductos)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [categoria]);

  console.log(productos)

  return (
    <div className='container'>
      <ItemList
        productos={productos}
      />
    </div>
  )
}

export default ItemListContainer