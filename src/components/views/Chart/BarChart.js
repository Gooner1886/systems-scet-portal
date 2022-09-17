import React, { useState } from "react";
import Chart from "react-apexcharts";

function BarChart(props) {
  console.log(props)

  let countArray = [];
  let count2017 = 0;  
  let count2018 = 0;  
  let count2019 = 0;  
  let count2020 = 0;  
  let count2021 = 0;  
  props.data.forEach(el=>{
    if(el.year === 2017) {
      count2017 += el.count;
    } else if(el.year === 2018) {
      count2018 += el.count;
    } else if(el.year === 2019) {
      count2019 += el.count;
    } else if(el.year === 2020) {
      count2020 += el.count;
    } else {
      count2021 += el.count;
    }
  })
  countArray.push(count2017, count2018, count2019, count2020, count2021);
  console.log(countArray);
  const seriesArray = [
    {
      name:`${props.bottomHeader}`,
      data:countArray
    }
  ]
  const [series, setSeries] = useState(seriesArray)

  const [option, setOption] = useState({
    title: {
      text: `${props.heading}`,
      style: { fontSize: 25, marginBottom: "1rem" },
    },

    subtitle: {
      text: `${props.subHeading}`,
      style: { fontSize: 18 },
    },

    colors: ["#357cd2"],
    theme: { mode: "light" },

    xaxis: {
      tickPlacement: "on",
      categories: [
        "2017",
        "2018",
        "2019",
        "2020",
        "2021"
      ],
      title: {
        text: `${props.bottomHeader}`,
        style: { color: "black", fontSize: 30 },
      },
    },

    yaxis: {
      labels: {
        formatter: (val) => {
          return `${val}`;
        },
        style: { fontSize: "15", colors: ["black"] },
      },
      title: {
        text: "Citation Count",
        style: { color: "black", fontSize: 15 },
      },
    },

    legend: {
      show: true,
      position: "right",
    },

    dataLabels: {
      formatter: (val) => {
        return `${val}`;
      },
      style: {
        colors: ["black"],
        fontSize: 15,
      },
    },
  })

  return (
    
    <React.Fragment>
      <div>

        <Chart
         style={{
          paddingTop: '2rem',
          width: '70rem',
          height: '20rem',
          marginLeft: '5rem',
        }}
          type="bar"
          // width={1100}
          // height={700}
          // series={[
          //   {
          //     name: `${props.bottomHeader}`,
          //     data: {data},
          //     style: [{
          //       marginBottom: '2rem',
          //     }]
          //   },
          // ]}
          series={series}
          options={option}
        ></Chart>
      </div>
    </React.Fragment>
  );
}

export default BarChart;