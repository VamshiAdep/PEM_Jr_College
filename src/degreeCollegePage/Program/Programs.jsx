import program_icon_1 from '../assets/program-icon-1.png'
import program_icon_2 from '../assets/program-icon-2.png'
import program_icon_3 from '../assets/program-icon-3.png'
import './programs.css'




const Programs = () => {
    return (
        <div>
            <div className='title'>
                <p>Our COURSES</p>
                <h2>What We Offer</h2>
            </div>
            <div className='programs'>
                <div className="program">
                    <img src='https://images.theengineeringprojects.com/image/webp/2021/02/Bachelors-of-Science-13.jpg.webp?ssl=1' alt="" />
                    <div className="caption">
                        <img src={program_icon_1} alt="" />
                        <p>Bsc Degree</p>
                    </div>
                    <p>Bsc Degree</p>
                </div>
                <div className="program">
                    <img src='https://www.shutterstock.com/image-vector/graduation-student-logo-vector-600nw-407115427.jpg' alt="" />
                    <div className="caption">
                        <img src={program_icon_2} alt="" />
                        <p>B.Com Degree</p>
                    </div>
                    <p>B.Com Degree</p>
                </div>
                <div className="program">
                    <img src='https://www.shutterstock.com/image-vector/graduation-student-logo-vector-letter-600nw-407113780.jpg' alt="" />
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
