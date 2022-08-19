// import React ,{ useState, useEffect} from "react";
import React, { useState } from "react";
import  Chart  from "react-apexcharts";
function PieChart()
{
//    const [stdudentSubject, setStudentsubject]= useState([]);
//    const [studentMarks, setStudentMarks]= useState([]);

//    useEffect( ()=>{
//        const sSubject=[];
//        const sMarks=[];
//        const getStudentdata= async()=>{
//        const reqData= await fetch("http://localhost/reactgraphtutorial/marks");
//        const resData= await reqData.json();       
//        for(let i=0; i< resData.length; i++)
//        {
//         sSubject.push(resData[i].subject);
//         sMarks.push(parseInt(resData[i].marks));
//        }
//        setStudentsubject(sSubject);
//        setStudentMarks(sMarks);
//         //console.log(resData); 
//        }

//     getStudentdata();

//    },[]);
    const [series,setSeries] = useState([23, 11, 54, 72, 12])
    const [option, setOption] = useState({
        colors:["#357cd2","#e56590","#00bdae","#404041"],
        labels:["A","B","C","D","E"]
    })
    return(
        
        <React.Fragment>
            {/* <div className="container-fluid mb-3"> */}
            <div>
                <Chart 
                type="pie"
                // height={550}
                // width={1349}

                // series={[
                //     {
                //       data: [6578, 6787, 3245, 9876],
                //     },
                //   ]}
                // series = {[23, 11, 54, 72, 12]}          
                series={series}    

                options={option}
                >
                </Chart>
            </div>
        </React.Fragment>
    );
}
export default PieChart;