import React from 'react'
import './scss/TestChoice.scss'
import SelectButton from './SelectButton'
import InfoText from '../Common/InfoText'

type TestChoiceProps = {
    isRandom: boolean; // 와이어 프레임 상에서 Choice 페이지와 랜덤 추천 페이지 결정
}

export default function TestChoice({isRandom}: TestChoiceProps) {
    return (
        <div id='TestChoice'>
            {!isRandom ? (
                <>
                    <InfoText>어떤 기능이 필요하세요?</InfoText>
            <div className='choices'>
                <SelectButton id='1' detail='내 취향을 잘 알고 있다면 이 버튼을 눌러주세요.' onClick={()=>window.location.replace('/test/like')}>내 취향에 맞는 컨텐츠 찾기</SelectButton>
                <SelectButton id='2' detail='내 취향을 아직 모르겠다면 이 버튼을 눌러주세요.' onClick={()=>window.location.replace("/test/randchoice")}>아무거나 추천</SelectButton>
            </div>
                </>
            ):(
                <>
                    <InfoText>어떻게 추천해드릴까요?</InfoText>
            <div className='choices'>
                {/* TODO: 아래 링크들 다시 해야 함 */}
                <SelectButton id='3' detail='오늘은 새로운 게 당긴다면!' onClick={()=>window.location.replace('/result')}>완전 랜덤으로 추천</SelectButton>
                <SelectButton id='4' detail='내 취향을 찾아가고 싶다면?'>간단한 설문으로 추천</SelectButton>
            </div>
                </>
            )}
        </div>
    )
}
