import React, { Component } from 'react';
import {  
    BarChart,
    Bar, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    Legend
} from 'recharts'

// import { Container } from './styles';

export default class BarCharts extends Component {

   render(){

    const data = [
        {name: 'Jan', uv: 4000, pv: 2400, amt: 2400, value: 0},
        {name: 'Fev', uv: 150000, pv: 200000, amt: 2210, value: 50000},
        {name: 'Mar', uv: 2000, pv: 9800, amt: 2290, value: 100000},
        {name: 'Abr', uv: 100000, pv: 150000, amt: 2000, value: 150000},
        {name: 'Mai', uv: 200000, pv: 4800, amt: 2181, value: 200000},
        {name: 'Jun', uv: 2390, pv: 3800, amt: 2500, value: 250000},
        {name: 'Jul', uv: 100000, pv: 150000, amt: 2100},
        {name: 'Ago', uv: 200000, pv: 4800, amt: 2181},
        {name: 'Set', uv: 150000, pv: 100000, amt: 2500},
        {name: 'Out', uv: 3490, pv: 4300, amt: 2100},
        {name: 'Nov', uv: 150000, pv: 200000, amt: 2181},
        {name: 'Dez', uv: 100000, pv: 3800, amt: 2500},

  ];
    return (
        <BarChart 
            width={800} 
            height={300} 
            data={data}
            margin={{top: 20, right: 30, left: 20, bottom: 5}}
        >
            <CartesianGrid strokeDasharray="2 4"/>
            <XAxis dataKey="name"/>
            <YAxis dataKey='value'/>
            <Tooltip/>
            <Legend />
            <Bar dataKey="uv" fill="#8884d8" />
            <Bar dataKey="pv" fill="#82ca9d" />
        </BarChart>
    );
    }
}
