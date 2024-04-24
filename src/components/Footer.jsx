import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
      <>
        <div >

          <div className='d-flex justify-content-between  text-light p-5' style={{backgroundColor:'#191143'}}>
            <div className='w-25'>
              <h3>Redux Cart 2024</h3>
              <p style={{textAlign:'justify'}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
            <div className='w-25 text-center'>
              <h3>Links</h3>
              <Link to={'./wish'} className='d-block mb-3'>WishList</Link>
              <Link to={'./cart'}>Cart</Link>
            </div>
            <div className='w-25'>
              <h3>References</h3>
              <a href='https://react-bootstrap.netlify.app/' className='d-block mt-3 mb-3'>React Bootstrap</a>
              <a href='https://react.dev/' className='d-block mb-3'>React</a>
              <a href='https://react-redux.js.org/' >Redux</a>
            </div>
            <div className='w-25'>
              <h3>Contact Us</h3>
              <p> Submit your Email,So we can contact you....</p>
              <input type='email' className='form-control' placeholder='Enter Email id'></input>
              <button className='btn btn-outline-light mt-3'>Submit</button>
            </div>
          </div>
           <h6 className='text-center text-light '>Redux Cart 2024 &copy; All rights reserved. </h6> 
        </div>
      
      </>
  )
}

export default Footer