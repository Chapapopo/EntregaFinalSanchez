import React from 'react'
import Item from './Item'
import ojotas from '../data/ojotas'

const ItemList = () => {
    
    const  ojotasList = ojotas.map(v =>{
        return <div className="col-7 col-md-6 col-lg-4 mt-4"><Item Producto={v.titulo} Precio={v.precio} Imagen={v.image} Descripcion={v.descripcion}  Id={v.id}/></div>
    })

    return (
        <div className='row'>
            {ojotasList}
        </div>
    )
}

export default ItemList