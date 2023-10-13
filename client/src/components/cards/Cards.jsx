import React from 'react'
import "./Cards.css";


const Cards = (props) => {
    return (
    <div>
        <div class='Cards' onClick={props.onClick}>
            <div className='flex'>
            {/* Image */}
            <div class={props.cardMin ? 'empImage' : props.active? 'empImageOpen': 'empImageSmall'}>
                <img src= {props.image} alt=""/> {/*props.image*/}
            </div>
            {/* Details */}
            <div class={props.cardMin ? 'empName' : props.active? 'empNameOpen': 'empNameSmall'}>
                <div class={props.cardMin ? 'title' : props.active? 'titleOpen': 'titleSmall'}>{props.fname} {props.lname}</div>
                <div class={props.active? 'empDetails' : 'hid' }>
                    <div class='subtitles'>
                        Employee Id : {props.empId} 
                    </div>
                    <div class='subtitles'>
                        Join Date : {props.joinDate.slice(6,8)}/{props.joinDate.slice(4,6)}/{props.joinDate.slice(0,4)} 
                    </div>
                    <div class='subtitles'>
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