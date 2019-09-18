import React from 'react';

class Header extends React.Component {
  render(){
    return(
      <header className="header">
        <a href=""><h4>myNews</h4></a>
        <div className="social-icons">
          <a href=""><h6>icon</h6></a>
          <a href=""><h6>icon</h6></a>
          <a href=""><h6>icon</h6></a>
        </div>
      </header>
    )
  }
}

export default Header;
