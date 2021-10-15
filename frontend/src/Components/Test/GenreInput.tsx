import React from 'react';
import './scss/GenreInput.scss';

type GenreButtonProps = {
    children: string;
    desc: string;
    id: any;
    isChecked: boolean;
    onChange?: any;
    isMulti: any;
}

export default function GenreInput({children, desc, id, isChecked, onChange, isMulti}: GenreButtonProps) { 
    return (
        <>        
            <input type='checkbox' defaultChecked={isChecked} className='genreInput' id={id} onChange={onChange}/>
            <label htmlFor={id} className={`genreLabel ${isMulti && 'multi'}`}>
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
