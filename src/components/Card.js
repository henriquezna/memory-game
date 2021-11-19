import React from 'react';

function Card(props){
    return(
        <button onClick={() => props.cardClicked(props.number)} >Card {props.number}</button>
    );
}

export default Card;