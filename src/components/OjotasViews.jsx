import React from 'react'
import NavBar from './NavBar'
import Item from './Item'


function OjotasViews({ ojota }) {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <div className='container'>
          <div className='row'>
            <div className="col-7 col-md-6 col-lg-4 mt-4">
              <Item Producto={ojota.titulo} Precio={ojota.precio} Imagen={ojota.image} Descripcion={ojota.descripcion} />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default OjotasViews