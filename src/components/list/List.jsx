import React, { useRef, useState } from 'react'
import "./list.scss"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Listitems from '../listitems/Listitems';
export default function List({list}) {

  const listRef=useRef()
  
const [slideNumber,setslideNumber]=useState(0);
const [SlideClick,setSlideClick]=useState(window.innerWidth/205)
//created a slider 
  const handleClick=(direction)=>{
    let distance=listRef.current.getBoundingClientRect().x-50;

    if(direction==="left" &&slideNumber>0){
       setslideNumber(slideNumber-1)  
         listRef.current.style.transform=`translateX(${205+distance}px)`
    }
    if(direction==="right"&& slideNumber<list.contentList.length-SlideClick){
      setslideNumber(slideNumber+1)
      listRef.current.style.transform=`translateX(${-205+distance}px)`
 }
  }
  // console.log(list.contentList.length)
  return (
    <div className='list'>
        <span className="listTitle">{list.title}</span>
        <div className="wrapper">
         <ArrowBackIosIcon className='arrowSlider left' onClick={()=>handleClick("left")}></ArrowBackIosIcon> 
         <div className="container" ref={listRef}>
         {  list.contentList.map((item,i)=>{
             return  <Listitems index={i} key={i}  item={item}/>
            
           })}


          
    
         </div>
         <ArrowForwardIosIcon className='arrowSlider right' onClick={()=>handleClick("right")}></ArrowForwardIosIcon>  
        </div>
    </div>
  )
}
