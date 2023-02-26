import React, { useState } from 'react'
import Chart from "react-apexcharts";

const BubbleCh = () => {
  // bubble chart for second page to show monthly earning or engaging users
    const [state] = useState({
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept","Oct","Nov","Dec"],
        },
      },
      series: [
        {
          name: "series-1",
          data: [0,200,400,600,800,'1k'],
        },
      ],
    });
  return <div className="bubblechart">
  {/* bubble chart using apexchart */}
 <Chart
              options={state.options}
              series={state.series}
              type="bar"
              width={500} height={320}
            />



            
  </div>;
}

export default BubbleCh
