import React from "react";
import close from './close.png';
import './Monprofil.css';
import { Link } from "react-router-dom";
import profil from './profil.png';
import profil1 from './profil1.png';

function Monprofil() {
    return (
        <div className="closelogo">
            <Link to='/'><img src={close} /></Link>
            <div className="tel">
            <h1>What is your current level?</h1>
        </div>
           <Link to='/Test'>  
           <div className="profils">
       <div className="profil1">
                <img src={profil} alt="" />
                <h1>Are you new to English ?</h1>
            </div> 
            <Link to='/Testque'>  
            <div className="profil1">
                <img src={profil1} alt="" />
                <h1>Already speak English ?</h1>
            </div>
        </Link>
        </div>
        </Link>
        </div>
    )

}

export default Monprofil;