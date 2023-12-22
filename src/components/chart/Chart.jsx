import React, {useState, useEffect} from "react";
import { LineChart } from '@mui/x-charts/LineChart';
import './chart.css';
import data1 from './overall.json'
import clsx from 'clsx';

const Chart = () =>{

    const [data,setData]= useState([]);
    const [xdata,setxData]= useState([]);
    const [ydata,setyData]= useState([]);
    const [ptsdata,setptsData]= useState([]);
    const [astdata,setastData]= useState([]);
    const [rebdata,setrebData]= useState([]);
    const [threedata,set3Data]= useState([]);
    const [stldata,setstlData]= useState([]);
    const [totalPicks, settotalpicks] = useState();

    useEffect(() => {
        var data1 = require('./overall.json');
        document.title = 'Beat The Line'
        setData(data1);
        if (data == null || data == undefined || data.length <1) {
            console.log("loading");
        }else{
            getRelevantData();
        }
        }, [data]);

   const getRelevantData = () => {

        console.log(data)
        var dates = [];
        var count = 1;
        if (data!= undefined || data!=null || Object.keys(data).length <1){

            console.log(Object.keys(data['accOvertime']));
            for (let key of Object.entries(data['accOvertime'])){
                var strs = key[0].split('-');
                //console.log(key[0]);
                console.log(strs);
                //dates.push(new Date (strs[0], strs[1] -1 , strs[2]));
                dates.push(count);
                count++;
            }
            setxData(dates);
            setyData(Object.values(data['accOvertime']));
            setptsData(Object.values(data['ptsOvertime']));
            setastData(Object.values(data['astOverTime']));
            setrebData(Object.values(data['rebOverTime']));
            set3Data(Object.values(data['threeOverTime']));
            setstlData(Object.values(data['stlOverTime']));
            settotalpicks(data['totalPicks']);

        }
        console.log(xdata);
        console.log(ydata);

    }

   
      

    return (
        <div className = "chartBackground">
            <h6 className="fb__navbar-logo-placeholder">LAST UPDATED: 12/21/2023: 3:05pm MST </h6>
            <h6 className="fb__navbar-logo-placeholder">PICKS MADE TO DATE: {totalPicks} </h6>
            <h2 className = "fb__navbar-logo-placeholder align-text"> NBA PERFORMANCE CHARTS </h2> 
            <div className ="chart-containers">
            <div className ="chart-box">
        <LineChart
            sx={{
            '& .MuiChartsAxis-tickContainer': {
              backgroundColor: "white",
            },
            '.MuiLineElement-root, .MuiMarkElement-root': {
                strokeWidth: 1,
              },
          }}
          xAxis={[{ data: xdata, scaleType: 'point'} ]}
          
          series={[
            {
              data: ydata,
              label: 'Overall Accuracy'
            },
          ]}
          width={400}
          height={300}
        />
        </div>
        <div className ="chart-box">
        <LineChart
            sx={{
            '& .MuiChartsAxis-tickContainer': {
              backgroundColor: "white",
            },
          }}
          xAxis={[{ data: xdata, scaleType: 'point'} ]}
          
          series={[
            {
              data: ptsdata,
              label: 'Pts Accuracy'
            },
            {
                data: astdata,
                label: 'Ast Accuracy'
            },
            {
                data: rebdata,
                label: 'Reb Accuracy'
            },
            {
                data: threedata,
                label: '3s Accuracy'
            },
            {
                data: stldata,
                label: 'stl Accuracy'
            },
          ]}
          width={400}
          height={300}
        />
        </div>
        </div>
        </div>
      );

}


export default Chart