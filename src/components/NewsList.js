import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';

function NewsList() {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    // Fetch a list of news articles from your API using Axios
    axios.get('YOUR_API_ENDPOINT/news')
      .then((response) => {
        setNewsList(response.data);
      })
      .catch((error) => {
        console.error('Error fetching news articles:', error);
      });
  }, []);

  return (
    <div className="news-list">
      {newsList.map((newsItem) => (
        <NewsItem key={newsItem.id} newsData={newsItem} />
      ))}
    </div>
  );
}

export default NewsList;
