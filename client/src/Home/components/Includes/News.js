import React, { Component } from 'react';
import CryptoNewsApi from 'crypto-news-api';
import {Link} from 'react-router-dom';

class News extends Component{
    state = {
        topNews:[],
        loading:true
    }

    componentDidMount(){
        const Api = new CryptoNewsApi('0e50ede992998a0f19d7715eedce78bc');
        Api.getLatestNews()
        .then((article) => {
            this.setState({loading:false})
            console.log(article)
            this.setState({topNews:article})
        })

    }


    render(){
        const {topNews} = this.state
        const topSixNews = topNews.slice(5,11);
        console.log(topNews[1])
        return(
            <section className="blog-section section-padding">
    <div className="container">
      <div className="row">
        <div className="col col-md-8 col-md-offset-2">
          <div className="section-title-s3">
            <h2>Recent News</h2>
            {/* <p>
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p> */}
          </div>
        </div>
      </div>
      <div className="row news-grids">
      {topSixNews?topSixNews.map(news => (
        <div className="col col-md-4 col-xs-6" style={{marginBottom:"10px"}}>
          <div className="grid">
            <div className="entry-media">
              <img src={news.originalImageUrl} height="100px" alt />
            </div>
            <div className="entry-body">
              <div className="entry-header">
                <span className="date">{news.publishedAt.slice(12,19)}</span>
                <h3>
                <a href = {news.url} target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}} >{news.title.slice(0, 40) + '...'}</a>
                </h3>
              </div>
              <div className="entry-details">
                <p>
                {news.description.slice(0, 60) + '...'}
                </p>
              </div>
              <div className="entry-meta">
                <a href = {news.url} target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}} className="read-more">
                  Read More
                </a>
                <a href="#" className="comments">
                  <i className="fa fa-comments" /> {news.source.name}
                </a>
              </div>
            </div>
          </div>
        </div>
      )
      ):<div className="preloader">
    <div className="inner">
      <span />
      <span />
      <span />
      <span />
      <span />
    </div>
  </div>}
        {/* <div className="col col-md-4 col-xs-6">
          <div className="grid">
            <div className="entry-media">
              <img src={topNews[1].originalImageUrl} alt />
            </div>
            <div className="entry-body">
              <div className="entry-header">
                <span className="date">16 Hours ago</span>
                <h3>
                  <a href="#">Cut corporate taxes to boost growth</a>
                </h3>
              </div>
              <div className="entry-details">
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
              <div className="entry-meta">
                <a href="#" className="read-more">
                  Read More
                </a>
                <a href="#" className="comments">
                  <i className="fa fa-comments" /> 10 Comments
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col col-md-4 col-xs-6">
          <div className="grid">
            <div className="entry-media">
              <img src="assets/images/blog/img-2.jpg" alt />
            </div>
            <div className="entry-body">
              <div className="entry-header">
                <span className="date">16 Hours ago</span>
                <h3>
                  <a href="#">European firms look to Canada to grow assets</a>
                </h3>
              </div>
              <div className="entry-details">
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
              <div className="entry-meta">
                <a href="#" className="read-more">
                  Read More
                </a>
                <a href="#" className="comments">
                  <i className="fa fa-comments" /> 10 Comments
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col col-md-4 col-xs-6">
          <div className="grid">
            <div className="entry-media">
              <img src="assets/images/blog/img-3.jpg" alt />
            </div>
            <div className="entry-body">
              <div className="entry-header">
                <span className="date">16 Hours ago</span>
                <h3>
                  <a href="#">British drinkers leave Molson Coors thirsty</a>
                </h3>
              </div>
              <div className="entry-details">
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
              <div className="entry-meta">
                <a href="#" className="read-more">
                  Read More
                </a>
                <a href="#" className="comments">
                  <i className="fa fa-comments" /> 10 Comments
                </a>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>{" "}
    {/* end container */}
  </section>
        )
    }
}

export default News;