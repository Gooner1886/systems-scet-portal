import React from "react";
import Chart from "react-apexcharts";

function BarChart(props) {
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
          series={[
            {
              name: `${props.bottomHeader}`,
              data: [6578, 6787, 3245, 9876, 2324, 5123, 2435],
              style: [{
                marginBottom: '2rem',
              }]
            },
          ]}
          options={{
            title: {
              text: `${props.heading}`,
              style: { fontSize: 30, marginBottom: "1rem" },
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
                "A",
                "B",
                "C",
                "D",
                "E",
                "F",
                "G",
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
          }}
        ></Chart>
      </div>
    </React.Fragment>
  );
}

export default BarChart;