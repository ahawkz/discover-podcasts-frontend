import React from 'react';

class NewsInfo extends React.Component {
  render() {
    return (
      <div>
        <h1>hello this is your news</h1>
        {this.props.news.map((item, key)  =>

          <a key={key} href={item.web_url} target="_blank" rel="noopener noreferrer">

          <h4 key={key}>{item.snippet}</h4>

          </a>

        )}
      </div>
    )
  }
}

export default NewsInfo
