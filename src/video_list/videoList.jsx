import React from 'react';
import VideoItem from "../video_item/videoItem";

const VideoList = (props) => {
    return (
        <ul>
            {props.videos.map(video => (
                <VideoItem key={video.id} video={video} />
            ))}
        </ul>
    );
};

export default VideoList;
