import React, { Component } from 'react';
import aholdLogo from '../assets/images/transparentAhold.png';
import '../css files/createAcc.css';

class Header extends Component {
  render() {
    return (
      <div className="background">
        <img src={aholdLogo} style={{top: '100%', float: 'left', width: '20%', height:'8vh'}}></img>
      </div>
    )
  }
}

export default Header;

// import * as React from 'react';
// import aholdLogo from '../assets/images/ahold-delhaize-logo-cropped.jpg';

// const Header = (props: any) => {
//     return( 
//       <div style={{width: '100%',height:'20vh', borderRadius: '10px', position: 'fixed'}}>
//         <img src={aholdLogo} style={{top: '100%', float: 'left', width: '15%', height:'10vh'}}></img>
//       </div>	
//     );
//   }
  
//   export default Header;
