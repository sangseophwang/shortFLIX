import React from 'react';
import './scss/InfoText.scss';

type InfoTextProps = {
    children: any
}

export default function InfoText( {children}: InfoTextProps ) {
    return (
        <div className='infoText'>
            {children}
        </div>
    )
}
