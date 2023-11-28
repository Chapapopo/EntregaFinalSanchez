/* ItemList viene de ItemListContainer y va a Item*/
import React from 'react'
import Item from './Item'

const ItemList = ({ productos }) => {
    
    const  ojotasList = productos.map(v =>{
        return <div className="col-7 col-md-6 col-lg-4 mt-4"><Item Producto={v.titulo} Precio={v.precio} Imagen={v.image} Id={v.id}/></div>
    })

    return (
        <div className='row'>
            {ojotasList}
        </div>
    )
}

export default ItemList