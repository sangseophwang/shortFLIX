import React, { useState, useEffect } from "react";
import Navigation from "../Components/Common/Navigation";
import WatchVideoContent from "../Components/WatchVideo/WatchVideoContent";
import WatchYoutube from "../Components/WatchVideo/WatchYoutube";
import {useHistory, useLocation} from 'react-router'
import axios from "axios";

const WatchVideo = ( {match}:any ) => {
  type Page = 'desc' | 'youtube' ;
  const [page, setPage] = useState<Page>('desc')
  const [link, setLink] = useState(null)
  const location:any = useLocation()
  const [like, setLike] = useState(false)
  const [likes,setLikes] = useState(location.state.cur.like)
  const urlLike = "http://kdt-vm-0202003.koreacentral.cloudapp.azure.com:5000/mypage"
  useEffect(()=> {
    axios.post(urlLike, {
      email: sessionStorage.getItem('email'),
    })
      .then((response:any) => {
        const likes = response.data['likes_list']?.map((item:any) => item.id)
        if (likes?.includes(location.state.cur.id)) setLike(true)
      })
  },[])
  
  return (
    <main className='WatchVideo__Container'>
      <Navigation />
      { page === 'desc' && 
      <WatchVideoContent 
        videoDetail={location.state.cur} 
        videoPart={location.state.part}
        videoAll = {location.state.whole} 
        setPage={setPage} 
        setLink={setLink} 
        likes={likes} />}
      { page === 'youtube' && 
      <WatchYoutube 
        videoDetail={location.state.cur} 
        setPage={setPage} 
        link={link} 
        like={like} 
        setLikes={setLikes} />}
    </main>
  );
};

export default WatchVideo;

