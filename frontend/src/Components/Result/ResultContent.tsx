import './scss/ResultContent.scss';
import React, { useEffect, useState } from 'react'
import InfoText from '../Common/InfoText';
import MovieItem from './MovieItem';
import Button from '../Common/Button';
import { useHistory, useLocation } from 'react-router';


export default function ResultContent() {
    const history = useHistory()
    const location : any = useLocation()
    const [data, setData] = useState([])

    const handleRedo = () => {
        history.push('/test')
    }
    useEffect(() => {
        if (location.state) {
            setData(location.state.slice(0,8))
        } else {
            fetch('http://kdt-vm-0202003.koreacentral.cloudapp.azure.com:5000/contents')
                .then(res => res.json())
                .then(res => res.data.slice(0,8))
                .then((res:any) => {
                    setData(res)
                    console.log('요청한 결과: ',res)
                })
        }
        
    }, [])

    const handleRecommendation = () => {
        alert('새로운 결과 요청중...')
        const lastDataId = data[7]['id']
        console.log(lastDataId)
        // TODO: api 한 번 더 요청하고 slicing 하기 
        // const prevIndex = data.findIndex(i => i['id']===lastDataId)
        // setData(받은데이터.slice(prevIndex+1, prevIndex+8))
    }
    return (
        <div id='ResultContent'>
            <div className='resultDesc'>
                <InfoText>XXX님을 위한 컨텐츠 제안</InfoText>
                <p>로맨스, 스릴러, 액션 장르를 좋아하는 XXX님께는 이런 영화를 추천드려요! <br />클릭해서 리뷰를 확인해보세요.</p>
            </div>
            <div className='movieList'>
                {data && data.map((item: any)=><MovieItem image={item.thumbnail} key={item.id} title={item.title} onClick={()=>history.push({
                    pathname: `/watchvideo/${item.id}`,
                    state: {
                        cur: item,
                        whole: data
                    }
                })} />)}
            </div>
            <div className='buttonList'>
                <Button styles='btn-sm' onClick={handleRedo}>설문 다시하기</Button>
                <Button styles='btn-sm btn-red' onClick={handleRecommendation}>다른 작품 추천 받기</Button>
            </div>
        </div>
    )
}

