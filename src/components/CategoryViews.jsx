import React from 'react'
import ItemListFiltrado from './ItemListFiltrado'
import {Route,Routes} from 'react-router-dom'

function CategoryViews({ categoria }) {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <ItemListFiltrado Categoria={categoria}/>
        </div>
      </div>
    </>
  )
}

export default CategoryViews