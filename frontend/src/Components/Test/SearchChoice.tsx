import React, { useState } from 'react'
import InfoText from '../Common/InfoText'
import './scss/SearchChoice.scss'
import search_icon from '../../Components/Common/Image/search_icon.png'
import SearchSelected from './SearchSelected'
import Button from '../Common/Button'
import Loading from './Loading'
import { useHistory } from 'react-router'

export default function SearchChoice() {
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory()
    const handleSubmit = () => {
        setIsLoading(true)
        setTimeout(()=>history.push('/result'), 2000)
    }
    return (
        <>
            {!isLoading ? 
            <div id='SearchChoice'>
                <InfoText>재미있게 본 컨텐츠 3개를 선택해주세요.</InfoText>
                <div>
                    <div className='searchBox'>
                        <input type='text' placeholder='찾고 싶은 컨텐츠의 제목을 입력해주세요.' />
                        <img src={search_icon} alt='돋보기 이미지' />
                    </div>
                    <div className='selectedItems'>
                        {/* 샘플 */}
                        <SearchSelected desc='Squid Game'>오징어 게임</SearchSelected>
                    </div>
                    <Button styles='btn-md btn-red' onClick={handleSubmit}>결과 보기</Button>
                </div>
            </div> : <Loading /> }
        </>
    )
}
