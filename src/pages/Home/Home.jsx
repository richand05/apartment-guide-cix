import React from 'react';
import { Link } from 'react-router-dom';
import { BiMap } from 'react-icons/bi';
import { BrightnessAltHighFill } from 'react-bootstrap-icons';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="video-background"></div>
            <div className="text-container">
                <BrightnessAltHighFill className='logo-brisas-cix' />
                <span translate="no" className='name-airbnb'>Las Brisas de Cix</span>
                <div className='location'><BiMap /> Av. Prolongación Bolognesi</div>
                <div className='address'>Mz. B lote 10</div>
                <div className='address'>Las Brisas, Chiclayo, Perú</div>
            </div>
            <Link to="/home" type="button" className="btn btn-home">
                Empezar
            </Link>
        </div>
    );
}

export default Home;
