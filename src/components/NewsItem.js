import React from 'react';
import { Link } from 'react-router-dom';

function NewsItem({ newsData }) {
  return (
    <div className="news-item">
      <Link to={`/news/${newsData.id}`}>
        <img src={newsData.imageUrl} alt={newsData.title} />
        <h2>{newsData.title}</h2>
        <p>{newsData.summary}</p>
        <p>{newsData.date}</p>
      </Link>
    </div>
  );
}

export default NewsItem;
