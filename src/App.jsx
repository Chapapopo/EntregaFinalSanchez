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
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

    return (
        <>
            <BrowserRouter>
                <header>
                    <NavBar />
                </header>
                <main>
                    <Routes>
                        <Route exact path='/' element={<Home />} />
                        <Route exact path='/categoria/:categoria' element={<ItemListContainer />} />
                        <Route exact path='/item/:id' element={<ItemDetailContainer />} />
                    </Routes>
                </main>
            </BrowserRouter>
        </>
    )
}

export default App