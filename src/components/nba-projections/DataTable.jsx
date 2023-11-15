import React from 'react'
import JsonData from './data.json'
function DataTable(){
	const DisplayData=JsonData.map(
		(info)=>{
			return(
				<tr>
					<td>{info}</td>
					<td>{info.min}</td>
					<td>{info.city}</td>
				</tr>
			)
		}
	)

	return(
		<div>
			<table class="table table-striped">
				<thead>
					<tr>
					<th>PLAYER</th>
					<th>MIN</th>
					<th>FGA</th>
                    <th>FGM</th>
					<th>FG3A</th>
                    <th>FG3M</th>
                    <th>FTA</th>
                    <th>FTM</th>
					<th>FG_PCT</th>
                    <th>FG3_PCT</th>
                    <th>FT_PCT</th>
					<th>REB</th>
                    <th>AST</th>
                    <th>STL</th>
                    <th>BLK</th>
                    <th>PF</th>
                    <th>PTS</th>
					</tr>
				</thead>
				<tbody>
				
					
					{DisplayData}
					
				</tbody>
			</table>
			
		</div>
	)
}

export default DataTable;
