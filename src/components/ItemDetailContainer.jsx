/* ItemDetailContainer viene de App y va a ItemDetail 
Encargado de obtener un producto y se lo pasa a ItemDetail mediante props.*/
import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail'
import ojotas from '../data/ojotas'
import { useParams } from 'react-router-dom';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
// Asegúrate de importar las funciones necesarias de Firebase

const ItemDetailContainer = () => {
  const { id } = useParams()
  const [productos, setProductos] = useState([])

  useEffect(() => {
    const obtenerProductos = async () => {
      try {

        const db = getFirestore()

        const itemCollection = collection(db, "ojotas")

        let queryProducts = itemCollection;

        if (id) {
          queryProducts = query(itemCollection, where('id', '==', id));
        }

        const querySnapshot = await getDocs(queryProducts);
        
        if (!querySnapshot.empty) {
          const primerProducto = querySnapshot.docs[0].data();
          setProductos(primerProducto);
        } else {
          console.log('No se encontró un producto con el ID especificado.');
        }
      } catch (error) {
        console.error('Error al obtener el producto:', error);
      }
    };

    obtenerProductos();
  }, [id]);

  return (
    <>
      <ItemDetail
        producto={productos} />
    </>
  )
}

export default ItemDetailContainer