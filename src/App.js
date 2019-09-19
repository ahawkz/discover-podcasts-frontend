import React from 'react';
// components
import Search from './components/Search.js';
import  Header from './components/Header.js';
import MyNews from './components/MyNews.js'
import Footer from './components/Footer.js'


// ==== COMPONENT CLASS ==== //

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      view: {
        page: 'home',
        pageTitle: 'discover'
      }
    }
  }
  handleView = (view) => {
    let pageTitle = ''
    switch (view) {
      case 'home':
        pageTitle = 'discoverNews'
        break
      case 'myNews':
        pageTitle = 'myNews'
        break
      default:
        break
    }
    this.setState({
      view: {
        page: view,
        pageTitle: pageTitle
      }
    })
  }
  render(){
    return (
      <div className="App">
        <div className="content-wrap">
          < Header handleView={this.handleView}/>
          { this.state.view.page === 'home' ? < Search
            view={this.state.view}
            handleView = {this.handleView}
            /> : < MyNews />}
          <Footer/>
        </div>
      </div>
    )
  }
}

export default App;
