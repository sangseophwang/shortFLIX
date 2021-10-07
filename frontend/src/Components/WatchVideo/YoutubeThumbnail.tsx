import './scss/YoutubeThumbnail.scss';
import React from 'react'


type YoutubeThumbnailProps = {
    image: string;
    time: any;
    url: string;
    onClick: any;
}

export default function YoutubeThumbnail( {image, url, time, onClick}: YoutubeThumbnailProps) {
    return (
        <div className='youtubeThumbnail' onClick={onClick}>
            <img src={image} />
            <div className='timeBox'>{time}</div>
        </div>
    )
}
