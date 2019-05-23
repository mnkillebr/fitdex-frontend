import React from 'react'

const Timer = (props) => {
  let timeLeft = 30;
  const goTimer = setInterval(()=>{
    // DOM
    timeLeft -= 1;
    if(timeLeft <= 0){
      clearInterval(goTimer)
      // DOM
    }
  }, 1000)
  return (
    <div>
      <h2 class="simple-timer"></h2>
    </div>
  )
}

export default Timer;
