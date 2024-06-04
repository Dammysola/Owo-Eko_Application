import React from 'react'
import Style from '../card/How _It_WorksCard.module.css'



const How_It_worksCard = (props) => {
    const {image, header, text}= props
  return (
    <div id={Style.Card_MainDiv}>
        
        <div id={Style.CardDiv}>
            <img src={image} alt="" />
            <p>{header}</p>
            <div>{text}</div>
        </div>
    </div>
  )
}

export default How_It_worksCard