import React from 'react';

const Scroll = (props: any) => {
    return( 
      <div style={{overflowY: 'scroll', width: '100%',margin: '3px',height:'40vh', borderRadius: '10px', background: 'rgba(0,0,0,.25)', position: 'absolute', zIndex: 1}}>
        {props.children}
      </div>	
    );
  }
  
  export default Scroll;