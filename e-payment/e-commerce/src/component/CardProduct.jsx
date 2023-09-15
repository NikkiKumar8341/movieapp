import React, { useContext } from 'react'
import { CartContext } from '../CartContext'
import { getProductData } from '../productsStore';
import { Button } from 'react-bootstrap';


const CardProduct = (props) => {

    const cart=useContext(CartContext);
    const id=props.id;
    const quantity=props.quantity
    const productData=getProductData(id);


  return (
    <>
    <h3>{productData.title}</h3>
    <p>{quantity} Total</p>
    <p>₹{(quantity * productData.price).toFixed(2)}</p>
    <Button size='sm' onClick={()=>cart.deleteFromCart(id)}>Remove</Button>
    <hr></hr>
    </>
  )
}

export default CardProduct