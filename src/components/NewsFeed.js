import React from "react";
import NewsCard from "./NewsCard";

const NewsFeed = ({ newsData }) => {
  return (
    <div className="news-feed">
      {newsData.map((news, index) => (
        <NewsCard key={index} news={news} />
      ))}
    </div>
  );
};

export default NewsFeed;
