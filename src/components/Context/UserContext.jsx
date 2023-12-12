import { createContext, useState } from 'react';

export const UserContext = createContext(null)

const UserProvider = ({children}) => {
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [provincia, setProvincia] = useState("")
    const [ciudad, setCiudad] = useState("")
    const [direccion, setDireccion] = useState("")
    const [cp, setCP] = useState("")
    const [userExist, setUserExist] = useState(true)


    return(
        <UserContext.Provider value={{nombre, setNombre, apellido, setApellido, email, setEmail, password, setPassword, provincia, setProvincia, ciudad, setCiudad, direccion, setDireccion, cp, setCP, userExist, setUserExist}}>
            {children}
        </UserContext.Provider>
    )
}
export default UserProvider