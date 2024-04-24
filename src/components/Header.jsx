import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { useSelector,useDispatch} from 'react-redux';
import { searchProduct } from '../redux/slices/productSlice';

function Header() {

  const {wishlist}=useSelector(state=>state.wishlistReducer)
  const cart=useSelector(state=>state. cartReducer)
  const dispatch=useDispatch()


  return (
    <Navbar className="" style={{backgroundColor:'#F8F9BD'}}  >
    <Container >
      <Navbar.Brand >
        <Link to={'/'} className='text-decoration-none' style={{color:'#0E6435',fontSize:'30px',fontWeight:'bold'}}>
           <i className="fa-solid fa-cart-shopping fa-xl mt-3 me-3" style={{color:'#089B3E'}}></i>
            ReduxCart
        </Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">

        <Nav.Link  className='btn  me-3'>

          {/* <i className="fa-solid fa-magnifying-glass "></i> */}
          <input type='text ' style={{width:'600px'}}  className='form-control ' onChange={(e)=>{dispatch(searchProduct(e.target.value.toLowerCase()))}} placeholder='search product'/>
          </Nav.Link >

        

          <Nav.Link  className='btn border border-dark me-4 mt-1 ms-5 ' style={{backgroundColor:'lightGrey',width:'140px',height:'43px'}}>
            <Link to={'/wish'} className='text-decoration-none ' style={{color:'#000000'}}>
              <i className="fa-solid fa-heart fa-lg me-1" style={{color:' #d3172a'}}></i>
                WishList
                <Badge bg="info " className='ms-1' >{wishlist?.length}</Badge>
              </Link> 
          </Nav.Link >
          <Nav.Link  className='btn border border-dark me-4 mt-1' style={{backgroundColor:'lightGrey',width:'140px',height:'43px'}}>
            <Link to={'/cart'} className='text-decoration-none ' style={{color:'#000000'}}>
               <i className="fa-solid fa-cart-shopping  fa-lg me-1" style={{color:'#089B3E'}}></i>
               Cart
              <Badge bg="info ms-1" className='ms-1'>{cart?.length}</Badge>
            </Link> 
            </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header