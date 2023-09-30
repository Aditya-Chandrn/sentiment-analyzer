import React, { useState } from 'react';
import styles from "./records.module.css";
import {randomData} from "assets/mock_datasets";

const Records = () => {
  const [currentLimit, setCurrentLimit] = useState(10);

  const decreaseLimit = () => {
    if(currentLimit <=10) return;
    setCurrentLimit(currentLimit-10);
  }

  const increaseLimit = () => {
    if(currentLimit >= randomData.length) return;
    setCurrentLimit(currentLimit+10);
  }

  return (
    <div className={styles.records}>
      <table className={styles.callTable}>
        <tr className={styles.heading}>
          <th>Call ID</th>
          <th>Product Id</th>
          <th>Employee ID</th>
          <th>Customer ID</th>
          <th>Call Rating</th>
          <th>Call Length</th>
        </tr>
        {randomData.slice(currentLimit-10,currentLimit).map((call, index) =>  
            <tr key={index}>
              <td>{call.callId}</td>
              <td>{call.productId}</td>
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
          {currentLimit-9} - {(currentLimit > randomData.length )? randomData.length : currentLimit } of {randomData.length}
          &nbsp;&nbsp;&nbsp;
          <button className={styles.button} onClick={increaseLimit}>&gt;</button>
      </div>
    </div>
  )
}

export default Records