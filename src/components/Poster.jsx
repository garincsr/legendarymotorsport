import React from 'react';
import style from '../assets/module-css/styles.module.css';
import logo from '../assets/images/logo.png';
import bgImage from '../assets/images/bg-image2-clone.jpg';
const Poster = () => {
    return (
        <div className={style.latarGambar}>
            <img className={style.gambar} src={bgImage} alt="" />
            <div className={style.latarText}>
                <img style={{ width: '90%' }} src={logo} alt="" /> <br /> <br />
                <h3>CHOOSE FROM OUR TOP END</h3>
                <p>HIGH PERFORMANCE CARS AT GREAT PRICE</p>
            </div>
        </div>
    )
}

export default Poster