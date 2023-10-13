import React, { useEffect, useState } from 'react'
import './EmpAnalytics.css';
import styles from "./product.module.css";
import SearchIcon from "assets/search.png";
import LineChart from 'components/charts and tables/LineChart';

// import Cards from 'components/cards/Cards.jsx';
import ManyEmployees from 'components/employeeFetch/ManyEmployees';
import axios from 'axios';

const EmployeeAnalytics = () => {
	const [search, setSearch] = useState("");
	const [employees, setEmployees] = useState([]);
	const [graphData, setGraphData] = useState();

	const fetchAllEmployees = async () => {
		try {
			// return
			const response = await axios.get("http://localhost:5000/api/employee/fetch");
			const allEmp = response.data;
			allEmp.forEach((emp) => {
				const image = `data:img/jpeg;base64,${emp.image}`;
				emp.image = image;
			});
			setEmployees(allEmp);
		} catch (error) {
			console.log("Error fetching all employees : ", error.message)
		}
	};

	useEffect(() => {
		fetchAllEmployees();
	}, []);

	const handleChange = (e) => {
		setSearch(e.target.value);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
	}

	return (
		<div>
			{/*-------------------- SEARCH BAR ------------------ */}
			<div className={styles.product}>
				<form method='POST' onSubmit={handleSubmit} className={styles.searchBar}>
					<input className={styles.search} type='search' placeholder='Search Employee ...' value={search} onChange={handleChange} />
					<button className={styles.submit} type='submit'>
						<img className={styles.icon} src={SearchIcon} alt='search icon' />
					</button>
				</form>
				{/*-------------------- EMPLOYEE DETAILS ------------------ */}
			</div>
			<div className="flex-container">
				<div className='new'>
					<ManyEmployees employees={employees} setGraphData={setGraphData} />
				</div>

				{/*-------------------- EMPLOYEE ANALYTICS ------------------ */}
				<div className='new'>
					{console.log(graphData)}
					{graphData ? <LineChart data = {graphData}/> : <></>}
				</div>
			</div>
		</div>
	)
}

export default EmployeeAnalytics;