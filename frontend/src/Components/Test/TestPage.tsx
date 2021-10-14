import './scss/TestPage.scss'
import React, { useState, useEffect } from 'react'
import Button from '../Common/Button';
import PageSection from './PageSection';
import Loading from './Loading';
import { useHistory } from 'react-router';
import axios from 'axios';

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

const types = [
    {id: 'movie', section: '영화', desc:''},
    {id: 'drama', section: '드라마', desc:''},
    {id: 'documentary', section: '다큐멘터리', desc:''},
    {id: 'animation', section: '애니메이션', desc:''}

]

const years = [
    {id: '1900s', time: '2000년 이전', desc: ''},
    {id: '2000s', time: '2000년-2010년', desc: ''},
    {id: '2010s', time: '2010년-2020년', desc: ''},
    {id: '2020s', time: '2020년 이후', desc: ''}
]

const keywordObjList = [
    {
        "id": 19,
        "keyword": "집행",
        "desc": ""
    },
    {
        "id": 20,
        "keyword": "시리즈",
        "desc": ""
    },
    {
        "id": 21,
        "keyword": "게임",
        "desc": ""
    },
    {
        "id": 22,
        "keyword": "인류",
        "desc": ""
    },
    {
        "id": 23,
        "keyword": "퀸",
        "desc": ""
    },
    {
        "id": 24,
        "keyword": "비밀",
        "desc": ""
    },
    {
        "id": 25,
        "keyword": "역사",
        "desc": ""
    },
    {
        "id": 26,
        "keyword": "형제",
        "desc": ""
    },
    {
        "id": 27,
        "keyword": "힙합",
        "desc": ""
    },
    {
        "id": 28,
        "keyword": "무대",
        "desc": ""
    },
    {
        "id": 29,
        "keyword": "호기심",
        "desc": ""
    },
    {
        "id": 30,
        "keyword": "야구",
        "desc": ""
    },
    {
        "id": 31,
        "keyword": "거인",
        "desc": ""
    },
    {
        "id": 32,
        "keyword": "좀비",
        "desc": ""
    },
    {
        "id": 33,
        "keyword": "아들",
        "desc": ""
    },
    {
        "id": 34,
        "keyword": "영화",
        "desc": ""
    },
    {
        "id": 35,
        "keyword": "미국",
        "desc": ""
    },
    {
        "id": 36,
        "keyword": "범죄",
        "desc": ""
    },
    {
        "id": 37,
        "keyword": "진실",
        "desc": ""
    },
    {
        "id": 38,
        "keyword": "조직",
        "desc": ""
    },
    {
        "id": 39,
        "keyword": "변호사",
        "desc": ""
    },
    {
        "id": 40,
        "keyword": "세계대전",
        "desc": ""
    },
    {
        "id": 41,
        "keyword": "아버지",
        "desc": ""
    },
    {
        "id": 42,
        "keyword": "마약",
        "desc": ""
    },
    {
        "id": 43,
        "keyword": "살인",
        "desc": ""
    },
    {
        "id": 44,
        "keyword": "요괴",
        "desc": ""
    },
    {
        "id": 45,
        "keyword": "조선",
        "desc": ""
    },
    {
        "id": 46,
        "keyword": "드래곤",
        "desc": ""
    },
    {
        "id": 47,
        "keyword": "발견",
        "desc": ""
    },
    {
        "id": 48,
        "keyword": "전쟁",
        "desc": ""
    },
    {
        "id": 49,
        "keyword": "마음",
        "desc": ""
    },
    {
        "id": 50,
        "keyword": "작전",
        "desc": ""
    },
    {
        "id": 51,
        "keyword": "소녀",
        "desc": ""
    },
    {
        "id": 52,
        "keyword": "모험",
        "desc": ""
    },
    {
        "id": 53,
        "keyword": "래그",
        "desc": ""
    },
    {
        "id": 54,
        "keyword": "초원",
        "desc": ""
    },
    {
        "id": 55,
        "keyword": "소년",
        "desc": ""
    },
    {
        "id": 56,
        "keyword": "중학교",
        "desc": ""
    },
    {
        "id": 57,
        "keyword": "왕",
        "desc": ""
    },
    {
        "id": 58,
        "keyword": "친구",
        "desc": ""
    },
    {
        "id": 59,
        "keyword": "형님",
        "desc": ""
    },
    {
        "id": 60,
        "keyword": "전문가",
        "desc": ""
    },
    {
        "id": 61,
        "keyword": "사람",
        "desc": ""
    },
    {
        "id": 62,
        "keyword": "공연",
        "desc": ""
    },
    {
        "id": 63,
        "keyword": "군인",
        "desc": ""
    },
    {
        "id": 64,
        "keyword": "결혼",
        "desc": ""
    },
    {
        "id": 65,
        "keyword": "딸",
        "desc": ""
    },
    {
        "id": 66,
        "keyword": "로맨스",
        "desc": ""
    },
    {
        "id": 67,
        "keyword": "공개",
        "desc": ""
    },
    {
        "id": 68,
        "keyword": "음악",
        "desc": ""
    },
    {
        "id": 69,
        "keyword": "드라마",
        "desc": ""
    },
    {
        "id": 70,
        "keyword": "부대",
        "desc": ""
    },
    {
        "id": 71,
        "keyword": "시간",
        "desc": ""
    },
    {
        "id": 72,
        "keyword": "총잡이",
        "desc": ""
    },
    {
        "id": 73,
        "keyword": "영국",
        "desc": ""
    },
    {
        "id": 74,
        "keyword": "스타",
        "desc": ""
    },
    {
        "id": 75,
        "keyword": "가족",
        "desc": ""
    },
    {
        "id": 76,
        "keyword": "레슬링",
        "desc": ""
    },
    {
        "id": 77,
        "keyword": "경찰",
        "desc": ""
    },
    {
        "id": 78,
        "keyword": "답",
        "desc": ""
    },
    {
        "id": 79,
        "keyword": "노래",
        "desc": ""
    },
    {
        "id": 80,
        "keyword": "운명",
        "desc": ""
    },
    {
        "id": 81,
        "keyword": "트리스탄",
        "desc": ""
    },
    {
        "id": 82,
        "keyword": "아이",
        "desc": ""
    },
    {
        "id": 83,
        "keyword": "힘",
        "desc": ""
    },
    {
        "id": 84,
        "keyword": "인생",
        "desc": ""
    },
    {
        "id": 85,
        "keyword": "존재",
        "desc": ""
    },
    {
        "id": 86,
        "keyword": "선수",
        "desc": ""
    },
    {
        "id": 87,
        "keyword": "거리",
        "desc": ""
    },
    {
        "id": 88,
        "keyword": "경쟁",
        "desc": ""
    },
    {
        "id": 89,
        "keyword": "복수",
        "desc": ""
    },
    {
        "id": 90,
        "keyword": "음식",
        "desc": ""
    },
    {
        "id": 91,
        "keyword": "공포",
        "desc": ""
    },
    {
        "id": 92,
        "keyword": "다큐멘터리",
        "desc": ""
    },
    {
        "id": 93,
        "keyword": "코미디",
        "desc": ""
    },
    {
        "id": 94,
        "keyword": "죽음",
        "desc": ""
    },
    {
        "id": 95,
        "keyword": "덴마크",
        "desc": ""
    },
    {
        "id": 96,
        "keyword": "사랑",
        "desc": ""
    },
    {
        "id": 97,
        "keyword": "형사",
        "desc": ""
    },
    {
        "id": 98,
        "keyword": "마지막",
        "desc": ""
    },
    {
        "id": 99,
        "keyword": "보안관",
        "desc": ""
    },
    {
        "id": 100,
        "keyword": "미래",
        "desc": ""
    },
    {
        "id": 101,
        "keyword": "테러",
        "desc": ""
    },
    {
        "id": 102,
        "keyword": "임무",
        "desc": ""
    },
    {
        "id": 103,
        "keyword": "동료",
        "desc": ""
    },
    {
        "id": 104,
        "keyword": "애니메이션",
        "desc": ""
    }
]


export default function TestPage() {
    const pageid = ['contentType', 'year', 'genre', 'keyword']
    const [result, setResult] = useState({}) // 선택한 모든 것 담기
    const [temp, setTemp] = useState(new Set()) // 한 페이지에서 선택한 것 받고 초기화
    const [isChecked, setIsChecked] = useState(false);
    const [page, setPage] = useState('contentType') // 현재 보여질 페이지
    const history = useHistory();



    const checkHandler = ({target} : any) => {
        setIsChecked(!isChecked);
        handleCheck(target.id, target.checked)
    } 

    const handleCheck = (id: any, isChecked: any,) => {
        const temps = new Set(temp)
        if (isChecked) {
            temps.add(id);
            setTemp(temps)
        } else if (!isChecked && temp.has(id)) {
            temps.delete(id);
            setTemp(temps);
        }
        console.log(temp)
    }

    const handleDone = (e:any) => {
        if (temp.size === 0) {
            alert('잘 모르겠다면 "모르겠어요" 버튼을 눌러주세요.')
        } else {
            handleLast()
            setResult({...result, [page]: Array.from(temp)})
            setTemp(new Set())
            setPage(pageid[Number(pageid.indexOf(page)+1)])
        }
        setIsChecked(false)
        console.log('result: ', result)
        console.log('temp: ', temp)
    }

    const handleNone = () => {
        if (temp.size === 0) {
            handleLast()
            setResult({...result, [page]: []})
            setPage(pageid[Number(pageid.indexOf(page)+1)])
            console.log(result)
        } else {
            alert('이미 고른 항목이 있는 것 같군요! "선택 완료" 버튼을 눌러주세요!')
        }
    }
    const handleLast = () => {
        if (page==='keyword') {
            // data 보내기 (result 값) 
            const last:any = {...result}
            last['keyword'] = Array.from(temp)
            // axios.post('/', last)
            setTimeout(()=> {
                console.log(last)

                history.push('/result')
            }, 2000)
        }
    }
    
    
    return (
        <div id='TestPage'>

            {page === 'contentType' && 
                <PageSection
                    idname='contentType'
                    dataset={types}
                    main='section'
                    sub='desc'
                    onChange={(e: any) => checkHandler(e)}
                >좋아하는 영상 종류를 모두 선택해주세요.</PageSection>
            }
            {page === 'year' && 
                <PageSection
                    idname='year'
                    dataset={years}
                    main='time'
                    sub='desc'
                    onChange={(e:any) => checkHandler(e)}
                >
                    좋아하는 컨텐츠의 연도를 모두 선택해주세요.
                </PageSection>
            }
            {page === 'genre' &&
                <PageSection
                    idname='genre'
                    dataset={genres}
                    main='kor'
                    sub='eng'
                    isMulti={true}
                    onChange={(e: any) => checkHandler(e)}
                >좋아하는 컨텐츠의 장르를 모두 선택해주세요.</PageSection>
            }
            {page === 'keyword' && 
                <PageSection
                    idname='keyword'
                    dataset={keywordObjList}
                    main='keyword'
                    sub='desc'
                    isMulti={true}
                    onChange={(e:any) => checkHandler(e)}
                >좋아하는 키워드를 모두 선택해주세요.</PageSection>
            }
            {page === undefined && 
                <Loading />
            }
            {page !== undefined && 
                <div className='buttons'>
                    <Button styles={`btn-md ${temp.size !== 0 && `btn-green`}`} onClick={handleDone}>선택 완료</Button>
                    <Button styles={`btn-md ${temp.size === 0 && `btn-red`}`} onClick={handleNone}>모르겠어요</Button>
                </div>
            }

        </div>
    )
}
