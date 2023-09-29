import axios from 'axios';
import React, { useEffect, useState } from 'react'

const EmployeeData = ({employee}) => {
  return(
    <div>
      Employee name : {`${employee.fname} ${employee.lname}`}<br/>
      Employee id : {employee.id}<br/>
      Employee image : <img src={employee.image} alt='employee'/><br/><br/>
    </div>
  );
}

const OneEmployee = () => {
  const [id, setId] = useState("abc_xyz.20230907.2");
  const [employee, setEmployee] = useState({});

  const fetchEmployee = ()=> {
    axios.get(`http://localhost:5000/api/employee/fetch/${id}`)
      .then(res => {
        const newEmp = res.data;
        const image = `data:image/jpeg;base64,${newEmp.image}`; // Adjust the image data prefix
        newEmp.image = image;
        setEmployee(newEmp);
      })
      .catch(error => console.log("Error fetching data"));
  };

  useEffect(() => {fetchEmployee()}
  ,[id])
  
  return (
    <div className="">
      <EmployeeData employee={employee}/>
    </div>
  )
}


const ManyEmployees = () => {
  const [employees, setEmployees] = useState([]);

  const fetchAllEmployees = () => {
    axios.get("http://localhost:5000/api/employee/fetch")
      .then(res => {
        const allEmp = res.data;
        console.log(allEmp)
        allEmp.forEach((emp) => {
          const image = `data:img/jpeg;base64,${emp.image}`; 
          emp.image = image;
        });
        setEmployees(allEmp);
        console.log(employees);
      })
      .catch(error => console.log("Error fetching all employees : ", error.message));
  }

  useEffect(()=> {fetchAllEmployees()}
  ,[]);

  return(
    <div className="">
      {employees.map((employee) => 
        <EmployeeData employee={employee}/>
      )}
    </div>
  )
}

const EmployeeAnalytics = () => {
  return(
    <div className="">
      <OneEmployee/>
      <ManyEmployees/>
    </div>
  )
}

export default EmployeeAnalytics;