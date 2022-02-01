import React, { Component } from 'react';

export class NewsItem extends Component {
  render() {
    let {title, description} = this.props;
    return <div>
      <div className="card" style={{width: '18rem'}}>
        <img src="https://www.the-sun.com/wp-content/uploads/sites/6/2022/01/BB-CHESLIE-KRYST-LIVE-BLOG.jpg?strip=all&quality=100&w=1200&h=800&crop=1" className="card-img-top" alt="/"/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="/" className="btn btn-primary">Go somewhere</a>
          </div>
      </div>
    </div>;
  }
}

export default NewsItem;
