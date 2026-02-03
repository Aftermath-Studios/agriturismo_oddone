import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <div className='footer_container'>
            <div className='footer_flex'>
                
                <div className='informations_container'>
                    <p className='information_title'>Agriturismo Oddone</p>
                    <div className="info_container">
                        <p className="location">
                            17057 Bardineto, Savona (SV), IT <br />
                            Agriturismo Fratelli Oddone      <br />
                            Via Martino, 13                  <br /> <br />
                        </p>
                    </div>
                </div>

                <div className='informations_container'>
                    <p className='information_title'>Contatti</p>
                    <div className="info_container">
                        <p className="contacts">
                            Telefono  +39 019-7907115        <br />
                            Cellulare +39 328-6423895        <br /> 
                            P. Iva    01311030090            <br />
                        </p>
                    </div>
                </div>

                <div className='informations_container'>
                    <p className='information_title'>Collegamenti</p>
                    <div className="info_container">

                        <a href='#' className="info_link">Escursione Mountain Bike</a>    <br />
                        <a href='/offers' className="info_link">Offerte dell'azienda</a>        <br />
                        <a href='#' className="info_link">Alloggi e Ristorazione</a>      <br />
                        <a href='/location' className="info_link">Dove Trovarci</a>               <br />
                        <a href='#' className="info_link">Per Prenotare</a>               <br />
                    </div>
                </div>

                <div className='informations_container'>
                    <p className='information_title'>Socials</p>
                    <div className="info_container">

                        <a href='#' className="social_link">
                            <FontAwesomeIcon icon={faInstagram} className="social_icon ig_icon" />
                            <span>Instagram</span>
                        </a>

                        <a href='#' className="social_link">
                            <FontAwesomeIcon icon={faFacebook} className="social_icon fb_icon" />
                            <span>Facebook</span>
                        </a>
                    </div>
                </div>

            </div>
            <div className='copyright'>Copyrights © 2026 All Rights Reserved by Aftermath Studios.</div>

        </div>
    )
}

