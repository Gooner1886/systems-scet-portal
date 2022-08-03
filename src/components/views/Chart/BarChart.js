import React from "react";
import Chart from "react-apexcharts";

function BarChart() {
  return (
    <React.Fragment>
      <div className="container-fluid mb-5" style={{padding:'5rem'}}>
        <h3 className="text-center mt-3 mb-3">Total Citations</h3>

        <Chart
          type="bar"
          width={1380}
          height={700}
          series={[
            {
              name: "citations",
              data: [6578, 6787, 3245, 9876, 2324, 5123, 2435],
            },
          ]}
          options={{
            title: {
              text: "Total Citations by type",
              style: { fontSize: 30 },
            },

            subtitle: {
              text: "Citations sice 2017",
              style: { fontSize: 18 },
            },

            colors: ["violet"],
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
                text: "Citations",
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
                colors: ["blue"],
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