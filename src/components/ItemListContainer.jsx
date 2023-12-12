/* ItemListContainer Viene de App y va a ItemList */
import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore"

const ItemListContainer = () => {

  const { categoria } = useParams()
  const [productos, setProductos] = useState([])

  useEffect(() => {
    const obtenerProductos = async () => {
      try {

        const db = getFirestore()

        const itemCollection = collection(db, "ojotas")

        let queryProducts = itemCollection;

        if (categoria) {
          queryProducts = query(itemCollection, where('categoria', '==', categoria));
        }

        const querySnapshot = await getDocs(queryProducts);
        const productosData = querySnapshot.docs.map((doc) => doc.data());
        setProductos(productosData);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    obtenerProductos();
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