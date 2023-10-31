import React from 'react'
import "./Cards.css";

const CardsP = (props) => {
    return (
    <div>
        <div className='Cards' onClick={props.onClick}>
            <div className='flex'>
            {/* Image */}
            <div className={props.cardMin ? 'empImage' : props.active? 'empImageOpen': 'empImageSmall'}>
                <img src= {props.image} alt=""/> 
            </div>
            {/* Details */}
            <div className={props.cardMin ? 'empName' : props.active? 'empNameOpen': 'empNameSmall'}>
                <div className={props.cardMin ? 'title' : props.active? 'titleOpen': 'titleSmall'}>{props.fname}</div>
                <div className={props.active? 'empDetails' : 'hid' }>
                    <div className='subtitles'>
                        Product Id : {props.prodId} 
                    </div>
                    <div className='subtitles'>
                        Release Date : {props.createdAt} 
                    </div>
                    <div className='subtitles'>
                        Performance : {props.empPerformance}
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default CardsP