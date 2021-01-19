import React, {useState, useEffect} from 'react';
import styles from './app.module.css';
import VideoList from "./components/video_list/videoList";
import VideoDetail from "./components/video_detail/video_detail";
import HeaderSearch from "./components/header/search";

function App({youtube}) {
    // react hooks
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

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
        <section className={styles.content}>
            {selectedVideo &&
                <div className={styles.detail}>
                    <VideoDetail video={selectedVideo} />
                </div>
            }
            <div className={styles.list}>
                <VideoList videos={videos} onVideoClick={selectVideo} disply={selectedVideo ? 'list' : 'grid'} />
            </div>
        </section>
      </div>
  );
}

export default App;
