import React, { useEffect, useState } from 'react'

import { calculateEmpPerformance} from 'utils/graphData'
import performance from "utils/performance.json"

const Test_new = () => {
    const [graphData, setGraphData] = useState()

    useEffect(()=> {
        const empId = "banana"
        // setGraphData(calculateEmpPerformance(empId, performance))
        // console.log(calculateEmpPerformance(empId, performance))
    },[])

    return (
        <div>
            hello
        </div>
    )
}

export default Test_new