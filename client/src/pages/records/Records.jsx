import React, { useState } from 'react';
import styles from "./records.module.css";
import {randomData} from "assets/mock_datasets";

const Records = () => {
  const [currentLimit, setCurrentLimit] = useState(15);

  const decreaseLimit = () => {
    if(currentLimit <=15) return;
    setCurrentLimit(currentLimit-15);
  }

  const increaseLimit = () => {
    if(currentLimit >= randomData.length) return;
    setCurrentLimit(currentLimit+15);
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
        {randomData.slice(currentLimit-15,currentLimit).map((call, index) =>  
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
          {currentLimit-14} - {(currentLimit > randomData.length )? randomData.length : currentLimit } of {randomData.length}
          <button className={styles.button} onClick={decreaseLimit}>&lt;</button>
          <button className={styles.button} onClick={increaseLimit}>&gt;</button>
      </div>
    </div>
  )
}

export default Records