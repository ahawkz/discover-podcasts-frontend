import React from 'react';

class NewsInfo extends React.Component {
  render() {
    return (
      <div className="news-section">
        {this.props.news.map((item, key)  =>
          <div key={key} className="news-card">
            <h4>
              <a href={item.web_url} target="_blank" rel="noopener noreferrer">
                {item.headline.main}
              </a>
            </h4>
            <h5>{item.byline.original}</h5>
            <button>Save</button>
          </div>
        )}
      </div>
    )
  }
}

export default NewsInfo
