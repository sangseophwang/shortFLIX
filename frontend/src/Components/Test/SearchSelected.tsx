import React from 'react';
import './scss/SearchSelected.scss'

type SearchSelectedProps = {
    children: string;
    desc: string;
    poster?: any;
}

export default function SearchSelected({children, desc, poster}:SearchSelectedProps) {
    return (
        <div className='searchItem'>
            <div className='thumbnail'>
                <img src='https://www.justwatch.com/images/backdrop/249686077/s1440/ojingeo-geim' alt={`${children} 포스터`}/>
            </div>
            <div className='searchDetail'>
                <div className='searchTitle'>
                    {children}
                </div>
                <div className='searchDesc'>
                   {desc}
                </div>
            </div>
        </div>
    )
}
