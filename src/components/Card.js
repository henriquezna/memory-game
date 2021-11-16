import React from 'react';

function Card(props){
    console.log(props.number, "NUMBER");
    return(
        <button onClick={() => props.cardClicked(props.number)} >Card {props.number}</button>
    );
}

export default Card;