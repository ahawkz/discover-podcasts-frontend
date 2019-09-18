import React from 'react';

class Header extends React.Component {
  render(){
    return(
      <header>
        <h4
          onClick={() => {
            this.props.handleView('home')}}
        >home</h4>
        <h4
          onClick={() => {
            this.props.handleView('myNews')}}
        >myNews</h4>
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
