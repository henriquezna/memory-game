import { logRoles } from "@testing-library/react";
import React, { useState } from "react";
import Card from './Card';

function Board(props){
    const [cards, setCards] = useState([
        {
            number: 1,
            clicked: false
        },
        {
            number: 2,
            clicked: false
        },
        {
            number: 3,
            clicked: false
        },
        {
            number: 4,
            clicked: false
        },
        {
            number: 5,
            clicked: false
        },
        {
            number: 6,
            clicked: false
        },
        {
            number: 7,
            clicked: false
        },
        {
            number: 8,
            clicked: false
        },
        {
            number: 9,
            clicked: false
        },
        {
            number: 10,
            clicked: false
        },
        {
            number: 11,
            clicked: false
        },
        {
            number: 12,
            clicked: false
        }
    ]);

    //Fisher–Yates shuffle
    function shuffleCards() {
        var m = cards.length, t, i;
      
        while (m) {
          i = Math.floor(Math.random() * m--);
      
          t = cards[m];
          cards[m] = cards[i];
          cards[i] = t;
        }
      
        return cards;
      }

    function reset(){
        setCards([
            {
                number: 1,
                clicked: false
            },
            {
                number: 2,
                clicked: false
            },
            {
                number: 3,
                clicked: false
            },
            {
                number: 4,
                clicked: false
            },
            {
                number: 5,
                clicked: false
            },
            {
                number: 6,
                clicked: false
            },
            {
                number: 7,
                clicked: false
            },
            {
                number: 8,
                clicked: false
            },
            {
                number: 9,
                clicked: false
            },
            {
                number: 10,
                clicked: false
            },
            {
                number: 11,
                clicked: false
            },
            {
                number: 12,
                clicked: false
            }
        ]);
    }

    function cardClicked(index){
        if(cards.find( ({ number }) => number === index ).clicked === true){
            props.updateScore(0);
            reset();
            return;
        }
        cards[index-1].clicked = true;
        setCards([...shuffleCards()]);
        props.updateScore();
    }

    return(
        <div>
            <div>CARDS</div>
            {cards.map(function(card){
                return (<Card number={card.number} clicked={card.clicked} cardClicked={cardClicked} />)
            })}
        </div>
    );
}

export default Board;