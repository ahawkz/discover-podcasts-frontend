import React from 'react';
import NewsInfo from  './NewsInfo.js'

class Search extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      baseURL: 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=',
      query:'',
      apiKey: '&api-key=wIQZ0P4jaNYlJvQG3atMu5bVXOmJtN0Y',
      searchURL: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  // ==============
  // HANDLERS
  // ==============
  handleChange(event){
    this.setState({[event.target.id]: event.target.value})
  }
  handleSubmit (event) {
    event.preventDefault()
    this.setState({
      searchURL: this.state.baseURL + this.state.query + this.state.apiKey
    }, () => {
      fetch(this.state.searchURL)
        .then(response => response.json())
        .then(json =>
          this.setState(
          {
            news: json.response.docs,
            query: ''
          }
      ), err => console.error(err)
    )
    })
  }
  // ==============
  // RENDER
  // ==============
  render(){
    return(
      <React.Fragment>
        <div className="search-box">
          <h1>discoverNews</h1>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor='query'></label>
            <input
              id='query'
              type='text'
              value={this.state.query}
              onChange={this.handleChange}
            />
            <input
              type="submit"
              value="Find Info"
            />
          </form>
          { this.state.news ? <NewsInfo  news={this.state.news}/> : null
          }
        </div>
      </React.Fragment>
    )
  }
}

export default Search;
