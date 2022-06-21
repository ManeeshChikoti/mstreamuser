import React, { useEffect, useState } from 'react'
import "./listitems.scss"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ReactPlayer from 'react-player';
import { axiosInstance } from '../../axios';
import { Link } from 'react-router-dom';

export default function Listitems({index,item}) {
  const [hovered,sethovered]=useState(false);
  const [movie,setMovie]=useState({})
 
useEffect(()=>{
  const getMovie=async ()=>{
    try{
      const res=await axiosInstance.get("/movies/find/" +item,
      {
        headers:{
          token: "Bearer "+JSON.parse(localStorage.getItem("user")).token
        }
      
      })
      setMovie(res.data)

    }catch(error){
      console.log(error)
    }
  }
  getMovie();
},[item])
  return (
    <Link to="/watch" state={movie}>
    <div className='listitems'
    //setting the value of left according to index 
    style={{left:hovered&&index*200-50+index*2.5}}
     onMouseEnter={()=>sethovered(true)}
     onMouseLeave={()=>sethovered(false)}>

      <img alt="" src={movie.img} />
      {hovered&& (
      <>
      <ReactPlayer className='video'  width="100%" height="200px" controls url={movie.trailer}/>
      <div className="iteminfo">
        <div className="icons">
          <PlayArrowIcon className='icon'></PlayArrowIcon>
          <AddIcon className='icon'></AddIcon>
          <FavoriteBorderIcon className='icon'></FavoriteBorderIcon>
          </div>
          <div className="maininfo">
            <span>{movie.duration}</span>
            <span className="limit">{movie.limit}+</span>
            <span>{movie.year} </span>
          </div>
          <div className="description">
        {movie.description}
          </div>
          {/*  can add  additional movie info if needed*/}
          {/* <div className="genre">{movie.genre}</div> */}
      </div>
      </>)}
    </div>
    </Link>
  )
}
