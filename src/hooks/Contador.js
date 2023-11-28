import { useState } from "react";

const Contador = (valorInicial = 0, paso = 1) => {
    const [count, Contador] = Contador(valorInicial)

    const incrementar = () => {
        Contador((prevCount) => prevCount + paso)
    }

    const decrementar = () => {
        Contador((prevCount) => prevCount - paso)
    }

    return{
        count, incrementar, decrementar
    }
}
export default Contador