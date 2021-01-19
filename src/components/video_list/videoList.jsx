import React from 'react';
import VideoItem from "../video_item/videoItem";
import styles from "./video_list.module.css";

const VideoList = ({videos, onVideoClick, disply}) => {
    return (
        <ul className={styles.videos}>
            {videos.map(video => (
                <VideoItem
                    key={video.id}
                    video={video}
                    onVideoClick={onVideoClick}
                    display={disply}
                />
            ))}
        </ul>
    );
};

export default VideoList;
