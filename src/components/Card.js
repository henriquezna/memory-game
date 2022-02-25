import React from 'react';
import { StyledCard } from './styles/StyledCard';

import GreatBarrierReef from '../images/Great_Barrier_Reef.jpg';
import Christ from '../images/Christ_the_Redeemer.jpg';
import Egypt   from '../images/Egypt.jpg';
import Canyon from '../images/Grand_Canyon.jpg';
import GreatWall from '../images/Great_Wall.jpg';
import MachuPicchu from '../images/Machu_Picchu_Peru.jpg';
import MtFuji from '../images/Mt_Fuji.jpg';
import MtEverest from '../images/Mt_Everest.jpg';
import Niagara from '../images/Niagara_Falls.jpg';
import Liberty from '../images/Statue-of-Liberty.jpg';
import TajMahal from '../images/Taj_Mahal.jpg';
import Victoria from '../images/Victoria_Falls.jpg';

const imgArray = [
    GreatBarrierReef,
    Christ,
    Egypt,
    Canyon,
    GreatWall,
    MachuPicchu,
    MtFuji,
    MtEverest,
    Niagara,
    Liberty,
    TajMahal,
    Victoria
];

function Card(props){
    return(
        <StyledCard onClick={() => props.cardClicked(props.number)} >
            <img src={imgArray[props.number - 1]} height="300" width="300" alt={props.number} />
        </StyledCard>
    );
}

export default Card;