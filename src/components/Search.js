import React from 'react';

class Search extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      baseURL: 'https://listen-api.listennotes.com/api/v2/search?',
      query:'q=',
      podcastTitle: '',
      remainderURL: '&sort_by_date=0&type=podcast&offset=0&len_min=10&len_max=60&genre_ids=68%2C82&published_before=1390190241000&published_after=0&only_in=title%2Cdescription&language=English&safe_mode=1',
      searchURL: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event){
    this.setState({[event.target.id]: event.target.value})
  }
  handleSubmit (event) {
    event.preventDefault()
    this.setState({
      searchURL: this.state.baseURL + this.state.query + this.state.podcastTitle + this.state.remainderURL
    }, () => {
      fetch(this.state.searchURL, {
        headers: {
          'X-ListenAPI-Key': '92eeeea0eefc42ec8913d237dedca5da'
        }
      })
        .then(response => response.json())
        .then(json => this.setState(
          {
            podcast: json,
            podcastTitle: ''
          }
        ), err => console.log(err))
    })
  }
  render(){
    return(
      <React.Fragment>
        <h1>discoverPods</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='podcastTitle'>Search</label>
          <input
            id='podcastTitle'
            type='text'
            value={this.state.podcastTitle}
            onChange={this.handleChange}
          />
          <input
            type="submit"
            value="Find Podcast Info"
          />
        </form>
        {this.state.searchURL}
      </React.Fragment>
    )
  }
}

export default Search;
