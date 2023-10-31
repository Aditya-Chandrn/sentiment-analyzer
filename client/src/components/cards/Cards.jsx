import React from 'react'
import "./Cards.css";


const Cards = (props) => {
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
                <div className={props.cardMin ? 'title' : props.active? 'titleOpen': 'titleSmall'}>{props.fname} {props.lname}</div>
                <div className={props.active? 'empDetails' : 'hid' }>
                    <div className='subtitles'>
                        Employee Id : {props.id} 
                    </div>
                    <div className='subtitles'>
                        Join Date : {props.joinDate} 
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

export default Cards