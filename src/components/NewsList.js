// components/NewsList.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography } from '@mui/material';
import { newsData } from '../data/newsData';
import './styles/NewsList.css';

export const NewsList = () => {
  return (
    <div className="news-list-container">
      <Typography variant="h4" component="h2" gutterBottom>
        News List
      </Typography>
      <Grid container spacing={3} className="news-list-contents">
        {newsData.map(item => (
          <Grid item xs={12} key={item.id} component={Link} to={`/news/${item.id}`} className="news-list-item" sx={{m:1}}>
            <Typography variant="h6">{item.title}</Typography>
            <Typography variant="subtitle2" color="textSecondary">
              {item.date}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};