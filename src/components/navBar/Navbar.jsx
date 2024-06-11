import React from 'react'
import Style from "../navBar/NavBar.module.css"
import EyoImage from '../../assets/svg/logo.svg'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <div id={Style.mainDiv}>
                <div>
                   <Link to="/"><img src={EyoImage} alt="" /></Link> 
                </div>
                {/* <div>
                    <button id={Style.nav_btn}>Play Now</button>
                </div> */}
            </div>
            <div id={Style.mobileNav}>
                <img src={EyoImage} alt="" />
            </div>
        </>
    )
}

export default NavBar