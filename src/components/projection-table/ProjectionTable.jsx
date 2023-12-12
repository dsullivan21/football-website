import React, {useState, useEffect} from "react";
import './projectiontable.css';
import customData from './data.json';
import { MDBDataTable } from 'mdbreact';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { convertLegacyOperators } from "@mui/x-data-grid/internals";
import { minWidth } from "@mui/system";

const ProjectionTable = () => {

    const [data,setData]= useState([]);
    const [rows1, setRows] = useState([]);
    const [col, setCol] = useState([]);

    const tableData = {

    }

    useEffect(() => {
      //fetch('public/data.json')
      //  .then(response => response.json())
      //  .then((json) => setData(json))
      var data1 = require('./data.json');
      setData(data1);
      console.log(data);
      gatherData();
      gatherNBAData();
    
      }, [data]);


    function fixStyles(){

      var items = document.getElementsByClassName('MuiDataGrid-cellContent');
      
      for (let i = 0; i < items.length; i++){
        console.log(items[i].title);
        if (items[i].title == "OVER"){
          console.log(items[i].parentNode);
          items[i].parentNode.style.backgroundColor = "green";
          items[i].style.color = "white";
          items[i].style.fontWeight = "bold";
        }
        else if (items[i].title == "UNDER"){
          items[i].parentNode.style.backgroundColor = "red";
          items[i].style.color = "white";
          items[i].style.fontWeight = "bold";
          console.log(items[i].parentNode);
        }
        
      }

      
    }
    
    function gatherNBAData() {

        var rows = [

        ];
        var count = 0;
        for (const d in data[0]){
            var name = d;
            
            if (data[0][d] != "N/A"){
                var entry = {
                    id: count,
                    "Player": name,
                    "Team": data[0][d]["Team"],
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

        var columns = [
            {
                label: 'Player',
                field: 'Player',
                sort: 'asc',
                width: 200
              },
              {
                label: 'Team',
                field: 'Team',
                sort: 'asc',
                width: 80
              },
              {
                label: 'MIN',
                field: 'MIN',
                sort: 'asc',
                type: "number",
                width: 80
              },
              {
                label: 'FGA',
                field: 'FGA',
                sort: 'asc',
                type: "number",
                width: 80
              },
              {
                label: 'FGM',
                field: 'FGM',
                sort: 'asc',
                type: "number",
                width: 80
              },
              {
                label: 'FG %',
                field: 'FG %',
                sort: 'asc',
                type: "number",
                width: 80
              },
              {
                label: '3PTA',
                field: '3PTA',
                sort: 'asc',
                type: "number",
                width: 80
              },
              {
                label: '3PTM',
                field: '3PTM',
                sort: 'asc',
                type: "number",
                width: 80
              },
              {
                label: 'FD 3s',
                field: 'FD 3s',
                sort: 'asc',
                type: "number",
                width: 80
              },
              {
                label: 'Pick',
                field: 'Pick3s',
                sort: 'asc',
                width: 80
              },
              {
                label: '3FG %',
                field: '3FG %',
                sort: 'asc',
                type: "number",
                width: 80
              },
              {
                label: 'FTA',
                field: 'FTA',
                sort: 'asc',
                type: "number",
                width: 80
              },
              {
                label: 'FTM',
                field: 'FTM',
                type: "number",
                sort: 'asc',
                width: 80
              },
              {
                label: 'FT %',
                field: 'FT %',
                sort: 'asc',
                type: "number",
                width: 80
              },
              {
                label: 'AST',
                field: 'AST',
                sort: 'asc',
                type: "number",
                width: 80
              },
              {
                label: 'FD AST',
                field: 'FD AST',
                sort: 'asc',
                type: "number",
                width: 80
              },
              {
                label: 'PICK',
                field: 'astPick',
                sort: 'asc',
                width: 80
              },
              {
                label: 'REB',
                field: 'REB',
                sort: 'asc',
                type: "number",
                width: 80
              },
              {
                label: 'FD REB',
                field: 'FD RB',
                sort: 'asc',
                type: "number",
                width: 80
              },
              {
                label: 'PICK',
                field: 'rebPick',
                sort: 'asc',
                width: 80
              },
              {
                label: 'STL',
                field: 'STL',
                sort: 'asc',
                type: "number",
                width: 80
              },
              {
                label: 'FD STL',
                field: 'FD STL',
                sort: 'asc',
                type: "number",
                width: 80
              },
              {
                label: 'PICK',
                field: 'stlPick',
                sort: 'asc',
                width: 80
              },
              {
                label: 'BLK',
                field: 'BLK',
                sort: 'asc',
                type: "number",
                width: 80
              },
              {
                label: 'FD BLK',
                field: 'FD BLK',
                sort: 'asc',
                type: "number",
                width: 80
              },
              {
                label: 'PICK',
                field: 'blkPick',
                sort: 'asc',
                width: 80
              },
              {
                label: 'PF',
                field: 'PF',
                sort: 'asc',
                type: "number",
                width: 80
              },
              {
                label: 'PTS',
                field: 'PTS',
                sort: 'asc',
                type: "number",
                width: 80
              },
              {
                label: 'FD PTS',
                field: 'FD PTS',
                sort: 'asc',
                type: "number",
                width: 80
              },
              {
                label: 'PICK',
                field: 'ptsPick',
                sort: 'asc',
                width: 80
              },
        ];
        Object.assign(tableData, {columns});
        Object.assign(tableData, {rows});

        setCol(columns);
        setRows(rows);

        console.log(tableData)

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
                width: 150
              },
              {
                label: 'Receptions',
                field: 'rec',
                sort: 'asc',
                width: 150
              }
        ];
        Object.assign(tableData, {columns});
        Object.assign(tableData, {rows});

        setCol(columns);
        setRows(rows);

        console.log(tableData)
    }

    return (
        <div className = "fb__projection-table">
            <h2 className = "table-header"> Projections </h2>
            <DataGrid
                rows={rows1}
                columns={col}
                initialState={{
                pagination: {
                    paginationModel: { page: 0, pageSize: 10 },
                },
                }}
                pageSizeOptions={[10, 25, 50]}
                checkboxSelection
            />
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