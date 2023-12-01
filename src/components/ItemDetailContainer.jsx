/* ItemDetailContainer viene de App y va a ItemDetail 
Encargado de obtener un producto y se lo pasa a ItemDetail mediante props.*/
import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail'
import ojotas from '../data/ojotas'
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [productos, setProductos] = useState([])

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
        const productoEncontrado = res.find((producto) => producto.id === id)
        setProductos(id === undefined ? res : productoEncontrado)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [id]);
  
  return (
    <>
      <ItemDetail
        producto={productos} />
    </>
  )
}

export default ItemDetailContainer