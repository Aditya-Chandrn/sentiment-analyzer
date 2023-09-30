import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from "components/cards/Cards";
import styles from "./manyemployees.module.css";

const ManyEmployees = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentLimit, setCurrentLimit] = useState(2);

  const decreaseLimit = () => {
    if(currentLimit <=2) return;
    setCurrentLimit(currentLimit-2);
  }

  const increaseLimit = () => {
    if(currentLimit >= employees.length) return;
    setCurrentLimit(currentLimit+2);
  }

  
  const fetchAllEmployees = () => {
    axios
      .get("http://localhost:5000/api/employee/fetch")
      .then((res) => {
        const allEmp = res.data;
        // console.log(allEmp)
        allEmp.forEach((emp) => {
          console.log(emp.image);
          const image = `data:img/jpeg;base64,${emp.image}`;
          emp.image = image;
        });
        setEmployees(allEmp);
        console.log(employees);
      })
      .catch((error) =>
        console.log("Error fetching all employees : ", error.message)
      );
  };

  useEffect(() => {
    fetchAllEmployees();
  });

  return (
    <div>
      {employees.slice(currentLimit-2,currentLimit).map((employee, index) => (
        <Cards
          key={index}
          empId={employee.id}
          fname={employee.fname}
          lname={employee.lname}
          image={employee.image}
          onClick = {() => selectedCard===index? setSelectedCard(null) :setSelectedCard(index)}
          active = {selectedCard===index}
        />
        
      ))}

    <div className={styles.footer}>
          <button className={styles.button} onClick={decreaseLimit}>&lt;</button>
          &nbsp;&nbsp;&nbsp;
          {currentLimit-1} - {(currentLimit > employees.length )? employees.length : currentLimit } of {employees.length}
          &nbsp;&nbsp;&nbsp;
          <button className={styles.button} onClick={increaseLimit}>&gt;</button>
      </div>
    </div>
  );
};

export default ManyEmployees;
