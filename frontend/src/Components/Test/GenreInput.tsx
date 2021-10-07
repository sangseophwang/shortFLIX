import React from 'react';
import './scss/GenreInput.scss';

type GenreButtonProps = {
    children: string;
    desc: string;
    id: any;
    isChecked: boolean;
}

export default function GenreInput({children, desc, id, isChecked}: GenreButtonProps) {
    return (
        <>        
            <input type='checkbox' defaultChecked={isChecked} className='genreInput' id={id}/>
            <label htmlFor={id} className='genreLabel'>
                <div>
                    <div className='genreTitle'>
                        {children}
                    </div>
                    <div className='genreDesc'>
                        {desc}
                    </div>
                </div>
            </label>
        </>
    )
}
