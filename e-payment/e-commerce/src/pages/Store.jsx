import React from 'react'
import { Col, Row } from 'react-bootstrap'
import {productsArray} from '../productsStore'
import ProductCard from '../component/ProductCard'
const Store = () => {
  return (
    <>
    <h1>Welcome to the store</h1>
    <Row  xs={1} md={3}  className='g-4'>
      {
        productsArray.map((product,idx)=>(
          <Col align="center">
           <ProductCard product={product}/>
           </Col>
        ))
      }
      
    </Row>
    </>
  )
}

export default Store