import React from 'react';
import './OurManagment.css';
import logo from '../assets/TSSS-Logo.jpg';
import KundenPurushottam from '../assets/trusteeImages/KundenPurushottam.png'
import BhairiNiskham from '../assets/trusteeImages/BhairiNiskham.png'
import BhairiGangadhar from '../assets/trusteeImages/BhairiGangadhar.png'
import RamaswamiRamayya from '../assets/trusteeImages/RamaswamiRamayya.png'
import GajengiKrishna from '../assets/trusteeImages/GajengiKrishna.png'
import KalyadapuBhumesh from '../assets/trusteeImages/KalyadapuBhumesh.png'
import GandurLaxminarayana from '../assets/trusteeImages/GandurLaxminarayana.png'
import ManchalaShankar from '../assets/trusteeImages/ManchalaShankar.png'
import KodamRajaiah from '../assets/trusteeImages/KodamRajaiah.png'
import BolliSatyanarayan from '../assets/trusteeImages/BolliSatyanarayan.png'
import ChennaDevarajam from '../assets/trusteeImages/ChennaDevarajam.png'
import SamalRavindra from '../assets/trusteeImages/SamalRavindra.png'
import PamuManohar from '../assets/trusteeImages/PamuManohar.png'

const OurManagement = () => {
    const managementTeam = [
        { id: 1, image: RamaswamiRamayya, isLarge: true },
        { id: 2, image: GajengiKrishna, isLarge: true },
        { id: 3, image: KundenPurushottam, isLarge: true },
        { id: 4, image: KalyadapuBhumesh, isLarge: false },
        { id: 5, image: GandurLaxminarayana, isLarge: false },
        { id: 6, image: PamuManohar, isLarge: false },
        { id: 7, image: ManchalaShankar, isLarge: false },
        { id: 8, image: KodamRajaiah, isLarge: false },
        { id: 9, image: BolliSatyanarayan, isLarge: false },
        { id: 10, image: BhairiNiskham, isLarge: false },
        { id: 11, image: ChennaDevarajam, isLarge: false },
        { id: 12, image: SamalRavindra, isLarge: false },
        { id: 13, image: BhairiGangadhar, isLarge: false },
    ];

    const largeMembers = managementTeam.filter(member => member.isLarge);
    const regularMembers = managementTeam.filter(member => !member.isLarge);

    return (
        <div className='management-main-container'>
            <div className="management-container">
                <h1 className="management-title">Our Management</h1>

                {/* Large members row */}
                <div className="large-members-grid">
                    {largeMembers.map((member) => (
                        <div key={member.id} className="management-box large">
                            <div className="image-logo-container">
                                <img src={member.image} alt={`Management member ${member.id}`} className="management-image" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Regular members grid */}
                <div className="regular-members-grid">
                    {regularMembers.map((member) => (
                        <div key={member.id} className={`management-box ${member.id === 13 ? 'hide-on-mobile' : ''}`}>
                            <div className="image-logo-container ">
                                <img src={member.image} alt={`Management member ${member.id}`} className="management-image" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='tsss-main-container'>
                <div className='logo-image-container'>
                    <img className='image' src={logo} alt="tsss logo" />
                </div>
                <div className="logo-container">
                    <h2 className="organization-name">TELUGU SAMAJ SHIKSHAN SANSTHA</h2>
                </div>
            </div>
        </div>
    );
};

export default OurManagement;