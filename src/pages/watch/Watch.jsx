import React from 'react'
import "./watch.scss"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ReactPlayer from 'react-player'
import { Link, useLocation } from 'react-router-dom';
export default function Watch() {
  const location=useLocation();
  const movie=location.state;
  console.log(location)
  return (
    <div className='watch'>
      <Link to="/">
       <div className="back">
         <ArrowBackIcon></ArrowBackIcon>
         back
       </div>
    </Link>
    {/* used react player for playing the video */}
    <ReactPlayer className='video' width="100%" height="100%" controls url={movie.trailer}/>
    </div>
  )
}
