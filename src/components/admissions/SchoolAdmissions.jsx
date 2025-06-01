import React from 'react'
import './SchoolAdmissions.css'

const SchoolAdmissions = () => {
    return (
        <div>
            <div className="school-adm-hero">
                <div className="school-adm-carousel-wrapper">
                    <div className='school-adm-overlay-container'>
                        <div className="school-adm-left-overlay">
                            <h1 className="school-adm-title">Welcome to P.E.M High School & Jr College</h1>
                            <h2 className="school-adm-subtitle">Addmissions For Jr to 10th</h2>
                        </div>
                        <div className="school-adm-right-overlay">
                            <div className="school-adm-form-container">
                                <form className="school-adm-form">
                                    <h2>Admissions Open for <br /> 2025-26</h2>

                                    <input type="text" placeholder="Student Name*" required />
                                    <input type="text" placeholder="Parent Name" />

                                    <select required>
                                        <option value="" disabled selected>Current Std</option>
                                        <option value="Nursery">Nursery</option>
                                        <option value="LKG">LKG</option>
                                        <option value="UKG">UKG</option>
                                        <option value="1st">1st</option>
                                        <option value="2nd">2nd</option>
                                        <option value="3rd">3rd</option>
                                        <option value="4th">4th</option>
                                        <option value="5th">5th</option>
                                        <option value="6th">6th</option>
                                        <option value="7th">7th</option>
                                        <option value="8th">8th</option>
                                        <option value="9th">9th</option>
                                        <option value="10th">10th</option>
                                    </select>

                                    <input type="tel" placeholder="Mobile No*" required />
                                    <input type="email" placeholder="Email ID" />
                                    <input type="text" placeholder="City*" required />

                                    <button type="submit">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SchoolAdmissions