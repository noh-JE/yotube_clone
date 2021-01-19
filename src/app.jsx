import React, {useState, useEffect} from 'react';
import styles from './app.module.css';
import VideoList from "./components/video_list/videoList";
import HeaderSearch from "./components/header/search";

function App({youtube}) {
  const [videos, setVideos] = useState([]);
  const search = (query) => {
      youtube
          .search(query)
          .then(videos => setVideos(videos));
  };

  useEffect(() => {
      youtube
          .mostPopular()
          .then(videos => setVideos(videos));
  }, []);

  return (
      <div className={styles.app}>
        <HeaderSearch onSearch={search} />
        <VideoList videos={videos} />
      </div>
  );
}

export default App;
