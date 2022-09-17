import React,{useState} from 'react';
import Chart from 'react-apexcharts';
function LineChart(props)
{
    const[series, setSeries]= useState(
        [
            {
                name:"Citations",
                data:props.data
            }
        ]
    );

    const[option, setOption]= useState(
        {
            title:{ text:`${props.title}`},
            xaxis:{
                title:{text:"Year"},
                categories:['2017','2018','2019','2020','2021','2022','Jul','Aug','Sep','Oct','Nov','Dec']
            },
            yaxis:{
                title:{text:"Citation Count"}                 
            },
            colors:["#3d7cd4"],

        }
    );

    return(<React.Fragment>
        <div className='container-fluid mt-3 mb-3' style={{margin: "0rem 2rem 0rem 5rem"}}>
                     
          <Chart type='line'
          width={300}
          height={250}
          series={series}
          options={option}
          style={{
            paddingTop: '2rem',
            marginTop: '2rem',
            marginLeft: '-2rem',
          }}
          >
          </Chart>

        </div>
    </React.Fragment>);
}

export default LineChart;