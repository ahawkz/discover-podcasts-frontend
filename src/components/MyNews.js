import React from 'react';

class MyNews extends React.Component {
  // ==============
  // STATE
  // ==============
  constructor(props){
    super(props)
    this.state = {
      headline: '',
      byline: '',
      url: ''
    }
  }
  // ==============
  // HANDLERS
  // ==============
  handleDelete = (id) => {
    fetch(`https://discover-podcasts.herokuapp.com/news/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
      .then(data => {
        this.setState(prevState => {
          const news = prevState.news.filter( news => news._id !== id)
          console.log(id)
          console.log(news);
          return { news: news }
        })
      })
      .catch(err => console.log(err))
  }
  // ==============
  // LIFE CYCLES
  // ==============
  componentDidMount(){
    fetch('https://discover-podcasts.herokuapp.com/news')
    .then(data => {
      return data.json()
    })
    .then(json => {
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
      <div className="my-news">
        <h1>myNews</h1>
        { this.state.news ? this.state.news.map((item, key) =>
          <div key={key} className="myNews-card">
            <h4>{item.headline}</h4>
            <h5>{item.byline}</h5>
            <h6>Read More <a href={item.url} target="_blank" rel="noopener noreferrer">Here</a></h6>
            <div className="myNews-buttons">
              <button className="delete" onClick={() => {
                this.handleDelete(item._id)
                }}>
                X
              </button>
            </div>
          </div>
        ) : null}
      </div>
    )
  }
}

export default MyNews;
