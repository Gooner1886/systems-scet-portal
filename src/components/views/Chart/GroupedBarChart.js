import React, { useState } from "react";
import Chart from "react-apexcharts";

function GroupedBarChart() {
  const seriesArray = [
    {
      name: "A",
      data: [6578, 6787, 3245, 9876, 2324, 5123, 2435],
    },
    {
        name: "B",
        data: [657, 678, 324, 987, 232, 512, 243],
    },
  ]
  const [series, setSeries] = useState(seriesArray)

  const [option, setOption] = useState({
    title: {
      text: "Total Publications by type",
      style: { fontSize: 30 },
    },

    subtitle: {
      text: "Publications sice 2017",
      style: { fontSize: 18 },
    },

    colors: ["#2e657b","#de586d"],
    theme: { mode: "light" },

    xaxis: {
      tickPlacement: "on",
      categories: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
      ],
      title: {
        text: "Publication",
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
        text: "User In (K)",
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
        <h3 className="text-center mt-3 mb-3">Total Citations</h3>

        <Chart
          type="bar"
          // series={[
          //   {
          //     name: "A",
          //     data: [6578, 6787, 3245, 9876, 2324, 5123, 2435],
          //   },
          //   {
          //       name: "B",
          //       data: [657, 678, 324, 987, 232, 512, 243],
          //   },
          // ]}
          series={series}
          options={option}
        ></Chart>
      </div>
    </React.Fragment>
  );
}

export default GroupedBarChart;