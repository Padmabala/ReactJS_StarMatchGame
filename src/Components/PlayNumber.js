// import React from 'react';
// import PropTypes from 'prop-types';
// import styles from '../../stylesheet.css';
// const colors={
//   available:'lightGrey',
//   used:'lightgreen',
//   wrong:'lightcoral',
//   candidate:'deepskyblue'
// }
// const PlayNumber=(props)=>(
//   <button className={styles.number} style={{background:colors[props.status]}}
//   onClick={()=>console.log('hello')}>
//     {props.number}
//   </button>
// )
// PlayNumber.propTypes={
//   number:PropTypes.number.isRequired,
//   status:PropTypes.string.isRequired,
//  // onNumberClick:PropTypes.func.isRequired
// }
// export default PlayNumber;

import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../stylesheet.css';
const colors={
  available:'lightGrey',
  used:'lightgreen',
  wrong:'lightcoral',
  candidate:'deepskyblue'
}

const PlayNumber = props => (
	<button className={styles.number} style={{background:colors[props.status]}} 
  onClick={()=>props.onClick(props.number,props.status)}
  >
    {props.number}
  </button>
);

PlayNumber.propTypes={
  number:PropTypes.number.isRequired,
  status:PropTypes.string.isRequired,
  onClick:PropTypes.func.isRequired
}
export default PlayNumber;