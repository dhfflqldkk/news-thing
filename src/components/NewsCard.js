import React from "react";

const NewsCard = ({ news }) => {
  return (
    <div className="news-card">
      <img
        src={news.image_url || "https://placehold.co/600x400?text=News+Story"}
        alt={news.title}
      />
      <h3>{news.title}</h3>
      <a href={news.link} target="_blank" rel="noopener noreferrer">
        Read More
      </a>
      <p>By: {news.creator ? news.creator.join(", ") : "Unknown"}</p>
      <p>{news.description}</p>
    </div>
  );
};

export default NewsCard;
