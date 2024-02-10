import React from 'react'
import img from '../images/image1.png'
import img2 from '../images/image2.png'
import {
    
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';

function Header() {
  return (
    <div>
      

      {/* <MDBNavbar className='mt-2' style={{backgroundColor:'#e6e4e1' ,height:'60px'}}>
          <img  style={{ marginLeft:'190px',marginBottom:'100px', height:'100px'}} src={img} alt="" />
  
     
          <MDBNavbarBrand  style={{color:'grey',marginLeft:'20%',paddingBottom:'20px'}} href='#'>
         
                      
           
          </MDBNavbarBrand>
          <h3 style={{marginRight:'550px',marginBottom:'150px'}}>XYZ SYSTEMS LLP.</h3>
      
      </MDBNavbar> */}
      <MDBNavbar className='mt-2' style={{backgroundColor:'#e6e4e1' ,height:'60px'}}>
          <MDBNavbarBrand>
            <div className='d-flex'>
              <div style={{marginLeft:'200px'}}>
                 <img  src={img} width={80} height={55} alt="" />
              </div>
              <div>
              <h4 className='text-dark' style={{marginLeft:'290px',fontWeight:'normal'}}>XYZ SYSTEMS LLP.</h4>
              </div>
            </div>

          </MDBNavbarBrand>
      </MDBNavbar>
      <div className=' text-center mt-3'><a href="#" class="link-dark">Home</a>
      <a  href="#" class="link-dark ms-5">Dash Board</a>

      <a href="#" class="link-dark  ms-5">Products</a>
      <a href="#" class="link-dark ms-5">Transactions</a>
      <a href="#" class="link-dark ms-5">Journal</a>

      <div  >
        <img style={{height:'50px',marginLeft:'86%'}} src={img2} alt="" />
        <h4 style={{fontSize:'12px',marginLeft:'86%'}}>Joseph Lazar</h4>
      </div>

      </div>

      
      

    </div>
  )
}

export default Header