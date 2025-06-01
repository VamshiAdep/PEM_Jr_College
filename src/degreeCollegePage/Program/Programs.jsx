import React from 'react'
import './programs.css'
import program_1 from '../../components/assets/carouselImages/image2.jpg'
import program_2 from '../../components/assets/carouselImages/image4.jpg'
import program_3 from '../../components/assets/carouselImages/image3.jpg'
import program_icon_1 from '../assets/program-icon-1.png'
import program_icon_2 from '../assets/program-icon-2.png'
import program_icon_3 from '../assets/program-icon-3.png'




const Programs = () => {
    return (
        <div>
            <div className='title'>
                <p>Our COURSES</p>
                <h2>What We Offer</h2>
            </div>
            <div className='programs'>
                <div className="program">
                    <img src={program_1} alt="" />
                    <div className="caption">
                        <img src={program_icon_1} alt="" />
                        <p>Bsc Degree</p>
                    </div>
                    <p>Bsc Degree</p>
                </div>
                <div className="program">
                    <img src={program_2} alt="" />
                    <div className="caption">
                        <img src={program_icon_2} alt="" />
                        <p>B.Com Degree</p>
                    </div>
                    <p>B.Com Degree</p>
                </div>
                <div className="program">
                    <img src={program_3} alt="" />
                    <div className="caption">
                        <img src={program_icon_3} alt="" />
                        <p>B.A. Degree</ p>
                    </div>
                    <p>B.A. Degree</ p>
                </div>

            </div>
        </div>
    )
}

export default Programs
