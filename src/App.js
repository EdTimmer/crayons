import React, { useState } from 'react';
import './css/App.css';
import './css/crayons.css';
import './css/gmlogo.css';
import './css/arrows.css';

function App() {

  // $('.icon').click(function(){
  //   $(this)
  //     .toggleClass('arrow-up')
  //     .toggleClass('arrow-down');
  // })

  const [positionClass, setPositionClass] = useState('arrow-up icon');
  const [positionIsUp, SetPositionIsUp] = useState(true);

  
  // const positionUp = true
  // const up = 'arrow-up';
  // const down = 'arrow-down';
  const animateFunc = () => {
    if (positionIsUp) {
      SetPositionIsUp(false);
    }
    else {
      SetPositionIsUp(true);
    }
    positionIsUp ? setPositionClass('arrow-up icon') : setPositionClass('arrow-down icon');
  }
 
  return (
    <div className="App">
        
      <div className="crayons">

        <div className="container shadow">
          <div className="crayon-green"></div>
          <div className="text">GREEN</div>
        </div>

        <div className="container shadow">
          <div className="crayon-blue"></div>
          <div className="text">BLUE</div>
        </div> 

        <div className="container shadow">
          <div className="crayon-red"></div>
          <div className="text">RED</div>
        </div> 

        <div className="container shadow">
          <div className="crayon-yellow"></div>
          <div className="text">YELLOW</div>
        </div>

        <div className="container shadow">
          <div className="crayon-purple"></div>
          <div className="text">PURPLE</div>
        </div>

        <div className="container shadow">
          <div className="crayon-brown"></div>
          <div className="text">BROWN</div>
        </div>
      </div>
            
      <div className="logo-box">
        <div className="gm"></div>
      </div>
      
      <div className="arrows-box" onClick={animateFunc}>
        <div className={positionClass}></div>
        <div className={positionClass}></div>
      </div>
      
                  
    </div>
    
  );
}

export default App;
