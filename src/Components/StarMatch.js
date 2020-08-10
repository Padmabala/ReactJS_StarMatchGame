import React,{useState} from 'react';
import Game from './Game';

const StarMatch=()=>{
    const [gameId,setGameId]=useState(1);
    const startNewGame=()=>{

        setGameId(gameId+1);
        console.log("Heeeeeeelooo",gameId)
    }
    return(
        <Game key={gameId} startNewGame={startNewGame}/>
        // <Game key={gameId} startNewGame={()=>{
        //     setGameId(gameId+1);
        // console.log("Heeeeeeelooo",gameId)
        // })}/>
    )
}
export default StarMatch;