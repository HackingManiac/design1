
import React from 'react'
import img3 from '../images/image3.png'
import img4 from '../images/image4.png'
import img5 from '../images/image5.png'
import img6 from '../images/image6.png'
import img7 from '../images/imageleft.png'
import img8 from '../images/imageright.png'
import img9 from '../images/image9.png'

import { MDBPagination, MDBPaginationItem, MDBPaginationLink } from 'mdb-react-ui-kit';
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage
} from 'mdb-react-ui-kit';

function Main() {



  return (
    <div className='row '>
      <div className='col-4'><h1 style={{ marginLeft: '100px', fontWeight: 'normal' }} className='text-dark'>New Arrival</h1>
        <h6 style={{ marginLeft: '100px', fontWeight: 'normal' }}><span className='text-decoration-underline'>Join </span> Now</h6>
        <img style={{ height: '200px', marginLeft: '160px' }} src={img3} alt="" />
        <button className='border-1 rounded-pill border border-secondary mt-5' style={{ fontFamily: 'sans-serif', color: '#2b7ee3', marginLeft: '160px', width: '200px', fontWeight: 'bolder' }}>Join Now</button>
      </div>
      <div className='col-8 mb-5' style={{ marginTop: '-10px' }}>
        <h4 style={{  WebkitTextFillColor:'transparent',WebkitBackgroundClip:'text',backgroundImage:'linear-gradient(#209886, #36e4b6)',marginLeft: '289px', color: '#3ddbc4', fontWeight: 'normal' }}>Unlock Premium Features Now</h4>

        <img className='mt-3 mb-2' style={{ marginLeft: '417px', height: '10px' }} src={img9} alt="" />



        <MDBPagination style={{ width: '800px', marginLeft: '60px' }} >
          <MDBPaginationItem>


            <MDBPaginationLink style={{ marginTop: '120px' }} href='#'><img style={{ width: '50px', height: '40px' }} src={img7} alt="left" /></MDBPaginationLink>
          </MDBPaginationItem>
          <MDBPaginationItem>
            <MDBPaginationLink href='#'>
              <MDBCard className='border border-info'>
                <MDBCardImage src={img5} alt='...' position='top' />
                <MDBCardBody>
                  <MDBCardText>
                    <h4 style={{ WebkitTextFillColor:'transparent',WebkitBackgroundClip:'text',backgroundImage:'linear-gradient(#209886, #36e4b6)',color: '#3ddbc4', textAlign: 'center', fontWeight: 'normal', fontSize: '22px' }}>lower interest Rates</h4>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard></MDBPaginationLink>
          </MDBPaginationItem>
          <MDBPaginationItem>
            <MDBPaginationLink href='#'>
              <MDBCard className='border border-info'>
                <MDBCardImage src={img6} alt='...' position='top' />
                <MDBCardBody>
                  <MDBCardText>
                    <h4 style={{ WebkitTextFillColor:'transparent',WebkitBackgroundClip:'   text ',backgroundImage:'linear-gradient(#209886, #36e4b6)', color: '#3ddbc4', fontSize: '22px', textAlign: 'center', fontWeight: 'normal' }}>  Interest Free Payments</h4>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard></MDBPaginationLink>
          </MDBPaginationItem>
          <MDBPaginationItem>
            <MDBPaginationLink href='#'>
              <MDBCard className='border border-info'>
                <MDBCardImage src={img4} alt='...' position='top' />
                <MDBCardBody>
                  <MDBCardText>
                    <h4 style={{ WebkitTextFillColor:'transparent',WebkitBackgroundClip:'text',backgroundImage:'linear-gradient(#209886, #36e4b6)', color: '#3ddbc4', fontSize: '22px', textAlign: 'center', fontWeight: 'normal' }}>Discount on Materials</h4>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard></MDBPaginationLink>
          </MDBPaginationItem>
          <MDBPaginationItem>
            <MDBPaginationLink style={{ marginTop: '120px' }} href='#'><img style={{ width: '50px', height: '40px' }} src={img8} alt="right" /></MDBPaginationLink>



          </MDBPaginationItem>

        </MDBPagination>

        <button className='text-light border-1 rounded-pill border  ' style={{backgroundImage:'linear-gradient(#209886, #36e4b6)' , backgroundColor: '#3ddbc4', fontFamily: 'sans-serif', color: '#2b7ee3', marginLeft: '360px', width: '200px', fontWeight: 'bolder' }}>UNLOCK NOW</button><br />
        <button className='text-light border-1 rounded-pill  border  mt-3 ' style={{backgroundImage:'linear-gradient(#209886, #36e4b6)' ,backgroundColor: '#3ddbc4', fontFamily: 'sans-serif', color: '#2b7ee3', marginLeft: '385px', width: '150px', fontWeight: 'bolder' }}>DETAILS</button>
      </div>

    </div>
  )
}

export default Main