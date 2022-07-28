import React from 'react';

const Scroll = (props: any) => {
    return( 
      <div style={{overflowY: 'scroll', width: '100%',height:'40vh', borderRadius: '10px', background: 'rgba(0,0,0,.5)', position: 'absolute', zIndex: 1}}>
        {props.children}
      </div>	
    );
  }
  
  export default Scroll;