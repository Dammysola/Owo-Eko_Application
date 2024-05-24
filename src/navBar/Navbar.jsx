import React from 'react'
import Style from "../navBar/NavBar.module.css"

const NavBar = () => {
    return (
        <div id={Style.mainDiv}>
            <div id={Style.Nav_TextDiv}>
                <p className={Style.nav}>Lorem</p>
                <p className={Style.nav}>Lorem</p>
                <p className={Style.nav}>Lorem</p>
            </div>
            <div>
                {/* <img src="" alt="" /> */}
                <p>LOGO</p>
            </div>
            <div>
                <button id={Style.nav_btn}>Play Now</button>
            </div>
        </div>
    )
}

export default NavBar