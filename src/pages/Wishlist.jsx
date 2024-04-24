import React from 'react'
import { Row ,Col,Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromWishList } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'

function Wishlist() {

  const {wishlist}=useSelector((state)=>state.wishlistReducer)
  console.log(wishlist)
  const dispatch=useDispatch()

  const handleToCart=(product)=>{
    dispatch(addToCart(product))
    dispatch(removeFromWishList(product.id))
  }



  return (
     <>
       <div className='container p-5'>
        <Row>
          {
            wishlist?.length>0?
            wishlist?.map(item=>(

              <Col sm={12} md={6} lg={4} xl={2}>
              <Card>
              <Card.Img src={item?.thumbnail}   height={'180px'} varient={'card img-top'}/>
              <Card.Body>
                <Card.Title>{item?.title}</Card.Title>
                <Card.Text>{item?.price}</Card.Text>
                <div className='d-flex justify-content-between'>
                  <button className='btn border' onClick={()=>{dispatch(removeFromWishList(item?.id))}}>
                  <i className="fa-solid fa-heart-circle-xmark fa-lg" style={{color:' #e52e37'}}></i>
                  </button>
                  <button className='btn border' onClick={()=>handleToCart(item)}>
                  <i className="fa-solid fa-cart-plus fa-lg" style={{color:'#4d5a6f'}}></i>
                  </button>
                </div>
              </Card.Body>
              </Card>
            </Col>


            ))
          
          
            
          :
          <h1>No WishList Items...</h1>
         }
          
        </Row>


       </div>
     
     
     </>
    
  )
}

export default Wishlist