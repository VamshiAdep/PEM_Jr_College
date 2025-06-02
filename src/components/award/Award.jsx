import React from 'react'
import Abhishek from "../assets/AbhishekPatil.jpeg"
import Anjali from "../assets/AnjaliYadav.jpeg"
import Omkar from "../assets/OmkarParkhi.jpeg"
import Sathyam from "../assets/SatyamPatel.jpeg"
import Swetha from "../assets/ShwetaMishra.jpeg"
import zoya from "../assets/ZoyaSayyad.jpeg"
import "./award.css"

export default function Award() {
     const AwardWinner = [
            {
                name: "AbhishekPatil",
                image: Abhishek,
            },
            {
                name: "AnjaliYadav",
                image: Anjali,
            },
            {
                name: "OmkarParkhi",
                image:Omkar ,
            },
            {
                name: "SatyamPatel",
                image: Sathyam,
            },
            {
                name: "ShwetaMishra",
                image: Swetha,
            },
            {
                name: "ZoyaSayyad",
                image:zoya ,
            },
    
        ];
  return (
    <div className='award-main-container'>
        <p className='award-text'>Swipe Boxing Winner</p>
        <div className="award-card-container">
                    {AwardWinner.map((principal, index) => (
                        <div key={index} className="winner-card">
                            <div className='winner-pic'>
                                <img src={principal.image} alt={principal.name} />
                            </div>
                            <h2 className='winner-name'>{principal.name}</h2>
                        </div>
                    ))}
                </div>
    </div>
  )
}
