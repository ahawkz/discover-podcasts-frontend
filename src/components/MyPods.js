import React from 'react';

class MyPods extends React.Component {
  constructor(props){
    super(props)
    this.state = {title: ''}
  }
  componentDidMount(){
    fetch('https://discover-podcasts.herokuapp.com/podcasts')
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
        <h1>myPods</h1>
        <h2>this is coming from my backend {this.state.message.message} </h2>
      </div>
    )
  }
}

export default MyPods;
