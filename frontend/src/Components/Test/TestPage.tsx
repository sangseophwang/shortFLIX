import './scss/TestPage.scss'
import React, { useState, useEffect } from 'react'
import Button from '../Common/Button';
import GenreInput from './GenreInput';
import PageSection from './PageSection';
import { stringify } from 'querystring';
import Loading from './Loading';
import { useHistory } from 'react-router';

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
    {id: 'documentary', section: '다큐', desc:''}

]

const years = [
    {id: '1990s', time: '1900년대', desc: ''},
    {id: '2000s', time: '2000년-2010년', desc: ''},
    {id: '2010s', time: '2010년 이후', desc: ''}
]

// 각 장르별 10개씩 뽑은 키워드 리스트 (70개)
const keyword = ['죽음', '역사', '경쟁', '테러', '소년', '인간', '세상', '범죄', '왕', '쇼', '음악', '퀸', '힙합', '남자', '친구', '선수', '형님', '사랑', '좀비', '조선', '동료', '거리', '가족', '조직', '여자', '사람', '마음', '경찰', '시리즈', '미국', '비밀', '마을', '마지막', '작전', '형제', '사건', '형사', '전쟁', '임무', '무대', '모험', '슈마허', '딸', '아들', '최고', '우리', '야구', '요괴', '다큐멘터리', '그녀', '영국', '초원', '집행', '드라마', '복수', '살인', '부대', '총잡이', '이야기', '힘', '공연', '공개', '운명', '노래', '세계대전', '세계', '게임', '보안관', '소녀', '인생']
const keywordObjList = [
    {
        "id": 19,
        "keyword": "죽음",
        "desc": ""
    },
    {
        "id": 20,
        "keyword": "역사",
        "desc": ""
    },
    {
        "id": 21,
        "keyword": "경쟁",
        "desc": ""
    },
    {
        "id": 22,
        "keyword": "테러",
        "desc": ""
    },
    {
        "id": 23,
        "keyword": "소년",
        "desc": ""
    },
    {
        "id": 24,
        "keyword": "인간",
        "desc": ""
    },
    {
        "id": 25,
        "keyword": "세상",
        "desc": ""
    },
    {
        "id": 26,
        "keyword": "범죄",
        "desc": ""
    },
    {
        "id": 27,
        "keyword": "왕",
        "desc": ""
    },
    {
        "id": 28,
        "keyword": "쇼",
        "desc": ""
    },
    {
        "id": 29,
        "keyword": "음악",
        "desc": ""
    },
    {
        "id": 30,
        "keyword": "퀸",
        "desc": ""
    },
    {
        "id": 31,
        "keyword": "힙합",
        "desc": ""
    },
    {
        "id": 32,
        "keyword": "남자",
        "desc": ""
    },
    {
        "id": 33,
        "keyword": "친구",
        "desc": ""
    },
    {
        "id": 34,
        "keyword": "선수",
        "desc": ""
    },
    {
        "id": 35,
        "keyword": "형님",
        "desc": ""
    },
    {
        "id": 36,
        "keyword": "사랑",
        "desc": ""
    },
    {
        "id": 37,
        "keyword": "좀비",
        "desc": ""
    },
    {
        "id": 38,
        "keyword": "조선",
        "desc": ""
    },
    {
        "id": 39,
        "keyword": "동료",
        "desc": ""
    },
    {
        "id": 40,
        "keyword": "거리",
        "desc": ""
    },
    {
        "id": 41,
        "keyword": "가족",
        "desc": ""
    },
    {
        "id": 42,
        "keyword": "조직",
        "desc": ""
    },
    {
        "id": 43,
        "keyword": "여자",
        "desc": ""
    },
    {
        "id": 44,
        "keyword": "사람",
        "desc": ""
    },
    {
        "id": 45,
        "keyword": "마음",
        "desc": ""
    },
    {
        "id": 46,
        "keyword": "경찰",
        "desc": ""
    },
    {
        "id": 47,
        "keyword": "시리즈",
        "desc": ""
    },
    {
        "id": 48,
        "keyword": "미국",
        "desc": ""
    },
    {
        "id": 49,
        "keyword": "비밀",
        "desc": ""
    },
    {
        "id": 50,
        "keyword": "마을",
        "desc": ""
    },
    {
        "id": 51,
        "keyword": "마지막",
        "desc": ""
    },
    {
        "id": 52,
        "keyword": "작전",
        "desc": ""
    },
    {
        "id": 53,
        "keyword": "형제",
        "desc": ""
    },
    {
        "id": 54,
        "keyword": "사건",
        "desc": ""
    },
    {
        "id": 55,
        "keyword": "형사",
        "desc": ""
    },
    {
        "id": 56,
        "keyword": "전쟁",
        "desc": ""
    },
    {
        "id": 57,
        "keyword": "임무",
        "desc": ""
    },
    {
        "id": 58,
        "keyword": "무대",
        "desc": ""
    },
    {
        "id": 59,
        "keyword": "모험",
        "desc": ""
    },
    {
        "id": 60,
        "keyword": "슈마허",
        "desc": ""
    },
    {
        "id": 61,
        "keyword": "딸",
        "desc": ""
    },
    {
        "id": 62,
        "keyword": "아들",
        "desc": ""
    },
    {
        "id": 63,
        "keyword": "최고",
        "desc": ""
    },
    {
        "id": 64,
        "keyword": "우리",
        "desc": ""
    },
    {
        "id": 65,
        "keyword": "야구",
        "desc": ""
    },
    {
        "id": 66,
        "keyword": "요괴",
        "desc": ""
    },
    {
        "id": 67,
        "keyword": "다큐멘터리",
        "desc": ""
    },
    {
        "id": 68,
        "keyword": "그녀",
        "desc": ""
    },
    {
        "id": 69,
        "keyword": "영국",
        "desc": ""
    },
    {
        "id": 70,
        "keyword": "초원",
        "desc": ""
    },
    {
        "id": 71,
        "keyword": "집행",
        "desc": ""
    },
    {
        "id": 72,
        "keyword": "드라마",
        "desc": ""
    },
    {
        "id": 73,
        "keyword": "복수",
        "desc": ""
    },
    {
        "id": 74,
        "keyword": "살인",
        "desc": ""
    },
    {
        "id": 75,
        "keyword": "부대",
        "desc": ""
    },
    {
        "id": 76,
        "keyword": "총잡이",
        "desc": ""
    },
    {
        "id": 77,
        "keyword": "이야기",
        "desc": ""
    },
    {
        "id": 78,
        "keyword": "힘",
        "desc": ""
    },
    {
        "id": 79,
        "keyword": "공연",
        "desc": ""
    },
    {
        "id": 80,
        "keyword": "공개",
        "desc": ""
    },
    {
        "id": 81,
        "keyword": "운명",
        "desc": ""
    },
    {
        "id": 82,
        "keyword": "노래",
        "desc": ""
    },
    {
        "id": 83,
        "keyword": "세계대전",
        "desc": ""
    },
    {
        "id": 84,
        "keyword": "세계",
        "desc": ""
    },
    {
        "id": 85,
        "keyword": "게임",
        "desc": ""
    },
    {
        "id": 86,
        "keyword": "보안관",
        "desc": ""
    },
    {
        "id": 87,
        "keyword": "소녀",
        "desc": ""
    },
    {
        "id": 88,
        "keyword": "인생",
        "desc": ""
    }
]

// 전체 데이터셋 중 상위 200개 키워드 리스트
const keywords = ['사람', '그녀', '사랑', '이야기', '사건', '세계', '세상', '친구', '가족', '드라마', '남자', '마을', '시리즈', '시간', '소녀', '범죄', '인생', '인간', '최고', '마음', '소년', '여자', '아이', '아버지', '이름', '미국', '비밀', '발견', '우리', '다큐멘터리', '전쟁', '경찰', '아들', '죽음', '딸', '엄마', '살인', '생활', '운명', '생각', '형사', '지금', '돈', '학교', '기억', '일상', '아내', '복수', '진실', '미래', '힘', '여행', '변호사', '과거', '사고', '상황', '마지막', '모습', '게임', '동료', '현실', '밤', '결혼', '도시', '위기', '뉴욕', '바로', '존재', '능력', '여성', '끝', '조직', '모험', '남편', '주인공', '사회', '인류', '청년', '시절', '해결', '몸', '쇼', '여인', '전설', '로맨스', '정체', '마약', '다섯', '지구', '코미디', '희망', '충격', '영국', '목숨', '영화', '도움', '회사', '애니메이션', '시대', '과정', '우주', '스타', '역사', '등장', '거리', '준비', '법', '임무', '살해', '무대', '작가', '이유', '천재', '여정', '의사', '마법', '우정', '현장', '정의', '계획', '지역', '싸움', '책', '혼란', '아빠', '대학', '마주', '음식', '관계', '감정', '원작', '방법', '발생', '추적', '문제', '형제', '선수', '감옥', '얼굴', '요리', '부탁', '배경', '수사', '경쟁', '생존', '결심', '정부', '인도', '음악', '고등학교', '용의자', '도착', '여기', '기술', '현재', '교수', '어머니', '동생', '제작', '매력', '고향', '만남', '권력', '기록', '찾기', '재능', '부모', '인물', '음모', '위협', '및', '작전', '범인', '낯선', '연인', '청춘', '정치', '선택', '첫사랑', '전투', '정신', '웃음', '배우', '감독', '바다', '자유', '영웅', '노력', '어둠', '코미디언', '치료', '납치', '이사', '부부', '성공', '성격', '히어로', '테러', '요원', '탈출']


export default function TestPage() {
    const pageid = ['contentType', 'year', 'genre', 'keyword']
    const [result, setResult] = useState({}) // 선택한 모든 것 담기
    const [temp, setTemp] = useState(new Set()) // 한 페이지에서 선택한 것 받고 초기화
    const [data, setData] = useState([]) // 백엔드에서 데이터 담아오기
    const [isChecked, setIsChecked] = useState(false);
    const [page, setPage] = useState('contentType') // 현재 보여질 페이지
    const history = useHistory();
    
    useEffect(() => {
        fetch('http://kdt-vm-0202003.koreacentral.cloudapp.azure.com:5000/contents')
        .then(res => res.json())
        .then(res => setData(res.data))
       
    }, [])


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
            setResult({...result, [page]: Array.from(temp)})
            handleLast()
            setTemp(new Set())
            setPage(pageid[Number(pageid.indexOf(page)+1)])
        }
        setIsChecked(false)
        console.log('result: ', result)
        console.log('temp: ', temp)
    }

    const handleNone = () => {
        if (temp.size === 0) {
            setResult({...result, [page]: []})
            handleLast()
            setPage(pageid[Number(pageid.indexOf(page)+1)])
            console.log(result)
        } else {
            alert('이미 고른 항목이 있는 것 같군요! "선택 완료" 버튼을 눌러주세요!')
        }
    }
    const handleLast = () => {
        if (page==='keyword') {
            // data 보내기 (result 값)
            console.log(result)
            setTimeout(()=> {
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
                >좋아하는 영상 종류를 선택해주세요.</PageSection>
            }
            {page === 'year' && 
                <PageSection
                    idname='year'
                    dataset={years}
                    main='time'
                    sub='desc'
                    onChange={(e:any) => checkHandler(e)}
                >
                    좋아하는 컨텐츠의 연도를 선택해주세요.
                </PageSection>
            }
            {page === 'genre' &&
                <PageSection
                    idname='genre'
                    dataset={genres}
                    main='kor'
                    sub='eng'
                    onChange={(e: any) => checkHandler(e)}
                >좋아하는 컨텐츠의 장르를 선택해주세요.</PageSection>
            }
            {page === 'keyword' && 
                <PageSection
                    idname='keyword'
                    dataset={keywordObjList}
                    main='keyword'
                    sub='desc'
                    onChange={(e:any) => checkHandler(e)}
                >좋아하는 키워드를 선택해주세요.</PageSection>
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
