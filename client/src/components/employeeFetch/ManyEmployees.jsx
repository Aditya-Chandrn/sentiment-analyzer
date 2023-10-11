import React, { useState } from "react";
import Cards from "components/cards/Cards";
import styles from "./manyemployees.module.css";

import { calculateEmpPerformance } from 'utils/graphData';

const ManyEmployees = ({ employees , setGraphData}) => {
	const [selectedCard, setSelectedCard] = useState(null);
	const [currentLimit, setCurrentLimit] = useState(5
	);

	const handleSelection = (employee, index) => {
		selectedCard === index ? setSelectedCard(null) : setSelectedCard(index)

		const graphData = calculateEmpPerformance(employee.id, employee.performance);
		setGraphData(graphData)
	}

	const decreaseLimit = () => {
		if (currentLimit <= 5
		) return;
		setCurrentLimit(currentLimit - 5
		);
	}

	const increaseLimit = () => {
		if (currentLimit >= employees.length) return;
		setCurrentLimit(currentLimit + 5);
	}

	return (
		<div>
			{employees.slice(currentLimit - 5
				, currentLimit).map((employee, index) => (
					<Cards
						key={index}
						empId={employee.id}
						fname={employee.fname}
						lname={employee.lname}
						image={employee.image}
						// empPerformance={employee.type}
						joinDate={employee.joined}
						onClick={() => handleSelection(employee, index)}
						active={selectedCard === index}
						cardMin={selectedCard === null}
					/>

				))}

			<div className={styles.footer}>
				<button className={styles.button} onClick={decreaseLimit}>&lt;</button>
				&nbsp;&nbsp;&nbsp;
				{currentLimit - 4} - {(currentLimit > employees.length) ? employees.length : currentLimit} of {employees.length}
				&nbsp;&nbsp;&nbsp;
				<button className={styles.button} onClick={increaseLimit}>&gt;</button>
			</div>
		</div>
	);
};

export default ManyEmployees;
