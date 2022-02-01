import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
  render() {
    return <div className='container my-3'>
      <h2>India News - Top Headlines</h2>

      <div className='row'>
      <div className='col-md-4'>
      <NewsItem title="Title" description="My News"/>
      </div>
      <div className='col-md-4'>
      <NewsItem title="Title" description="My News"/>
      </div>
      <div className='col-md-4'>
      <NewsItem title="Title" description="My News"/>
      </div>
      <div/>
    </div>
    </div>;
  }
}

export default News;
