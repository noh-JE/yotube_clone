import React from 'react';
import styles from './videoItem.module.css';

const VideoItem = ({ video: {snippet} }) => {
    return (
        <li className={styles.contain}>
            <div className={styles.video}>
                <img className={styles.thumbnail} src={snippet.thumbnails.medium.url} alt={snippet.title} />
                <div className={styles.metadata}>
                    <p className={styles.title}>{snippet.title}</p>
                    <p className={styles.channel}>{snippet.channelTitle}</p>
                </div>
            </div>
        </li>
    );
};

export default VideoItem;
