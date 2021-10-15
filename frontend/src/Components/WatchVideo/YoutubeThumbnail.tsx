import './scss/YoutubeThumbnail.scss';
import React from 'react'


type YoutubeThumbnailProps = {
    url: string;
    onClick: any;
    time: any;
}

export default function YoutubeThumbnail( {url, onClick, time}: YoutubeThumbnailProps) {
    return (
        <div className='youtubeThumbnail' onClick={onClick}>
            <img src={`https://i.ytimg.com/vi/${url}/mqdefault.jpg`} />
            <div className='timeBox'>{time}</div>
        </div>
    )
}
