import React from 'react'
import  { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductThunk ,onNavigateNext,onNavigatePrev} from '../redux/slices/productSlice'
import Spinner from 'react-bootstrap/Spinner';
import {addToWishList} from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice'

function Home() {
  const dispatch=useDispatch()
  const{product,loading,error,productPerPage,currentPage} = useSelector((state)=>state.productReducer)

  useEffect(()=>{
      dispatch(fetchProductThunk())
  },[])
//  console.log(products)

 const totalPages=Math.ceil(product?.length/productPerPage)
 const indexOfLastElement=currentPage * productPerPage
 const indexOfFirstElement=indexOfLastElement-productPerPage
 const validCards=product?.slice(indexOfFirstElement,indexOfLastElement)

 const navigateprev=()=>{
  if(currentPage!=1){
    dispatch(onNavigatePrev())
  }
 }
 const navigateNext=()=>{
  if(currentPage!=totalPages){
    dispatch(onNavigateNext())
  }
 }
  return (
    <>
       <header className=" py-5" style={{backgroundColor:'#035465'}}>
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder" style={{color:'#000000'}}>ReduxCart</h1>
                    <p className="lead fw-normal text-dark-50 mb-0">With this shop homepage template</p>
                </div>
            </div>
        </header>
        <section className="py-5"  style={{backgroundColor:'#000000'}}>
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

                  {
                    !loading &&error &&
                    <div className='text-danger display-4'>{error}</div>
                  }
                  {
                        loading ? 
                        
                       <div className='d-flex justify-content-center'>
                       <Spinner
                        as="span"
                        animation="border" 
                        size="xl"
                        role='status'
                        aria-hidden="true"                     
                        /> 
                        <h2 className='ms-2'>Loading....</h2>
                        </div>


                           : !error&&
                           validCards.map(item=>(
                            <div className="col mb-5" >
                                <div className="card h-100">
        
                                    <Link to={`/details/${item?.id}`}>
                                      <img className="card-img-top"  height={'180px'} src={item.thumbnail} alt="...."  />
                                    </Link>
        
        
                                        <div>
                                        <div className="text-center">
                                            <h5 className="fw-bolder">{item?.title.slice(0,10)}...</h5>
                                           {item?.price}
                                        </div>
                                    
                                       <div className='d-flex justify-content-between'>
                                        <button className='btn border'onClick={()=>{dispatch(addToWishList(item))}}>
                                       <i className="fa-solid fa-heart-circle-plus"style={{color:"#fd0896"}}></i>
                                        </button>
                                        <button className='btn border' onClick={()=>{dispatch(addToCart(item))}}>
                                        <i className="fa-solid fa-cart-plus"style={{color:"#4dfd0d"}}></i>
                                        </button>
                                       </div>
                                  </div>
                                </div>
                            </div>
                            )
                      
                           ) 
                  }

                </div>
            </div>
            <div className='text-center'>
            <button className='btn' onClick={navigateprev}><i className="fa-solid fa-arrow-left fa-2xl text-dark"></i></button>
            <span className='text-dark'>{currentPage}/{totalPages}</span>
            <button className='btn' onClick={navigateNext}><i className="fa-solid fa-arrow-right fa-2xl text-dark"></i></button>
            </div>
      
           
       </section>
    </>
  )
}

export default Home