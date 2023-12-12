/* ItemCount viene de ItemDetail */
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react'

const ItemCount = ({ onCountChange }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    onCountChange(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
      onCountChange(count - 1);
    }
  };
  return (
    <div>
      <Button bg="secondary" onClick={increment} >+</Button>
      <Badge bg="secondary">{count}</Badge>
      <Button bg="secondary" onClick={decrement} >-</Button>
    </div>
  )
}

export default ItemCount