import React from 'react';
import axios from "axios";


class Search extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      baseURL: 'https://itunes.apple.com/search?',
      query:'term=',
      searchItem: '',
      entity: '&entity=podcast',
      searchURL: '',
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
      searchURL: this.state.baseURL + this.state.query + this.state.searchItem + this.state.entity
    }, () => {
      axios(this.state.searchURL)
        .then(response => response.data)
        .then((data) => {
          this.setState({
            podcast: data,
            searchItem: ''
          })
        })
    })
  }
  render(){
    return(
      <React.Fragment>
        <h1>discoverPods</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='searchItem'>Search</label>
          <input
            id='searchItem'
            type='text'
            value={this.state.searchItem}
            onChange={this.handleChange}
          />
          <input
            type="submit"
            value="Find Podcast Info"
          />
        </form>
        { (this.state.podcast) ? this.state.podcast.results[0].artistName : null }
      </React.Fragment>
    )
  }
}

export default Search;
