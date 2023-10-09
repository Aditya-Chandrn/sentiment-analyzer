//---------------------- EMPLOYEE PERFORMANCE -----------------------

const calculateEmpPerformance = (empId, performance) => {
    const number_of_dates = performance.length;
    performance = sortDates(performance);

    let empGraphData = []


    for (let i = number_of_dates - 1; i >= 0; i--) {
        const currentDate = Object.keys(performance[i])[0]
        const currentAverage = performance[i][currentDate].averageRating;
        const currentBlackListed = performance[i][currentDate].blackListed;

        const [year, month, date] = currentDate.split("-");
        const monthName = new Date(0, month - 1).toLocaleString("default", { month: "short" });
        empGraphData[i] = {}
        empGraphData[i].x = `${date} ${monthName}`;
        empGraphData[i].y = currentAverage;
    }

    empGraphData = [{
            id: empId,
            color: "hsl(264,70%,50%)",
            data: empGraphData
        }
    ];
    return empGraphData;
}
//---------------------- PRODUCT PERFORMANCE -----------------------

const calculateProdPerformance = (prodId, performance) => {
    const number_of_dates = performance.length;
    performance = sortDates(performance);

    let prodGraphData = []


    for (let i = number_of_dates - 1; i >= 0; i--) {
        const currentDate = Object.keys(performance[i])[0]
        const currentAverage = performance[i][currentDate].averageRating;

        const [year, month, date] = currentDate.split("-");
        const monthName = new Date(0, month - 1).toLocaleString("default", { month: "short" });
        prodGraphData[i] = {}
        prodGraphData[i].x = `${date} ${monthName}`;
        prodGraphData[i].y = currentAverage;
    }

    prodGraphData = [{
        id: prodId,
        color: "hsl(264,70%,50%)",
        data: prodGraphData
    }
];
    return prodGraphData;
}


//-------------- SORT PERFORMANCE ARRAY ----------------
const sortDates = (performance) => {
    performance.sort((a, b) => {
        const dateA = Object.keys(a)[0];
        const dateB = Object.keys(b)[0];
        return new Date(dateA) - new Date(dateB);
    })

    return performance;
}


export { calculateEmpPerformance, calculateProdPerformance };