import React from "react";
import'../CharacterCard/CharacterCard.css'


const CharacterCard = ({image, name}) =>{

    
    return(
        <div className="character__container">
            <img className="character__img" alt="personaje disney" src={image}></img>
            <p>{name}</p>
        </div>
    )
}


export default CharacterCard;