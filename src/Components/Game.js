import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from '../../stylesheet.css';
import { range, random, sum, randomSum } from './CommonComponents/Utils';
import PlayNumber from './PlayNumber';
import StarDisplay from './StarDisplay';
import PlayAgain from './PlayAgain';

//custom hook
const useGameState=()=>{
  const [starCount,setStarCount]=useState(random(1,9));
  const [availableNums,setAvailableNums]=useState(range(1,9))
  const [candidateNums,setCandidateNums]=useState([]);
  const [secondsLeft,setSecondsLeft]=useState(10);

  useEffect(()=>{
    if(secondsLeft>0 && availableNums.length>0){
      console.log('hey')
    const timerId=setTimeout(()=>{
      setSecondsLeft(secondsLeft-1)
    },1000)
    return ()=>clearTimeout(timerId);
    }
    })

    const setGameState=(newCandidateNums)=>{
    if(sum(newCandidateNums)!==starCount){
      setCandidateNums(newCandidateNums)
    }
    else{
      const newAvailableNums=availableNums.filter(
        num=>!newCandidateNums.includes(num)
      )
      setStarCount(randomSum(newAvailableNums,9));
      setCandidateNums([]);      
      setAvailableNums(newAvailableNums);
    }
  };
  return { starCount, availableNums, candidateNums, secondsLeft, setGameState };
};

const Game=(props)=>{
  const {
    starCount,
    availableNums,
    candidateNums,
    secondsLeft,
    setGameState
  }=useGameState();
  
  // const [starCount,setStarCount]=useState(random(1,9));
  // const [availableNums,setAvailableNums]=useState(range(1,9))
  // const [candidateNums,setCandidateNums]=useState([]);
  // const [secondsLeft,setSecondsLeft]=useState(10);

  // useEffect(()=>{
  //   if(secondsLeft>0 && availableNums.length>0){
  //     console.log('hey')
  //   const timerId=setTimeout(()=>{
  //     setSecondsLeft(secondsLeft-1)
  //   },1000)
  //   return ()=>clearTimeout(timerId);
  //   }
  //   })
  const candidatesAreWrong=sum(candidateNums)>starCount;
  //const gameIsDone=availableNums.length===0;
  
  const gameStatus=
  availableNums.length==0
  ?
  'won'
  :
  secondsLeft==0 ?
  'lost'
  :
  'active'
  
  const numberStatus=(number)=>{
    if(!availableNums.includes(number)){
      return 'used'
    }
    if(candidateNums.includes(number)){
      return candidatesAreWrong?'wrong':'candidate'
    }
    return 'available'
  }
  const onNumberClick=(number,currentStatus)=>{
    if(currentStatus==='used' || gameStatus!=='active'){
      return
    }
    const newCandidateNums=
      currentStatus==='available'
      ?
      candidateNums.concat(number)
      :
      candidateNums.filter(cn=>cn!==number)
      setGameState(newCandidateNums);
    // if(sum(newCandidateNums)!==starCount){
    //   setCandidateNums(newCandidateNums)
    // }
    // else{
    //   const newAvailableNums=availableNums.filter(
    //     num=>!newCandidateNums.includes(num)
    //   )
    //   setStarCount(randomSum(newAvailableNums,9));
    //   setCandidateNums([]);      
    //   setAvailableNums(newAvailableNums);
    // }
    
  }
  // const reset=()=>{
    
  //   setCandidateNums([])
  //   setAvailableNums(range(1,9))
  //   setStarCount(random(1,9))
  //   setSecondsLeft(10)
  // }
  return(
    <div className={styles.game}>
      <div className={styles.help}>
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className={styles.body}>
        <div className={styles.left}>
          {
            gameStatus !== 'active'
            ?
            <PlayAgain resetGame={props.startNewGame} gameStatus={gameStatus}/>
           :
           <StarDisplay count={starCount}/>
          }
        </div>
        <div className={styles.right}>
          {
            range(1,9).map(number=>
              <PlayNumber key={number} number={number}
              status={numberStatus(number)}
              onClick={onNumberClick}
              />
            )
          }
        </div>
      </div>
      <div className={styles.timer}>
             Time Remaining:{secondsLeft}
          </div>
    </div>
  )
}

Game.propTypes={
  startNewGame:PropTypes.func.isRequired
}

export default Game;

// const StarMatch=()=>{
//     const [starCount,setStarCount]=useState(random(1,9));
//     const [availableNums,setAvailableNums]=useState(range(1,9));
//     const [candidateNums,setCandidateNums]=useState([]);
//     //const [status,setStatus]=useState('available');
//     const candidatesAreWrong=()=>{return sum(candidateNums)>starCount};
//     const gameIsDone=()=>availableNums.length===0;
//     const numberStatus=(number)=>{
//         console.log(!availableNums.includes(number));
//         if(!availableNums.includes(number)){
//             //setStatus('used');
//             return 'used';
//         }
//         if(candidateNums.includes(number)){
//             return candidatesAreWrong? 'wrong':'candidate';
//             //candidatesAreWrong? setStatus('wrong'):setStatus('candidate')
//         }
//         else{
//             return 'available';
//             //setStatus('available');
//         }
//     }
//     const onNumberClick=(number,currentStatus)=>{
//         //based on current status, what should be the newstatus
//       if(currentStatus==='used'){
//         console.log("Hey")  ;
//         return
//       }
//       const newCandidateNums=currentStatus==='available'?candidateNums.concat(number):candidateNums.filter(cn=>cn!==number);
      
//       //candidateNums.concat(number);
//       if(sum(newCandidateNums)!==starCount){
//             setCandidateNums(newCandidateNums);
//       }
//       else{
//         const newAvailableNums=availableNums.filter(n=>!newCandidateNums.includes(n));
        
//       setStarCount(randomSum(newAvailableNums,9))
//       setAvailableNums(newAvailableNums);
//       setCandidateNums([]);

//       }
//     console.log("Heerree" ,number,"and" ,currentStatus);

//     }
//     const reset=()=>{
//         console.log("oooooooooo")
//         setAvailableNums(range(1,9));
//         setStarCount(random(1,9));
//         setCandidateNums([]);
//     }
    
//     return (
//       <div className={styles.game}>
//         <div className={styles.help}>
//           Pick 1 or more numbers that sum to the number of stars
//         </div>
//         <div className={styles.body}>
//           <div className={styles.left}>
//                       {
//                           gameIsDone
//                           ?
//                           <PlayAgain resetGame={reset}/>
//                           :
//                           <StarDisplay count={starCount}/>
//                       }
//           </div>
//           <div className={styles.right}>
//               {range(1, 9).map(number =>
//                 <PlayNumber 
//                   key={number} 
//                 number={number}
//                 status={numberStatus(number)}
//                 onNumberClick={onNumberClick}
//               />
//             )}
//           </div>
//         </div>
//         <div className={styles.timer}>
//             Time Remaining:10
//          </div>
//       </div>
//     );
    
   
// }