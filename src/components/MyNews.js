import React from 'react';

class MyNews extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      headline: '',
      byline: '',
      url: ''
    }
  }
  componentDidMount(){
    fetch('https://discover-podcasts.herokuapp.com/news')
    .then(data => {
      console.log(data);
      return data.json()
    })
    .then(json => {
      console.log(json)
      this.setState({
        news: json
      })
    })
    .catch(error => {
      console.log(error)
    })
  }
  render(){
    return(
      <div>
        <h1>myNews!!!!</h1>
        { this.state.news ? this.state.news.map((item, key) =>
          <div key={key}>
            <h4>{item.headline}</h4>
          </div>
        ) : null}
      </div>
    )
  }
}

export default MyNews;
