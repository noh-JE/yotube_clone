import React, {useState, useEffect} from 'react';
import styles from './app.module.css';
import VideoList from "./components/video_list/videoList";
import HeaderSearch from "./components/header/search";

function App() {
  const [videos, setVideos] = useState([]);
  const search = (query) => {
      const requestOptions = {
          method: 'GET',
          redirect: 'follow'
      };

      fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyCLvAdOl2peSqHoa67XeAMLLNbSeH4KN8Y`, requestOptions)
          .then(response => response.json())
          .then(result => result.items.map(item => ({...item, id:item.id.videoId})))
          .then(items => setVideos(items))
          .catch(error => console.log('error', error));
  };

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCLvAdOl2peSqHoa67XeAMLLNbSeH4KN8Y", requestOptions)
        .then(response => response.json())
        .then(result => setVideos(result.items))
        .catch(error => console.log('error', error));
  }, []);

  return (
      <div className={styles.app}>
        <HeaderSearch onSearch={search} />
        <VideoList videos={videos} />
      </div>
  );
}

export default App;
