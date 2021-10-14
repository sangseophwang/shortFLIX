import React, {useState, useEffect} from 'react'
import youtube from './Api'


export default function useYoutube(title:any) {
    const [videoList, setVideoList] = useState([])
    const [videoLen, setVideoLen] = useState<any>([])

    useEffect(()=> {
        searchVideo(title)
        .then(async (res:any) => await Promise.allSettled(res.map((item:any) => getDuration(item))))
        .then((res:any) => res.map((item:any) => item.value))
        .then((res:any) => setVideoLen(res))
    },[])
    const searchVideo = async(title:string) => {
        const response: any = await youtube.get('/search', {
        params: {
            q: `"${title}" 리뷰`
        }
        })
        .then((res:any) => res.data['items'].map((item:any) => item['id']['videoId']))
        setVideoList(response)
        return response
    }

    const getDuration = async(item: []) => {
        const response: any = await youtube.get(`/videos?id=${item}&part=contentDetails`)
        .then((res:any) => res.data['items'][0]['contentDetails']['duration'])
        
        return response
    }
    
    const videoDurationList: any = []
    
    const videoDuration = (video:any, duration:any) => {
        for (let i=0; i<5; i++) {
            const temp:any = {}
            temp['link'] = video[i];
            temp['duration'] = duration[i]
            videoDurationList.push(temp)
        }
    }
    videoDuration(videoList, videoLen)
    return videoDurationList
}
