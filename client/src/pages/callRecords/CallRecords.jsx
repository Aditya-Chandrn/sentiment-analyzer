import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from "./callRecords.module.css";

const CallRecords = () => {
	const [currentLimit, setCurrentLimit] = useState(10);
	const [calls, setCalls] = useState([]);

	const fetchAllCalls = () => {
		axios
			.get("http://localhost:5000/api/call/fetch")
			.then((res) => {
				let allCalls = res.data;

				allCalls = allCalls.map(call => {
					let sum = 0;
					if(call.performance){
						for ( let i of call.performance) sum += i;
						call.rating = sum / call.performance.length;
						call.rating = call.rating.toFixed(1);
					} 
					else {
						call.rating = "Not rated till now";
					}
					return call;
				});

				allCalls = allCalls.reverse();

				setCalls(allCalls);
			})
			.catch((error) =>
				console.log("Error fetching all employees : ", error.message)
			);
	};

	useEffect(() => {
		fetchAllCalls();
	}, []);

	const decreaseLimit = () => {
		if (currentLimit <= 10) return;
		setCurrentLimit(currentLimit - 10);
	}

	const increaseLimit = () => {
		if (currentLimit >= calls.length) return;
		setCurrentLimit(currentLimit + 10);
	}



	return (
		<div className={styles.records}>
			<table className={styles.callTable}>
				<tr className={styles.heading}>
					<th>Sr. No.</th>
					<th>Call ID</th>
					<th>Product ID</th>
					<th>Employee ID</th>
					<th>Call Rating</th>
					<th>Date</th>
					<th>Time</th>
				</tr>
				{calls.slice(currentLimit - 10, currentLimit).map((call, index) =>
					<tr key={index}>
						<td>{index + 1}</td>
						<td>{call.callId}</td>
						<td>{call.prodId}</td>
						<td>{call.empId}</td>
						<td>{call.rating}</td>
						<td>{call.createdDate}</td>
						<td>{call.createdTime}</td>
					</tr>
				)}
			</table>
			<div className={styles.footer}>
				<button className={styles.button} onClick={decreaseLimit}>&lt;</button>
				&nbsp;&nbsp;&nbsp;
				{currentLimit - 9} - {(currentLimit > calls.length) ? calls.length : currentLimit}
				{/* {currentLimit - 9} - {(currentLimit > calls.length) ? calls.length : currentLimit} of {calls.length} */}
				&nbsp;&nbsp;&nbsp;
				<button className={styles.button} onClick={increaseLimit}>&gt;</button>
			</div>
		</div>
	)
}

export default CallRecords