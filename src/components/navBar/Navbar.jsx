import React from 'react'
import Style from "../navBar/NavBar.module.css"
import EyoImage from '../../assets/svg/eyo_image.svg'

const NavBar = () => {
    return (
        <>
            <div id={Style.mainDiv}>
                <div id={Style.Nav_imgDiv}>
                    <img src={EyoImage} alt="" />
                    <p>OWOEKO</p>
                </div>
                <div>
                    <button id={Style.nav_btn}>Play Now</button>
                </div>
            </div>
            <div id={Style.mobileNav}>
                <img src={EyoImage} alt="" />
                <p>OWOEKO</p>
            </div>
        </>
    )
}

export default NavBar