import React from 'react';

class Header extends React.Component {
  render(){
    return(
      <header>
        <script src="https://kit.fontawesome.com/78abcb0c4d.js" crossorigin="anonymous"></script>
        <link href="https://fonts.googleapis.com/css?family=Merriweather&display=swap" rel="stylesheet"/>
        <div className="views">
          <h4
            className="header-nav"
            onClick={() => {
              this.props.handleView('home')}}
          >home</h4>
          <h4
            className="header-nav"
            onClick={() => {
              this.props.handleView('myNews')}}
          >myNews</h4>
        </div>
        <div className="date">
          <div>{new Date().toDateString()}</div>
        </div>
      </header>
    )
  }
}

export default Header;
