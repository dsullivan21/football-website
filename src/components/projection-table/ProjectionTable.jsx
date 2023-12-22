import React, {useState, useEffect} from "react";
import './projectiontable.css';
import customData from './data.json';
import { MDBDataTable } from 'mdbreact';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { convertLegacyOperators } from "@mui/x-data-grid/internals";
import { minWidth } from "@mui/system";
import clsx from 'clsx';
import Box from '@mui/material/Box';


const ProjectionTable = () => {

    const [data,setData]= useState([]);
    const [bb, setbb] = useState([]);
    const [rows1, setRows] = useState([]);
    const [col, setCol] = useState([]);
    const [correct, setCorrect] = useState();
    const [rows2, setRows2] = useState([]);
    const [cols2, setCols2] = useState([]);
    const [rows3, setRows3] = useState([]);
    const [cols3, setCols3] = useState([]);
    const [rows4, setRows4] = useState([]);
    const [cols4, setCols4] = useState([]);
    const tableData = {

    };
    const table2Data = {

    };

    useEffect(() => {
      //fetch('public/data.json')
      //  .then(response => response.json())
      //  .then((json) => setData(json))
      var data1 = require('./data.json');
      var data2 = require('./bets.json');
      setData(data1);
      setbb(data2);
      //console.log(data);
      gatherData();
      gatherNBAData();
     // fixStyles();
      }, [data]);
    
    function gatherNBAData() {

        var rows = [

        ];
        var count = 0;
        var r2 = [];
        var r3 =[];
        var r4=[];
        for (let b of Object.entries(bb)){

          console.log(b);
          var entry2 = {};
          if (b[0] == "maxpts" || b[0] == "minpts"){
            for (let d in data[0]){
              for (let n in b[1]){
             //   console.log(n);
                if (d == b[1][n]){
                  entry2 = {
                    id: count,
                    "Player": d,
                    "Team": data[0][d]["team"],
                    "PTS" : data[0][d]["PTS"],
                    "FD PTS": data[0][d]["fanduel_pts"],
                    "ptsPick": data[0][d]["pick_pts"]
                };
                r2.push(entry2);
                count = count+1;
                break;
              }

              }
          }
        }
        if (b[0] == "maxast" || b[0] == "minast"){
          for (let d in data[0]){
            for (let n in b[1]){
             // console.log(n);
              if (d == b[1][n]){
                entry2 = {
                  id: count,
                  "Player": d,
                  "Team": data[0][d]["team"],
                  "AST" : data[0][d]["AST"],
                  "FD AST": data[0][d]["fanduel_ast"],
                  "astPick": data[0][d]["pick_ast"]
              };
              r3.push(entry2);
              count = count+1;
              break;
            }

            }
        }
      }
      if (b[0] == "maxreb" || b[0] == "minreb"){
        for (let d in data[0]){
          for (let n in b[1]){
            if (d == b[1][n]){
              console.log(d);
              var entry4 = {
                id: count,
                "Player": d,
                "Team": data[0][d]["team"],
                "REB" : data[0][d]["REB"],
                "FD REB": data[0][d]["fanduel_reb"],
                "rebPick": data[0][d]["pick_reb"]
            };
            r4.push(entry4);
            count = count+1;
            break;
          }

          }
      }
    }
      }
      //console.log(r2);
        for (const d in data[0]){
            var name = d;
            
            if (data[0][d] != "N/A" || data[0][d] != null ){

                if (data[0][d] == "N/A" || data[0][d] == null){
             //     console.log(data[0][d], d);
                } else{
             //     console.log(data[0][d]);
                var entry = {
                    id: count,
                    "Player": name,
                    "Team": data[0][d]["team"],
                    "MIN": data[0][d]["MIN"],
                    "FGA": data[0][d]["FGA"],
                    "FGM": data[0][d]["FGM"],
                    "FG %": data[0][d]["FG_PCT"],
                    "3PTA": data[0][d]["FG3A"],
                    "3PTM": data[0][d]["FG3M"],
                    "FD 3s": data[0][d]["fanduel_threes"],
                    "Pick3s": data[0][d]["pick_3s"],
                    "3FG %": data[0][d]["FG3_PCT"],
                    "FTA": data[0][d]["FTA"],
                    "FTM": data[0][d]["FTM"],
                    "FT %": data[0][d]["FT_PCT"],
                    "AST": data[0][d]["AST"],
                    "FD AST": data[0][d]["fanduel_ast"],
                    "astPick": data[0][d]["pick_ast"],
                    "REB": data[0][d]["REB"],
                    "FD RB": data[0][d]["fanduel_reb"],
                    "rebPick": data[0][d]["pick_reb"],
                    "STL": data[0][d]["STL"],
                    "FD STL": data[0][d]["fanduel_stl"],
                    "stlPick": data[0][d]["pick_stl"],
                    "BLK": data[0][d]["BLK"],
                    "FD BLK": data[0][d]["fanduel_blk"],
                    "blkPick": data[0][d]["pick_blk"],
                    "PF": data[0][d]["PF"],
                    "PTS": data[0][d]["PTS"],
                    "FD PTS": data[0][d]["fanduel_pts"],
                    "ptsPick": data[0][d]["pick_pts"],
                }

                rows.push(entry);
                count++;

                }
                
            }
        }

        var columns = [
            {
                label: 'Player',
                field: 'Player',
                sort: 'asc',
                width: 200,
                headerClassName: 'super-app-theme--header',
              },
              {
                label: 'Team',
                field: 'Team',
                sort: 'asc',
                headerClassName: 'super-app-theme--header',
                width: 80
              },
              {
                label: 'MIN',
                field: 'MIN',
                sort: 'asc',
                type: "number",
                headerClassName: 'super-app-theme--header',

                width: 80
              },
              {
                label: 'FGA',
                field: 'FGA',
                sort: 'asc',
                type: "number",
                headerClassName: 'super-app-theme--header',

                width: 80
              },
              {
                label: 'FGM',
                field: 'FGM',
                sort: 'asc',
                type: "number",
                headerClassName: 'super-app-theme--header',

                width: 80
              },
              {
                label: 'FG %',
                field: 'FG %',
                sort: 'asc',
                type: "number",
                headerClassName: 'super-app-theme--header',

                width: 80
              },
              {
                label: '3PTA',
                field: '3PTA',
                sort: 'asc',
                type: "number",
                headerClassName: 'super-app-theme--header',

                width: 80
              },
              {
                label: '3PTM',
                field: '3PTM',
                sort: 'asc',
                type: "number",
                headerClassName: 'super-app-theme--header',

                width: 80,
                cellClassName: "proj",
              },
              {
                label: 'FD 3s',
                field: 'FD 3s',
                sort: 'asc',
                type: "number",
                headerClassName: 'super-app-theme--header',

                width: 80,
                cellClassName: "fd",
              },
              {
                label: 'Pick',
                field: 'Pick3s',
                headerClassName: 'super-app-theme--header',

                sort: 'asc',
                width: 80,
                cellClassName: (params) => {
                  if (params.value == null) {
                    return '';
                  }
            
                  return clsx('super-app', {
                    negative: params.value == "UNDER",
                    positive: params.value == "OVER",
                  });
                },
              },
              {
                label: '3FG %',
                field: '3FG %',
                sort: 'asc',
                type: "number",
                headerClassName: 'super-app-theme--header',

                width: 80
              },
              {
                label: 'FTA',
                field: 'FTA',
                sort: 'asc',
                type: "number",
                headerClassName: 'super-app-theme--header',

                width: 80
              },
              {
                label: 'FTM',
                field: 'FTM',
                headerClassName: 'super-app-theme--header',

                type: "number",
                sort: 'asc',
                width: 80
              },
              {
                label: 'FT %',
                field: 'FT %',
                sort: 'asc',
                headerClassName: 'super-app-theme--header',

                type: "number",
                width: 80
              },
              {
                label: 'AST',
                field: 'AST',
                sort: 'asc',
                headerClassName: 'super-app-theme--header',

                type: "number",
                width: 80,
                cellClassName: "proj",
              },
              {
                label: 'FD AST',
                field: 'FD AST',
                sort: 'asc',
                type: "number",
                headerClassName: 'super-app-theme--header',

                width: 80,
                cellClassName: "fd",
              },
              {
                label: 'PICK',
                field: 'astPick',
                headerClassName: 'super-app-theme--header',

                sort: 'asc',
                width: 80,
                cellClassName: (params) => {
                  if (params.value == null) {
                    return '';
                  }
            
                  return clsx('super-app', {
                    negative: params.value == "UNDER",
                    positive: params.value == "OVER",
                  });
                },
              },
              {
                label: 'REB',
                field: 'REB',
                sort: 'asc',
                type: "number",
                headerClassName: 'super-app-theme--header',

                width: 80,
                cellClassName: "proj",
              },
              {
                label: 'FD REB',
                field: 'FD RB',
                sort: 'asc',
                type: "number",
                headerClassName: 'super-app-theme--header',

                width: 80,
                cellClassName: "fd",
              },
              {
                label: 'PICK',
                field: 'rebPick',
                sort: 'asc',
                headerClassName: 'super-app-theme--header',

                width: 80,
                cellClassName: (params) => {
                  if (params.value == null) {
                    return '';
                  }
            
                  return clsx('super-app', {
                    negative: params.value == "UNDER",
                    positive: params.value == "OVER",
                  });
                },
              },
              {
                label: 'STL',
                field: 'STL',
                sort: 'asc',
                headerClassName: 'super-app-theme--header',

                type: "number",
                width: 80,
                cellClassName: "proj",
              },
              {
                label: 'FD STL',
                field: 'FD STL',
                sort: 'asc',
                type: "number",
                headerClassName: 'super-app-theme--header',

                width: 80,
                cellClassName: "fd",
              },
              {
                label: 'PICK',
                field: 'stlPick',
                sort: 'asc',
                width: 80,
                headerClassName: 'super-app-theme--header',

                cellClassName: (params) => {
                  if (params.value == null) {
                    return '';
                  }
            
                  return clsx('super-app', {
                    negative: params.value == "UNDER",
                    positive: params.value == "OVER",
                  });
                },
              },
              {
                label: 'BLK',
                headerClassName: 'super-app-theme--header',

                field: 'BLK',
                sort: 'asc',
                type: "number",
                width: 80,
                
                cellClassName: "proj",
              },
              {
                label: 'FD BLK',
                field: 'FD BLK',
                headerClassName: 'super-app-theme--header',

                sort: 'asc',
                type: "number",
                width: 80,
                cellClassName: "fd",
              },
              {
                label: 'PICK',
                field: 'blkPick',
                headerClassName: 'super-app-theme--header',

                sort: 'asc',
                width: 80,
                cellClassName: (params) => {
                  if (params.value == null) {
                    return '';
                  }
            
                  return clsx('super-app', {
                    negative: params.value == "UNDER",
                    positive: params.value == "OVER",
                  });
                },
              },
              {
                label: 'PF',
                field: 'PF',
                sort: 'asc',
                headerClassName: 'super-app-theme--header',

                type: "number",
                width: 80
              },
              {
                label: 'PTS',
                field: 'PTS',
                headerClassName: 'super-app-theme--header',

                sort: 'asc',
                type: "number",
                width: 80,
                cellClassName: "proj",
              },
              {
                label: 'FD PTS',    headerClassName: 'super-app-theme--header',
                field: 'FD PTS',
                sort: 'asc',
                type: "number",
                width: 80,
                cellClassName: "fd",
              },
              {
                label: 'PICK',
                field: 'ptsPick',
                sort: 'asc',
                headerClassName: 'super-app-theme--header',

                width: 80,
                cellClassName: (params) => {
                  if (params.value == null) {
                    return '';
                  }
            
                  return clsx('super-app', {
                    negative: params.value == "UNDER",
                    positive: params.value == "OVER",
                  });
                },
              },
        ];
        

        var cols2 = [
          {
            label: 'Player',
            field: 'Player',
            sort: 'asc',
            width: 180,
            headerClassName: 'super-app-theme--header',
          },
          {
            label: 'Team',
            field: 'Team',
            sort: 'asc',
            headerClassName: 'super-app-theme--header',
            width: 80
          },{
            label: 'PTS',
            field: 'PTS',
            headerClassName: 'super-app-theme--header',

            sort: 'asc',
            type: "number",
            width: 80,
            cellClassName: "proj",
          },
          {
            label: 'FD PTS',    headerClassName: 'super-app-theme--header',
            field: 'FD PTS',
            sort: 'asc',
            type: "number",
            width: 80,
            cellClassName: "fd",
          },
          {
            label: 'PICK',
            field: 'ptsPick',
            sort: 'asc',
            headerClassName: 'super-app-theme--header',

            width: 80,
            cellClassName: (params) => {
              if (params.value == null) {
                return '';
              }
        
              return clsx('super-app', {
                negative: params.value == "UNDER",
                positive: params.value == "OVER",
              });
            },
          },
        ];
        var cols4 = [
          {
            label: 'Player',
            field: 'Player',
            sort: 'asc',
            width: 180,
            headerClassName: 'super-app-theme--header',
          },
          {
            label: 'Team',
            field: 'Team',
            sort: 'asc',
            headerClassName: 'super-app-theme--header',
            width: 80
          },{
            label: 'REB',
            field: 'REB',
            headerClassName: 'super-app-theme--header',

            sort: 'asc',
            type: "number",
            width: 80,
            cellClassName: "proj",
          },
          {
            label: 'FD REB',    headerClassName: 'super-app-theme--header',
            field: 'FD REB',
            sort: 'asc',
            type: "number",
            width: 80,
            cellClassName: "fd",
          },
          {
            label: 'PICK',
            field: 'rebPick',
            sort: 'asc',
            headerClassName: 'super-app-theme--header',

            width: 80,
            cellClassName: (params) => {
              if (params.value == null) {
                return '';
              }
        
              return clsx('super-app', {
                negative: params.value == "UNDER",
                positive: params.value == "OVER",
              });
            },
          },
        ];

        var cols3 = [
          {
            label: 'Player',
            field: 'Player',
            sort: 'asc',
            width: 180,
            headerClassName: 'super-app-theme--header',
          },
          {
            label: 'Team',
            field: 'Team',
            sort: 'asc',
            headerClassName: 'super-app-theme--header',
            width: 80
          },{
            label: 'AST',
            field: 'AST',
            headerClassName: 'super-app-theme--header',

            sort: 'asc',
            type: "number",
            width: 80,
            cellClassName: "proj",
          },
          {
            label: 'FD AST',    headerClassName: 'super-app-theme--header',
            field: 'FD AST',
            sort: 'asc',
            type: "number",
            width: 80,
            cellClassName: "fd",
          },
          {
            label: 'PICK',
            field: 'astPick',
            sort: 'asc',
            headerClassName: 'super-app-theme--header',

            width: 80,
            cellClassName: (params) => {
              if (params.value == null) {
                return '';
              }
        
              return clsx('super-app', {
                negative: params.value == "UNDER",
                positive: params.value == "OVER",
              });
            },
          },
        ];



        Object.assign(tableData, {columns});
        Object.assign(tableData, {rows});

        console.log(r4);
        setCols2(cols2);
        setRows2(r2);
        setCols3(cols3);
        setRows3(r3);
        setCols4(cols4);
        setRows4(r4);
        setCol(columns);
        setRows(rows);

      //  console.log(tableData)

      }
    
    function titleSorting (a, b) {
       return a - b;
    } 

    function gatherData() {

        var rows = [

        ];

        var count = 0;
        for (const key in data){
            console.log(data[key])
            var arr = data[key].ConfInterval;
            var first = null;
            var second = null;
            if (arr != null){
                var count1 = 0;
                for (var a in arr){
                    if (count1 == 1){
                        first = arr[a].toFixed(2);
                    }else if (count1 == 2){
                        second = arr[a].toFixed(2);
                    }
                    count1++;
                }
                var interval = first.toString() + " - " +second.toString();
            }
                var entry = {
                    id: count,
                    name: key,
                    rec_yds: parseFloat(data[key].RecYards).toFixed(2),
                    rush_yds: parseFloat(data[key].RushYards).toFixed(2),
                    tds: parseFloat(data[key].RecTds).toFixed(2),
                    rec: parseFloat(data[key].Receptions).toFixed(2),
                    yds_conf: interval
                }
            rows.push(entry)
            count++;
        }

        var columns = [
            {
                label: 'Name',
                field: 'name',
                sort: 'asc',
                width: 250
              },
              {
                label: 'Rec Yds',
                field: 'rec_yds',
                sort: 'asc',
                width: 150
              },
              {
                label: 'Conf',
                field: 'yds_conf',
                sort: 'asc',
                width: 200
              },
              {
                label: 'Rush Yds',
                field: 'rush_yds',
                sort: 'asc',
                width: 150
              },
              {
                label: 'Tds',
                field: 'tds',
                sort: 'asc',
                width: 100
              },
              {
                label: 'Receptions',
                field: 'rec',
                sort: 'asc',
                width: 100
              }
        ];
        Object.assign(tableData, {columns});
        Object.assign(tableData, {rows});

        setCol(columns);
        setRows(rows);

   //     console.log(tableData)
    }

    return (
        <div className = "container">
        <div className = "fb__projection-table">
          <div className = "box-headers">
        <h2 className = "table-header"> BEST POINTS BETS </h2>
        <h2 className = "table-header"> BEST ASSIST BETS </h2>
        <h2 className = "table-header"> BEST REBOUND BETS </h2>
        </div>
          <div className = "fb__projection-top">
             <Box
            sx={{
              width: '30%',
              '& .super-app-theme--cell': {
                backgroundColor: 'rgba(224, 183, 60, 0.55)',
                color: '#1a3e72',
                fontWeight: '600',
              },
              '& .super-app.negative': {
                backgroundColor: '#ffb3b2',
                color: 'black',
                fontWeight: '600',
              },
              '& .super-app.positive': {
                backgroundColor: '#aaf0c9',
                color: '#black',
                fontWeight: '600',
              },
              '& .fd': {
                backgroundColor: '#d9f4ff',
                color: 'black',
                fontWeight: '500',
                textAlign: "center"
              },
              '& .proj': {
                color: 'black',
                fontWeight: '600',
                textAlign: "center",
                backgroundColor: "#ffffed"
              },
              
              '& .super-app-theme--header':{
                fontWeight: 'bold',
                color: "white"
              }

            }}>
            <DataGrid
                rows={rows2}
                columns={cols2}
                initialState={{
                pagination: {
                    paginationModel: { page: 0, pageSize: 10 },
                },
                }}
                pageSizeOptions={[10, 25, 50]}
                checkboxSelection
            />
            </Box>
             <Box
            sx={{
              width: '30%',
              '& .super-app-theme--cell': {
                backgroundColor: 'rgba(224, 183, 60, 0.55)',
                color: '#1a3e72',
                fontWeight: '600',
              },
              '& .super-app.negative': {
                backgroundColor: '#ffb3b2',
                color: 'black',
                fontWeight: '600',
              },
              '& .super-app.positive': {
                backgroundColor: '#aaf0c9',
                color: '#black',
                fontWeight: '600',
              },
              '& .fd': {
                backgroundColor: '#d9f4ff',
                color: 'black',
                fontWeight: '500',
                textAlign: "center"
              },
              '& .proj': {
                color: 'black',
                fontWeight: '600',
                textAlign: "center",
                backgroundColor: "#ffffed"
              },
              
              '& .super-app-theme--header':{
                fontWeight: 'bold',
                color: "white"
              }

            }}>
            <DataGrid
                rows={rows3}
                columns={cols3}
                initialState={{
                pagination: {
                    paginationModel: { page: 0, pageSize: 10 },
                },
                }}
                pageSizeOptions={[10, 25, 50]}
                checkboxSelection
            />
            </Box>
            <Box
            sx={{
              width: '30%',
              '& .super-app-theme--cell': {
                backgroundColor: 'rgba(224, 183, 60, 0.55)',
                color: '#1a3e72',
                fontWeight: '600',
              },
              '& .super-app.negative': {
                backgroundColor: '#ffb3b2',
                color: 'black',
                fontWeight: '600',
              },
              '& .super-app.positive': {
                backgroundColor: '#aaf0c9',
                color: '#black',
                fontWeight: '600',
              },
              '& .fd': {
                backgroundColor: '#d9f4ff',
                color: 'black',
                fontWeight: '500',
                textAlign: "center"
              },
              '& .proj': {
                color: 'black',
                fontWeight: '600',
                textAlign: "center",
                backgroundColor: "#ffffed"
              },
              
              '& .super-app-theme--header':{
                fontWeight: 'bold',
                color: "white"
              }

            }}>
            <DataGrid
                rows={rows4}
                columns={cols4}
                initialState={{
                pagination: {
                    paginationModel: { page: 0, pageSize: 10 },
                },
                }}
                pageSizeOptions={[10, 25, 50]}
                checkboxSelection
            />
            </Box>
            </div>
            <h2 className = "table-header">ALL PROJECTIONS </h2>
            <Box
            sx={{
              width: '100%',
              '& .super-app-theme--cell': {
                backgroundColor: 'rgba(224, 183, 60, 0.55)',
                color: '#1a3e72',
                fontWeight: '600',
              },
              '& .super-app.negative': {
                backgroundColor: '#ffb3b2',
                color: 'black',
                fontWeight: '600',
              },
              '& .super-app.positive': {
                backgroundColor: '#aaf0c9',
                color: '#black',
                fontWeight: '600',
              },
              '& .fd': {
                backgroundColor: '#d9f4ff',
                color: 'black',
                fontWeight: '500',
                textAlign: "center"
              },
              '& .proj': {
                color: 'black',
                fontWeight: '600',
                textAlign: "center",
                backgroundColor: "#ffffed"
              },
              
              '& .super-app-theme--header':{
                fontWeight: 'bold',
                color: "white"
              }

            }}>
            <DataGrid
                rows={rows1}
                columns={col}
                initialState={{
                pagination: {
                    paginationModel: { page: 0, pageSize: 50 },
                },
                }}
                pageSizeOptions={[10, 25, 50]}
                checkboxSelection
            />
            </Box>
        </div>
        </div>
    )

}

export default ProjectionTable

/*
<table>
                <tr>
                    <th>Name</th>
                    <th>Rec yds</th>
                    <th>Rec Yds Conf</th>
                    <th>Rush Yds</th>
                    <th>Rec</th>
                    <th>Tds</th>
                </tr>
            {Object.keys(data).map((key, i) => (
                <tr className = "fb__projection-table-item"> 
                    <td> {key} </td>
                    {data[key].RecYards ? <td> {data[key].RecYards.toFixed(2)}</td>  : <td></td>} 
                    {data[key].ConfInterval ? <td> {data[key].ConfInterval[1].toFixed(2)} - {data[key].ConfInterval[2].toFixed(2)}</td>  : <td></td>} 
                    {data[key].RushYards ? <td> {data[key].RushYards.toFixed(2)}</td>  : <td></td>} 
                    {data[key].Receptions ? <td> {data[key].Receptions.toFixed(2)}</td>  : <td></td>} 
                    {data[key].RushTds ? <td> {(parseFloat(data[key].RecTds.toFixed(2)) + parseFloat(data[key].RushTds.toFixed(2))).toFixed(2) }</td>  : <td>{data[key].RecTds.toFixed(2)}</td>} 
                </tr>
            ))}
            </table>

*/