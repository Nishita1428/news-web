import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function NewsDetail() {
  const { id } = useParams();
  const [newsItem, setNewsItem] = useState(null);

  useEffect(() => {
    // Fetch the specific news article by ID from your API using Axios
    axios.get(`YOUR_API_ENDPOINT/news/${id}`)
      .then((response) => {
        setNewsItem(response.data);
      })
      .catch((error) => {
        console.error('Error fetching news article:', error);
      });
  }, [id]);

  if (!newsItem) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{newsItem.title}</h2>
      <p>{newsItem.date}</p>
      <img src={newsItem.imageUrl} alt={newsItem.title} />
      <p>{newsItem.content}</p>
    </div>
  );
}

export default NewsDetail;
