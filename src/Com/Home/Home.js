import React from "react";
import './Home.css';
import logo from './logo.png';
import acceuil from './acceuil.png';
import profil from './profil.gif';
import anglais from './anglais.png';
import hello from './hello.gif';
import ster from './ster.gif';
import { Link } from "react-router-dom";

function Home() {
    return (
    <div className="home">
        <div className="logos">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="anglogo">
                <img src={anglais} alt="" />
            </div>
            <div className="lop">
                <div className="acceuil">
                <img src={acceuil} alt="" />
                <h1>Mon cours</h1>
                </div>
                <Link to='/Monprofil'><div className="profil">
                <img src={profil} alt="" />
                <h1>Mon profil</h1>
                </div></Link>
            </div>
        </div>
        <div className="deb">
            <h1>Chapitre 1</h1>
            <Link to='/Chapitre1'><button class="btn">CONTINUER</button></Link>
            <img src={hello} alt="" />
        </div>
        <div className="deb1">
            <h1>Chapitre 2</h1>
            <Link to='/Chapitre2'><button class="btn">CONTINUER</button></Link>
            <img src={ster} alt="" />
        </div>
    </div>   
     );
}

export default Home;