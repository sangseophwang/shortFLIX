import React from 'react'
import './scss/SelectButton.scss';
import arrow_right from '../Common/Image/arrow_right.png'

type SelectButtonProps = {
    children: string;
    onClick?: any;
    id: any;
    detail: string;
}

export default function SelectButton({ children, onClick, id, detail }: SelectButtonProps) {
    return (
        <button className='selectButton' id={id} onClick={onClick}>
            <div>
                <div className='buttonTitle'>
                    {children}
                </div>
                <div className='buttonDesc'>
                    <div>
                        {detail}
                    </div>
                    <img src={arrow_right} alt='arrow'/>                    
                </div>
            </div>
        </button>
    )
}
