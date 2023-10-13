import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from "./records.module.css";

const Records = () => {
  const [currentLimit, setCurrentLimit] = useState(10);
  const [calls , setCalls] = useState([]);
  
  const fetchAllCalls = () => {
    axios
      .get("http://localhost:5000/api/call/fetch")
      .then((res) => {
        const allCalls = res.data;
        setCalls(allCalls);
        // console.log(employees);
      })
      .catch((error) =>
        console.log("Error fetching all employees : ", error.message)
      );
  };
  
  useEffect(() => {
    fetchAllCalls();
  },[]);

  const decreaseLimit = () => {
    if(currentLimit <=10) return;
    setCurrentLimit(currentLimit-10);
  }

  const increaseLimit = () => {
    if(currentLimit >= calls.length) return;
    setCurrentLimit(currentLimit+10);
  }



  return (
    <div className={styles.records}>
      <table className={styles.callTable}>
        <tr className={styles.heading}>
          <th>Sr. no.</th>
          <th>Call ID</th>
          <th>Product Id</th>
          <th>Employee ID</th>
          <th>Customer ID</th>
          <th>Call Rating</th>
          <th>Call Length</th>
        </tr>
        {calls.slice(currentLimit-10,currentLimit).map((call, index) =>  
            <tr key={index}>
              <td>{index+1}</td>
              <td>{call.callId}</td>
              <td>{call.prodId}</td>
              <td>{call.empId}</td>
              <td>{call.customerId}</td>
              <td>{call.callRating}</td>
              <td>{call.callLength}</td>
            </tr>
        )}
      </table>
      <div className={styles.footer}>
          <button className={styles.button} onClick={decreaseLimit}>&lt;</button>
          &nbsp;&nbsp;&nbsp;
          {currentLimit-9} - {(currentLimit > calls.length )? calls.length : currentLimit } of {calls.length}
          &nbsp;&nbsp;&nbsp;
          <button className={styles.button} onClick={increaseLimit}>&gt;</button>
      </div>
    </div>
  )
}

export default Records