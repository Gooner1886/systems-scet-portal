import React,{useState} from 'react';
import Chart from 'react-apexcharts';
function LineChart()
{
    const[product, setProduct]= useState(
        [
            {
                name:"Citations",
                data:[234,45,67,987,345,456]
            }
        ]
    );

    const[option, setOption]= useState(
        {
            title:{ text:"Journal Citation"},
            xaxis:{
                title:{text:"Citation"},
                categories:['2017','2018','2019','2020','2021','2022','Jul','Aug','Sep','Oct','Nov','Dec']
            },
            yaxis:{
                title:{text:"Citation in K"}                 
            }

        }
    );

    return(<React.Fragment>
        <div className='container-fluid mt-3 mb-3'>
                     
          <Chart type='line'
          width={500}
          height={550}
          series={product}
          options={option }
          >
          </Chart>

        </div>
    </React.Fragment>);
}

export default LineChart;