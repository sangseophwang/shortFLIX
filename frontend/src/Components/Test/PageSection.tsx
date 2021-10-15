import React from 'react'
import InfoText from '../Common/InfoText'
import GenreInput from './GenreInput'
import './scss/PageSection.scss'

type PageSectionProps = {
    idname: string;
    dataset: any;
    main: string;
    sub: string;
    children: string;
    onChange: any;
    isMulti?: any;
}

export default function PageSection({ idname, dataset, main, sub, children, onChange, isMulti }:PageSectionProps) {
    return (
        <div id={idname}>
            <InfoText>{children}</InfoText>
                <div className='genreBox'>
                {dataset.map((item: any) => <GenreInput isChecked={false} isMulti={isMulti} key={`${idname}-${item['id']}`} id={item['id']} desc={item[`${sub}`]} onChange={onChange}>{item[`${main}`]}</GenreInput>)}
                </div>   
        </div>
    )
}
