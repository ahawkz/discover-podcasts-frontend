import React from 'react';

class NewsInfo extends React.Component {
  render() {
    return (
      <div>
        <h1>hello this is your news</h1>
        {this.props.news.map((item, key)  =>
          <h4 key={key}>{item.snippet}</h4>
        )}
      </div>
    )
  }
}

export default NewsInfo
