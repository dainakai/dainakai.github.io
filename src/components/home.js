// components/home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import { newsData } from '../data/newsData';
import { Grid } from '@mui/material';
import './styles/NewsList.css';

export const Home = () => {
  let recentNews = newsData.slice(0, 5);
  return (
    <div className="home">
      <Typography variant="h4" gutterBottom>Welcome!</Typography>
      <Typography variant="body1" paragraph>
        Hi. My name is Dai Nakai. I am a graduate student at Kyoto Institute of Technology.
      </Typography>
      <Typography variant="body1" paragraph>
        中井 大のウェブページへようこそ。京都工芸繊維大学大学院 機械設計学専攻 計測システム工学研究室に所属しています。
      </Typography>
      <div className='news_feed'>
        <Typography variant="h5" gutterBottom>News!</Typography>
        {/* {recentNews.map((item, index) => (
          <NewsItemBox key={index} newsItem={item} />
        ))} */}
        <div className="news-list-contents">
          {recentNews.map(item => (
            <Link key={item.id} to={`/news/${item.id}`} className="news-list-item">
              <Typography variant="h6">{item.title}</Typography>
              <Typography variant="subtitle2" color="textSecondary">
                {item.date}
              </Typography>
            </Link>
          ))}
        </div>
        <div className="view_all" style={{ textAlign: 'center' }}>
          <Button component={Link} to="/news" variant="text">
            View all
          </Button>
        </div>
      </div>
    </div>

  );
}