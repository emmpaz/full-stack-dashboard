import React from 'react';

const Scroll = (props: any) => {
    return( 
      <div style={{overflowY: 'scroll', width: '100%',height:'40vh', borderRadius: '10px', background: 'grey', position: 'absolute', zIndex: 1}}>
        {props.children}
      </div>	
    );
  }
  
  export default Scroll;