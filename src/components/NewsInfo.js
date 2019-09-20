import React from 'react';
const dateFormat = require('dateformat');


class NewsInfo extends React.Component {
  handleCreate = (createData) => {
    console.log(createData)
    fetch('https://discover-podcasts.herokuapp.com/news', {
      body: JSON.stringify(createData),
      method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
      }
    })
      .then(createdNews => {
        console.log(createdNews);
        return createdNews.json()
      })
      .catch(err => console.log(err))
  }
  render() {
    return (
      <div className="news-section">
        {this.props.news.map((item, key)  =>
          <div key={key} className="news-card">
            <h4>
              <a className="headline" href={item.web_url} target="_blank" rel="noopener noreferrer">
                {item.headline.main}
              </a>
            </h4>
            <h5>{item.byline.original}</h5>
            <h5> {dateFormat(item.pub_date, "dddd, mmmm dS, yyyy")}</h5>
            <button
              onClick={() => {
                this.handleCreate(
                  {
                    headline: item.headline.main,
                    byline: item.byline.original ,
                    url: item.web_url
                  }
                )
              }}>
              Save
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default NewsInfo
