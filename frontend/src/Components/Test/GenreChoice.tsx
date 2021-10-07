import './scss/GenreChoice.scss'
import React, { useState } from 'react'
import InfoText from '../Common/InfoText'
import SelectButton from './SelectButton'
import GenreInput from './GenreInput'
import Button from '../Common/Button'

type GenreChoiceProps = {
    isLike: boolean;
}


export default function GenreChoice({ isLike }: GenreChoiceProps) {
    const genres = [
        {id: 0, kor: '서부', eng: 'Western'}, 
        {id: 1, kor: '공포', eng: 'Horror'}, 
        {id: 2, kor: '로맨스', eng: 'Romance'},
        {id: 3, kor: '액션', eng: 'Action & Adventure'},
        {id: 4, kor: '스릴러', eng: 'Mystery & Thriller'},
        {id: 5, kor: '코미디', eng: 'Comedy'},
        {id: 6, kor: '범죄', eng: 'Crime'},
        {id: 7, kor: 'Made in Europe', eng: 'Made in Europe'},
        {id: 8, kor: '판타지', eng: 'Fantasy'},
        {id: 9, kor: '전쟁', eng: 'War & Military'},
        {id: 10, kor: '드라마', eng: 'Drama'},
        {id: 11, kor: '역사', eng: 'History'},
        {id: 12, kor: '공상과학', eng: 'Sci-Fi'},
        {id: 13, kor: '다큐멘터리', eng: 'Documentary'},
        {id: 14, kor: '음악', eng: 'Music & Musical'},
        {id: 15, kor: '리얼리티', eng: 'Reality'},
        {id: 16, kor: '가족', eng: 'Kids & Family'},
        {id: 17, kor: '스포츠', eng: 'Sport'},
        {id: 18, kor: '애니메이션', eng: 'Animation'},
    ]

    const handleNext = () => {
        if (isLike) window.location.replace('/test/dislike')
        else window.location.replace('/test/search')
    }
    
    return (
        <div id='GenreChoice'>
            <InfoText>{isLike ? '좋아' : '싫어'}하는 장르를 선택해주세요.</InfoText>
            <div className='genreBox'>
                {genres.map((item) => <GenreInput isChecked={false} key={`genre-${item.id}`} id={item.id} desc={item.eng}>{item.kor}</GenreInput>)}
            </div>
            {!isLike && <Button styles='btn-md' onClick={()=>window.location.replace('/test/like')}>이전</Button>}
            <Button styles='btn-md' onClick={handleNext}>다음</Button>
        </div>
    )
}
