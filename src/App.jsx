import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { Outlet, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
        <header>
          <NavBar />
        </header>
        <main>
          <Routes>
          <Route path='/'element={<ItemListContainer />}>
          </Route>
          </Routes>
          <Outlet />
        </main>
    </>
  )
}

export default App
