import React from 'react';

class NewsInfo extends React.Component {
  render() {
    return (
      <div>
        <h1>hello this is your news</h1>
        {this.props.news.map((item, key)  =>
          <div key={key}>
            <h4>
              <a href={item.web_url} target="_blank" rel="noopener noreferrer">
                {item.snippet}
              </a>
            </h4>
            <h5 >{item.byline.original}</h5>
          </div>
        )}
      </div>
    )
  }
}

export default NewsInfo
