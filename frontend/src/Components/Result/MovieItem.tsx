import React from 'react'
import './scss/MovieItem.scss'


type MovieITemProps = {
    image?: string;
    title: string;
    onClick: any;
}

export default function MovieItem( { image, title, onClick }:MovieITemProps) {
    return (
        <div className='movieItem' onClick={onClick}>
            <img src={image} />
            <div className='movieTitle'>
                {title}
            </div>
        </div>
    )
}
