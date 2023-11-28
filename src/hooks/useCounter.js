import { useState } from "react";

const useCounter = () => {
  const [counter, setCounter] = useState(0)

  const incrementar = () => {
    if (counter < 10) {
      setCounter(counter + 1)
    }
  }

  const decrementar = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }
  
  const reset = () => {
    setCounter(0)
  }
  return{
    counter,
    decrementar,
    incrementar,
    reset
  }
  
}
export default useCounter