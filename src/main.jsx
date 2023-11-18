import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import ojotas from './data/ojotas'
import OjotasViews from './components/OjotasViews.jsx'
import CategoryViews from './components/CategoryViews.jsx'

/* Al que me corrija dego la grabacion del gif en la carpepeta grabaciones */
const routers = [
  {
    path: "/",
    element: <App />,
    children: [{
      path: "/Mujer",
      element: <CategoryViews categoria="Mujer"/>,
    },{
      path: "/Hombre",
      element: <CategoryViews categoria="Hombre"/>,
    },{
      path: "/Niño",
      element: <CategoryViews categoria="Niño"/>,
    }
  ]},
];

ojotas.forEach((ojota) => {
  routers.push({
    path: ojota.id,
    element: <OjotasViews ojota={ojota}/>,
  });
});


const router = createBrowserRouter(routers);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
);