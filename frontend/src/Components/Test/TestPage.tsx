import './scss/TestPage.scss'
import React, { useState, useEffect } from 'react'
import Button from '../Common/Button';
import PageSection from './PageSection';
import Loading from './Loading';
import { useHistory } from 'react-router';
import axios from 'axios';

const genres = [
    {id: '서부', kor: '서부', eng: 'Western'}, 
    {id: '공포', kor: '공포', eng: 'Horror'}, 
    {id: '로맨스', kor: '로맨스', eng: 'Romance'},
    {id: '액션', kor: '액션', eng: 'Action & Adventure'},
    {id: '스릴러', kor: '스릴러', eng: 'Mystery & Thriller'},
    {id: '코미디', kor: '코미디', eng: 'Comedy'},
    {id: '범죄', kor: '범죄', eng: 'Crime'},
    {id: 'Made in Europe', kor: 'Made in Europe', eng: 'Made in Europe'},
    {id: '판타지', kor: '판타지', eng: 'Fantasy'},
    {id: '전쟁', kor: '전쟁', eng: 'War & Military'},
    {id: '역사', kor: '역사', eng: 'History'},
    {id: 'SF', kor: '공상과학', eng: 'Sci-Fi'},
    {id: '음악', kor: '음악', eng: 'Music & Musical'},
    {id: 'Reality TV', kor: '리얼리티', eng: 'Reality'},
    {id: '가족', kor: '가족', eng: 'Kids & Family'},
    {id: '스포츠', kor: '스포츠', eng: 'Sport'}
]

const types = [
    {id: '영화', section: '영화', desc:''},
    {id: '드라마', section: '드라마', desc:''},
    {id: '다큐멘터리', section: '다큐멘터리', desc:''},
    {id: '애니메이션', section: '애니메이션', desc:''}

]

const years = [
    {id: '2000년 이전', time: '2000년 이전', desc: ''},
    {id: '2000년-2009년', time: '2000년-2009년', desc: ''},
    {id: '2010년-2019년', time: '2010년-2019년', desc: ''},
    {id: '2020년 이후', time: '2020년 이후', desc: ''}
]

const keywordObjList = [
    {
        "id": "야구",
        "keyword": "야구",
        "desc": ""
    },
    {
        "id": "형님",
        "keyword": "형님",
        "desc": ""
    },
    {
        "id": "모험",
        "keyword": "모험",
        "desc": ""
    },
    {
        "id": "임무",
        "keyword": "임무",
        "desc": ""
    },
    {
        "id": "웃음",
        "keyword": "웃음",
        "desc": ""
    },
    {
        "id": "사건",
        "keyword": "사건",
        "desc": ""
    },
    {
        "id": "집행",
        "keyword": "집행",
        "desc": ""
    },
    {
        "id": "아이",
        "keyword": "아이",
        "desc": ""
    },
    {
        "id": "경쟁",
        "keyword": "경쟁",
        "desc": ""
    },
    {
        "id": "연주",
        "keyword": "연주",
        "desc": ""
    },
    {
        "id": "대원",
        "keyword": "대원",
        "desc": ""
    },
    {
        "id": "동생",
        "keyword": "동생",
        "desc": ""
    },
    {
        "id": "인간",
        "keyword": "인간",
        "desc": ""
    },
    {
        "id": "피아노",
        "keyword": "피아노",
        "desc": ""
    },
    {
        "id": "복수",
        "keyword": "복수",
        "desc": ""
    },
    {
        "id": "덴마크",
        "keyword": "덴마크",
        "desc": ""
    },
    {
        "id": "학교",
        "keyword": "학교",
        "desc": ""
    },
    {
        "id": "여자",
        "keyword": "여자",
        "desc": ""
    },
    {
        "id": "마약",
        "keyword": "마약",
        "desc": ""
    },
    {
        "id": "시리즈",
        "keyword": "시리즈",
        "desc": ""
    },
    {
        "id": "운명",
        "keyword": "운명",
        "desc": ""
    },
    {
        "id": "무대",
        "keyword": "무대",
        "desc": ""
    },
    {
        "id": "살인",
        "keyword": "살인",
        "desc": ""
    },
    {
        "id": "나치",
        "keyword": "나치",
        "desc": ""
    },
    {
        "id": "우정",
        "keyword": "우정",
        "desc": ""
    },
    {
        "id": "좀비",
        "keyword": "좀비",
        "desc": ""
    },
    {
        "id": "감시",
        "keyword": "감시",
        "desc": ""
    },
    {
        "id": "작전",
        "keyword": "작전",
        "desc": ""
    },
    {
        "id": "존재",
        "keyword": "존재",
        "desc": ""
    },
    {
        "id": "노예",
        "keyword": "노예",
        "desc": ""
    },
    {
        "id": "쇼",
        "keyword": "쇼",
        "desc": ""
    },
    {
        "id": "마음",
        "keyword": "마음",
        "desc": ""
    },
    {
        "id": "아들",
        "keyword": "아들",
        "desc": ""
    },
    {
        "id": "사랑",
        "keyword": "사랑",
        "desc": ""
    },
    {
        "id": "소년",
        "keyword": "소년",
        "desc": ""
    },
    {
        "id": "비밀",
        "keyword": "비밀",
        "desc": ""
    },
    {
        "id": "변호사",
        "keyword": "변호사",
        "desc": ""
    },
    {
        "id": "돈",
        "keyword": "돈",
        "desc": ""
    },
    {
        "id": "죽음",
        "keyword": "죽음",
        "desc": ""
    },
    {
        "id": "경찰",
        "keyword": "경찰",
        "desc": ""
    },
    {
        "id": "배신자",
        "keyword": "배신자",
        "desc": ""
    },
    {
        "id": "초원",
        "keyword": "초원",
        "desc": ""
    },
    {
        "id": "공개",
        "keyword": "공개",
        "desc": ""
    },
    {
        "id": "그녀",
        "keyword": "그녀",
        "desc": ""
    },
    {
        "id": "딸",
        "keyword": "딸",
        "desc": ""
    },
    {
        "id": "형제",
        "keyword": "형제",
        "desc": ""
    },
    {
        "id": "최고",
        "keyword": "최고",
        "desc": ""
    },
    {
        "id": "시간",
        "keyword": "시간",
        "desc": ""
    },
    {
        "id": "과거",
        "keyword": "과거",
        "desc": ""
    },
    {
        "id": "인류",
        "keyword": "인류",
        "desc": ""
    },
    {
        "id": "중학교",
        "keyword": "중학교",
        "desc": ""
    },
    {
        "id": "형사",
        "keyword": "형사",
        "desc": ""
    },
    {
        "id": "마을",
        "keyword": "마을",
        "desc": ""
    },
    {
        "id": "드래곤",
        "keyword": "드래곤",
        "desc": ""
    },
    {
        "id": "게임",
        "keyword": "게임",
        "desc": ""
    },
    {
        "id": "아버지",
        "keyword": "아버지",
        "desc": ""
    },
    {
        "id": "거인",
        "keyword": "거인",
        "desc": ""
    },
    {
        "id": "친구",
        "keyword": "친구",
        "desc": ""
    },
    {
        "id": "음식",
        "keyword": "음식",
        "desc": ""
    },
    {
        "id": "레이스",
        "keyword": "레이스",
        "desc": ""
    },
    {
        "id": "기록",
        "keyword": "기록",
        "desc": ""
    },
    {
        "id": "영국",
        "keyword": "영국",
        "desc": ""
    },
    {
        "id": "인생",
        "keyword": "인생",
        "desc": ""
    },
    {
        "id": "소녀",
        "keyword": "소녀",
        "desc": ""
    },
    {
        "id": "우리",
        "keyword": "우리",
        "desc": ""
    },
    {
        "id": "미래",
        "keyword": "미래",
        "desc": ""
    },
    {
        "id": "조직",
        "keyword": "조직",
        "desc": ""
    },
    {
        "id": "퀸",
        "keyword": "퀸",
        "desc": ""
    },
    {
        "id": "제국",
        "keyword": "제국",
        "desc": ""
    },
    {
        "id": "부대",
        "keyword": "부대",
        "desc": ""
    },
    {
        "id": "테러",
        "keyword": "테러",
        "desc": ""
    },
    {
        "id": "레슬링",
        "keyword": "레슬링",
        "desc": ""
    },
    {
        "id": "조선",
        "keyword": "조선",
        "desc": ""
    },
    {
        "id": "사람",
        "keyword": "사람",
        "desc": ""
    },
    {
        "id": "선수",
        "keyword": "선수",
        "desc": ""
    },
    {
        "id": "전설",
        "keyword": "전설",
        "desc": ""
    },
    {
        "id": "미국",
        "keyword": "미국",
        "desc": ""
    },
    {
        "id": "요괴",
        "keyword": "요괴",
        "desc": ""
    },
    {
        "id": "남자",
        "keyword": "남자",
        "desc": ""
    }
]


export default function TestPage() {
    const pageid = ['contentType', 'year', 'genre', 'keyword']
    const [result, setResult] = useState({}) // 선택한 모든 것 담기
    const [temp, setTemp] = useState(new Set()) // 한 페이지에서 선택한 것 받고 초기화
    const [isChecked, setIsChecked] = useState(false);
    const [page, setPage] = useState('contentType') // 현재 보여질 페이지
    const [resFlag, setResFlag] = useState(false)
    const [res, setRes] = useState([])
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
            const last:any = {...result}
            last['keyword'] = Array.from(temp)
            axios.post('http://kdt-vm-0202003.koreacentral.cloudapp.azure.com:5000/survey-result', {
                result: last,
                email: sessionStorage.getItem('email')
            })
                .then((res) => console.log(res))
            setTimeout(()=> {
                axios.post('http://kdt-vm-0202003.koreacentral.cloudapp.azure.com:5000/filter', {
                    email: sessionStorage.getItem('email')
                })
                    .then((response: any) => {
                        if (response.status === 200) {
                            console.log(response.data)
                            history.push('/result')
                        } else {
                            alert('다시 시도해주세요 ㅜㅜ')
                        }
                    })
            }, 1000) 
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
