import React from "react";
import "./styles.css";
import NewsFeed from "./components/NewsFeed";
import sampleNews from "./sampleNews.json";

export default function App() {
  return (
    <div className="App">
      <h1>My News Feed</h1>
      <NewsFeed newsData={sampleNews.results} />
    </div>
  );
}
