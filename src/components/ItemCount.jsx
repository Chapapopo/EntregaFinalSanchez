/* ItemCount viene de ItemDetail */
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react'
import useCounter from '../hooks/useCounter.js'

const ItemCount = () => {
  const {counter, incrementar, decrementar} =useCounter(0,2)
  return (
    <div>
      <Button bg="secondary" onClick={incrementar} >+</Button>
      <Badge bg="secondary">{counter}</Badge>
      <Button bg="secondary" onClick={decrementar} >-</Button>
    </div>
  )
}

export default ItemCount