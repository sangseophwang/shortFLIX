import React, { useState, useEffect } from "react";
import Navigation from "../Components/Common/Navigation";
import WatchVideoContent from "../Components/WatchVideo/WatchVideoContent";
import WatchYoutube from "../Components/WatchVideo/WatchYoutube";
import {useHistory, useLocation} from 'react-router'

const WatchVideo = ( {match}:any ) => {
  type Page = 'desc' | 'youtube' ;
  const [page, setPage] = useState<Page>('desc')
  const [link, setLink] = useState(null)
  const location:any = useLocation()
  useEffect(()=> {
    // userinfo 받아오기 (like 여부 받고, youtube 상세 페이지에 props로 넘기기)
    // like info 받아온 후 뿌리기(desc에)
  },[])
  
  return (
    <main className='WatchVideo__Container'>
      <Navigation link={'mypage'} />
      { page === 'desc' && <WatchVideoContent videoDetail={location.state.cur} videoAll={location.state.whole} setPage={setPage} setLink={setLink} />}
      { page === 'youtube' && <WatchYoutube videoDetail={location.state.cur} setPage={setPage} link={link}/>}
    </main>
  );
};

export default WatchVideo;

