import React from 'react';
import PropTypes from 'prop-types';
const PlayAgain=(props)=>{
    return(
        <div className="game-done">
            <div className="message" style={{color:props.gameStatus=='lost'?'red':'green'}}>
                {props.gameStatus==='lost'?'Game Over':'Nice'}
            </div>
            <button onClick={props.resetGame}>Play Again</button>
        </div>
        
    )
}

PlayAgain.propTypes={
    resetGame:PropTypes.func.isRequired,
    gameStatus:PropTypes.string.isRequired
}
export default PlayAgain;