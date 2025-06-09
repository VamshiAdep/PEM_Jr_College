import React from 'react'
import './Campus.css'
import gallery_1 from '../../components/assets/schoolImages/schoolImage2.jpg'
import gallery_2 from '../../components/assets/schoolImages/computterLab.jpg'
import gallery_3 from '../../components/assets/schoolImages/classRoom.jpg'
import gallery_4 from '../../components/assets/schoolImages/schoolImage.jpg'
import gallery_5 from '../../components/assets/schoolImages/collegeSudents.jpg'
import gallery_6 from '../../components/assets/schoolImages/campus.jpg'
import gallery_7 from '../../components/assets/schoolImages/collegeSudents2.jpg'
import gallery_8 from '../../components/assets/schoolImages/auditorium.jpg'



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
        <img src={gallery_7} alt="" />
      </div>
      <div className="gallery">
        <img src={gallery_4} alt="" />
        <img src={gallery_5} alt="" />
        <img src={gallery_6} alt="" />
        <img src={gallery_8} alt="" />
      </div>
    </div>
  )
}

export default Campus
