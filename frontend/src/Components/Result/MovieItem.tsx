import React from 'react'
import './scss/MovieItem.scss'
import {useHistory} from 'react-router'

type MovieITemProps = {
    image?: string;
    title: string;
    onClick: any;
}

export default function MovieItem( { image, title, onClick }:MovieITemProps) {
    const history = useHistory()
    return (
        <div className='movieItem' onClick={onClick}>
            <img src={image} />
            <div className='movieTitle'>
                {title}
            </div>
        </div>
    )
}
