import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemListContainer = () => {
  const productos = [
    {id: 1, titulo: "producto A", descripcion: "descripcion del producto A", precio: 1000, categoria: "A"},
    {id: 2, titulo: "producto B", descripcion: "descripcion del producto B", precio: 1500, categoria: "B"},
    {id: 3, titulo: "producto C", descripcion: "descripcion del producto C", precio: 2000, categoria: "C"},
    {id: 4, titulo: "producto D", descripcion: "descripcion del producto D", precio: 2500, categoria: "D"},
    {id: 5, titulo: "producto E", descripcion: "descripcion del producto E", precio: 3000, categoria: "E"},
    {id: 6, titulo: "producto F", descripcion: "descripcion del producto F", precio: 3500, categoria: "F"},
  ]

  const mostrarProducto = new Promise((resolve, reject) => {
    if (productos.length > 0){
      setTimeout(() => {
        resolve(productos)
      }, 5000)
    }else{
      reject("no se encontraron preductos")
    }
  })
}

export default ItemListContainer