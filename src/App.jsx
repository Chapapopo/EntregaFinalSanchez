/* Aca Tiene que empezar todo
y tiene 
NavBar
ItemListContainer
ItemDetailContainer*/
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Carrito from './components/Carrito'
import Checkout from './components/Checkout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserProvider from './components/Context/UserContext'
import ShoppingCartProvider from './components/Context/ShoppingCardContext'
import Usuario from './components/Usuario'

function App() {

    return (
        <>
            <BrowserRouter>
                <ShoppingCartProvider>
                    <UserProvider>
                        <header>
                            <NavBar />
                        </header>
                        <main>
                            <Routes>
                                <Route exact path='/' element={<Home />} />
                                <Route exact path='/categoria/:categoria' element={<ItemListContainer />} />{/*  */}
                                <Route exact path='/item/:id' element={<ItemDetailContainer />} />
                                <Route exact path='/carrito' element={<Carrito />} />
                                <Route exact path='/finalizar' element={<Checkout />} />
                                <Route exact path='/usuario' element={<Usuario />} />
                            </Routes>
                        </main>
                    </UserProvider>
                </ShoppingCartProvider>
            </BrowserRouter>
        </>
    )
}

export default App