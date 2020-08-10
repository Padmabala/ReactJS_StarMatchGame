import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../stylesheet.css';
import { range } from './CommonComponents/Utils';

const StarsDisplay=props=>(
    <>
    {
        range(1,props.count).map(starId=>
            <div key={starId} className={styles.star}/>
        )
    }
    </>
)
StarsDisplay.propTypes={
    count:PropTypes.number.isRequired
}
export default StarsDisplay;
// const StarsDisplay=props=>(
//     <>
//     {
//         range(1,props.count).map(starId=>
//             <div key={starId} className={styles.star}/>
//         )
//     }
//     </>
// )
// StarsDisplay.propTypes={
//     count:PropTypes.number.isRequired
//   }
// export default StarsDisplay;