import React from 'react';

class Test extends React.Component {
  constructor(props){
    super(props)
    this.state = {message: ''}
  }
  componentDidMount(){
    fetch('https://discover-podcasts.herokuapp.com/test')
    .then(data => {
      return data.json()
    })
    .then(json => {
      console.log(json)
      this.setState({
        message: json
      })
    })
    .catch(error => {
      console.log(error)
    })
  }
  render(){
    return(
      <div>
        <h6>frontend test component</h6>
        <h6>this is coming from my backend {this.state.message.message} </h6>
      </div>
    )
  }
}

export default Test;
