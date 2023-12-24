import React from "react";
import GaugeComponent from "react-gauge-component";

const GaugeChart = () => {
    return (
        <GaugeComponent
            type="semicircle"
            arc={{
                colorArray: ['#E74C3C', '#F1C40F', '#2ECC71'],
                padding: 0.02,
                subArcs: [
                    { limit: 25 },
                    { limit: 50 },
                    { limit: 75 },
                    { limit: 100 }
                ]
            }}
            pointer={{
                type: "blob",
                color: "#2980B9",
                animationDelay: 0
            }}
            value={52}
            style={{width: '100%'}}
            labels={{
                valueLabel: {
                    style: {fontSize: "35px", fill: "#2C3E50", textShadow: "none"},
                    formatTextValue: value => `${value}%`
                },
                tickLabels: {
                    style: {fontSize: "15px", fill: "#7F8C8D", textShadow: "none"}
                }
            }}
        />
    );
}

export default GaugeChart;
