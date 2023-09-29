import React from 'react'
import DashboardIcon from "assets/dashboard.png";
import "./Cards.css";


const Cards = (props) => {
    // const [cardOpen, setCardOpen] = useState(false);

    // const onClick= ()=>{
    //     cardOpen ? setCardOpen(false) : setCardOpen(true);
    // }

    return (
    <div>
        <div class='Cards'>
            <div className='flex'>
            {/* Image */}
            {/* {props.employeeImage} */}
            <div class={props.openCard? 'empImageOpen': 'empImage'}>
                <img src={DashboardIcon} alt={DashboardIcon}/>
            </div>
            {/* Details */}
            <div class={props.openCard? 'empNameOpen': 'empName'}>
                <div class={props.openCard? 'titleOpen': 'title'}>{props.fname} {props.lname} Employee Name</div>
                <div class={props.openCard? 'empDetails' : 'hid' }>
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