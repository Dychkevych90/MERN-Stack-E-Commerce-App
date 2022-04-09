import React from "react";
import Countdown from 'react-countdown';

const CountdownTimer = ( { time } ) => {
  /* props time should be in ms  */
  return (
    <Countdown date={ Date.now() + time } />
  )
};

export default CountdownTimer;