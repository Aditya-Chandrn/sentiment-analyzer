import React from 'react'
import "./Cards.css";


const Cards = (props) => {
    // const [cardOpen, setCardOpen] = useState(false);

    // const onClick= ()=>{
    //     cardOpen ? setCardOpen(false) : setCardOpen(true);
    // }

    return (
    <div>
        <div class='Cards' onClick={props.onClick}>
            <div className='flex'>
            {/* Image */}
            <div class={props.active? 'empImageOpen': 'empImage'}>
                <img src= {props.image} alt={props.fname}/>
            </div>
            {/* Details */}
            <div class={props.active? 'empNameOpen': 'empName'}>
                <div class={props.active? 'titleOpen': 'title'}>{props.fname} {props.lname}</div>
                <div class={props.active? 'empDetails' : 'hid' }>
                    <div class='subtitles'>
                        Employee Id : {props.empId} 
                    </div>
                    <div class='subtitles'>
                        Join Date : {props.joinDate}
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