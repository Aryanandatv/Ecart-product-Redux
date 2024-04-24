import React, { useEffect, useState } from 'react'
import {Row,Col,Card} from 'react-bootstrap'

import { useParams } from 'react-router-dom'
import { fetchProductThunk } from '../redux/slices/productSlice'
import { addToWishList } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'
import { useDispatch } from 'react-redux'


function Details() {
  const [data,setData] =useState([])
  const {id}=useParams()
  const dispatch=useDispatch()

  useEffect(()=>{
    console.log(id)
    setData(JSON.parse(localStorage.getItem("response")).find(item=>item.id==id))
  },[])
 

 


  console.log(data)




  return (
    <>
        <div className='p-5 container'>
          <Row>
            <Col sm={12} md={6} lg={6}>
              <img src={data?.thumbnail}  className='img-fluid' height={'500px'}  alt='img'/>   
            </Col>
            <Col sm={12} md={6} lg={6} className='p-5'>
              <div className='mb-3'>Product Id:1 {data?.id} </div>
              <h2 className='mb-4'>{data?.name}</h2>
              <div className='mb-4'>
                  <p>{data?.brand}</p>
                <span><h4>{data?.price}</h4></span>
              </div>
              <p style={{textAlign:'justify'}}>{data?.description} </p>
              <div className='d-flex justify-content-between'>
                <button className='btn btn-lg border'onClick={()=>{dispatch(addToWishList(data))}}>
                   <i className="fa-solid fa-heart-circle-plus fa-lg" style={{color:' #e52e37'}}></i>
                </button>
                <button className='btn btn-lg border' onClick={()=>{dispatch(addToCart(data))}}>
                  <i className="fa-solid fa-cart-plus fa-lg" style={{color:'#4d5a6f'}}></i>
                </button>
              </div>

            </Col>
          </Row>

        </div>
    
    </>
    
  )
}

export default Details