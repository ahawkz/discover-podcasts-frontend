import React from 'react';

class Test extends React.Component {
  constructor(props){
    super(props)
    this.state = {message: ''}
  }
  componentDidMount(){
    fetch('/api/test')
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
        <h1>hello world</h1>
        <h2> {this.state.message.message} </h2>
      </div>
    )
  }
}

export default Test;
