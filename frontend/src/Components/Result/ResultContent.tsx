import './scss/ResultContent.scss';
import React from 'react'
import InfoText from '../Common/InfoText';
import MovieItem from './MovieItem';
import Button from '../Common/Button';
import { useHistory } from 'react-router';

// Dummy Data
const movies = [
    {img: 'https://images.justwatch.com/poster/251207693/s592', title: '오징어게임'},
    {img: 'https://images.justwatch.com/poster/46536252/s592', title: '홈랜드'},
    {img: 'https://images.justwatch.com/poster/249479684/s592', title: '갯마을 차차차'},
    {img: 'https://images.justwatch.com/poster/251527841/s592', title: '어둠 속의 미사'},
    {img: 'https://images.justwatch.com/poster/247789689/s592', title: '더 체스트넛 맨'},
    {img: 'https://images.justwatch.com/poster/249944832/s592', title: '귀멸의 칼날 극장판'},
    {img: 'https://images.justwatch.com/poster/16883722/s592', title: '사인필드'},
    {img: 'https://images.justwatch.com/poster/245382659/s592', title: '포즈'},
]

export default function ResultContent() {
    const history = useHistory()
    const handleRedo = () => {
        history.push('/test')
    }

    const handleRecommendation = () => {
        alert('새로운 결과 요청중...')
        // TODO: API 새로 요청. 단, 겹치지 않게.
    }
    return (
        <div id='ResultContent'>
            <div className='resultDesc'>
                <InfoText>XXX님을 위한 컨텐츠 추천</InfoText>
                <p>로맨스, 스릴러, 액션 장르를 좋아하는 XXX님께는 이런 영화를 추천드려요! <br />클릭해서 리뷰를 확인해보세요.</p>
            </div>
            <div className='movieList'>
                {movies.map((item)=><MovieItem image={item.img} key={item.title} title={item.title} onClick={()=>alert('상세 페이지로 이동중...')} />)}
            </div>
            <div className='buttonList'>
                <Button styles='btn-sm' onClick={handleRedo}>설문 다시하기</Button>
                <Button styles='btn-sm btn-red' onClick={handleRecommendation}>다른 작품 추천 받기</Button>
            </div>
        </div>
    )
}

