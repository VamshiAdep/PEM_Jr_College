import React from 'react'
import './Campus.css'
import gallery_1 from '../../components/assets/carouselImages/image1.jpg'
import gallery_2 from '../../components/assets/carouselImages/image1.jpg'
import gallery_3 from '../../components/assets/carouselImages/image1.jpg'
import gallery_4 from '../../components/assets/carouselImages/image1.jpg'



const Campus = () => {
  return (
    <div className='campus'>
      <div className='title'>
        <p>Gallery</p>
        <h2>Campus photos</h2>
      </div>
      <div className="gallery">
        <img src={gallery_1} alt="" />
        <img src={gallery_2} alt="" />
        <img src={gallery_3} alt="" />
        <img src={gallery_4} alt="" />
      </div>
      <div className="gallery">
        <img src={gallery_1} alt="" />
        <img src={gallery_2} alt="" />
        <img src={gallery_3} alt="" />
        <img src={gallery_4} alt="" />
      </div>
    </div>
  )
}

export default Campus
