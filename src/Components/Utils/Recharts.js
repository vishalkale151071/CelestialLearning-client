import React, { PureComponent, useEffect, useState } from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    RadialBarChart,
    RadialBar,
    Legend,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    AreaChart,
    Area,
    Sector,
    ComposedChart,
    Line
} from 'recharts';
import Axios from 'axios';
import { Card, CardTitle, CardImg, CardBody, Button } from 'shards-react';
import '../styles/Performance.css';
import { ScatterChart, Scatter, ZAxis } from 'recharts';

// const data = [
//   {
//     name: '1',
//     Correct_Answer: 235,
//     Wrong_Answer: 201,
//   },
//   {
//     name: '2',
//     Correct_Answer: 186,
//     Wrong_Answer: 250,
//   },
//   {
//     name: '3',
//     Correct_Answer: 374,
//     Wrong_Answer: 62,
//   },
//   {
//     name: '4',
//     Correct_Answer: 97,
//     Wrong_Answer: 339,
//   },
//   {
//     name: '5',
//     Correct_Answer: 197,
//     Wrong_Answer: 239,
//   },
//   {
//     name: '6',
//     Correct_Answer: 215,
//     Wrong_Answer: 221,
//   },
//   {
//     name: '7',
//     Correct_Answer: 324,
//     Wrong_Answer: 112,
//   },
//   {
//     name: '8',
//     Correct_Answer: 168,
//     Wrong_Answer: 268,
//   },
//   {
//     name: '9',
//     Correct_Answer: 74,
//     Wrong_Answer: 362,
//   },
//   {
//     name: '10',
//     Correct_Answer: 401,
//     Wrong_Answer: 35,
//   },
// ];

export default function Recharts() {
    const Analysis1 = () => {
        const [chartData, setData] = useState([]);
        useEffect(() => {
            Axios.post('/assessment/performanceAnalysis', {
                courseName: 'encrytion testing'
            }).then(res => {
                console.log('Result : ', res.data);
                setData(res.data.analysisReport);
            });
        }, []);
        return (
            <div>
                <BarChart
                    width={600}
                    height={300}
                    data={chartData}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="sectionName" />
                    <YAxis />
                    <Tooltip />
                    <Legend />

                    <Bar dataKey="percentage" stackId="a" fill="#ffc658" />
                </BarChart>
            </div>
        );
    };

    const Analysis2 = () => {
        const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
        const chartData = [
          {
            name: 'Machine Learning',
            value: 24
          },
          {
            name: 'Bug Bounty',
            value: 31
          },
          {
            name: 'Data Science',
            value: 16
          },
          {
            name: 'Python',
            value: 29
          }
        ]
       
        const RADIAN = Math.PI / 180;
        const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
            const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
            const x = cx + radius * Math.cos(-midAngle * RADIAN);
            const y = cy + radius * Math.sin(-midAngle * RADIAN);

            return (
                <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                    {`${(percent * 100).toFixed(0)}%`}
                </text>
            );
        };
        return (
            <PieChart width={600} height={300}>
                <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Legend />

            </PieChart>
        );
    };

    const Analysis3 = () => {
        const data = [
            {
                name: 'Jan',
                Machine_Learning: 12,
                Data_Science: 8,
                Python: 11
            },
            {
                name: 'Feb',
                Machine_Learning: 7,
                Data_Science: 16,
                Python: 6
            },
            {
                name: 'Mar',
                Machine_Learning: 11,
                Data_Science: 5,
                Python: 17
            },
            {
                name: 'Apr',
                Machine_Learning: 4,
                Data_Science: 11,
                Python: 14
            },
            {
                name: 'May',
                Machine_Learning: 6,
                Data_Science: 18,
                Python: 13
            },
            {
                name: 'Jun',
                Machine_Learning: 14,
                Data_Science: 3,
                Python: 4
            }
        ];

        return (
            <AreaChart
                width={500}
                height={230}
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="Machine_Learning" stackId="1" stroke="#8884d8" fill="#8884d8" />
                <Area type="monotone" dataKey="Data_Science" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                <Area type="monotone" dataKey="Python" stackId="1" stroke="#ffc658" fill="#ffc658" />
                <Legend />

            </AreaChart>
        );
    };

    const Analysis4 = () => {
        const data = [
            { name: 'Correct', value: 400 },
            { name: 'Wrong', value: 300 },
            { name: 'Partially Correct', value: 300 },
            { name: 'Not Attempted', value: 200 }
        ];
        const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

        return (
            <PieChart width={800} height={300}>
                
                <Pie
                    data={data}
                    cx={320}
                    cy={180}
                    startAngle={180}
                    endAngle={0}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Legend />


            </PieChart>
        );
    };

    const Analysis5 = () => {
        const data = [
            {
                name: 'Test 1',
                Your_Score: 87,
                Lowest: 54,
                Highest: 86,
                Average: 73
            },
            {
                name: 'Test 2',
                Your_Score: 69,
                Lowest: 62,
                Highest: 95,
                Average: 82
            },
            {
                name: 'Test 3',
                Your_Score: 91,
                Lowest: 48,
                Highest: 96,
                Average: 83
            },
            {
                name: 'Test 4',
                Your_Score: 54,
                Lowest: 39,
                Highest: 99,
                Average: 76
            },
            {
                name: 'Test 5',
                Your_Score: 78,
                Lowest: 51,
                Highest: 92,
                Average: 79
            },
            {
                name: 'Test 6',
                Your_Score: 88,
                Lowest: 50,
                Highest: 97,
                Average: 74
            }
        ];

        return (
            <ComposedChart
                width={500}
                height={400}
                data={data}
                margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20
                }}
            >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" scale="band" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="Your_Score" fill="#8884d8" stroke="#8884d8" />
                <Bar dataKey="Lowest" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="Highest" stroke="#ff7300" />
                <Scatter dataKey="Average" fill="red" />
            </ComposedChart>
        );
    };

    const Analysis6 = () => {
        const data01 = [
            { hour: '12a', index: 1, value: 170 },
            { hour: '1a', index: 1, value: 180 },
            { hour: '2a', index: 1, value: 150 },
            { hour: '3a', index: 1, value: 120 },
            { hour: '4a', index: 1, value: 200 },
            { hour: '5a', index: 1, value: 300 },
            { hour: '6a', index: 1, value: 400 },
            { hour: '7a', index: 1, value: 200 },
            { hour: '8a', index: 1, value: 100 },
            { hour: '9a', index: 1, value: 150 },
            { hour: '10a', index: 1, value: 160 },
            { hour: '11a', index: 1, value: 400 },
            { hour: '12a', index: 1, value: 400 },
            { hour: '1p', index: 1, value: 400 },
            { hour: '2p', index: 1, value: 166 },
            { hour: '3p', index: 1, value: 145 },
            { hour: '4p', index: 1, value: 150 },
            { hour: '5p', index: 1, value: 170 },
            { hour: '6p', index: 1, value: 180 },
            { hour: '7p', index: 1, value: 165 },
            { hour: '8p', index: 1, value: 130 },
            { hour: '9p', index: 1, value: 140 },
            { hour: '10p', index: 1, value: 170 },
            { hour: '11p', index: 1, value: 180 }
        ];

        const data02 = [
            { hour: '12a', index: 1, value: 160 },
            { hour: '1a', index: 1, value: 180 },
            { hour: '2a', index: 1, value: 150 },
            { hour: '3a', index: 1, value: 120 },
            { hour: '4a', index: 1, value: 200 },
            { hour: '5a', index: 1, value: 300 },
            { hour: '6a', index: 1, value: 100 },
            { hour: '7a', index: 1, value: 200 },
            { hour: '8a', index: 1, value: 100 },
            { hour: '9a', index: 1, value: 150 },
            { hour: '10a', index: 1, value: 160 },
            { hour: '11a', index: 1, value: 160 },
            { hour: '12a', index: 1, value: 180 },
            { hour: '1p', index: 1, value: 144 },
            { hour: '2p', index: 1, value: 166 },
            { hour: '3p', index: 1, value: 145 },
            { hour: '4p', index: 1, value: 150 },
            { hour: '5p', index: 1, value: 160 },
            { hour: '6p', index: 1, value: 180 },
            { hour: '7p', index: 1, value: 165 },
            { hour: '8p', index: 1, value: 130 },
            { hour: '9p', index: 1, value: 140 },
            { hour: '10p', index: 1, value: 160 },
            { hour: '11p', index: 1, value: 180 }
        ];

        const parseDomain = () => [
            0,
            Math.max(
                Math.max.apply(
                    null,
                    data01.map(entry => entry.value)
                ),
                Math.max.apply(
                    null,
                    data02.map(entry => entry.value)
                )
            )
        ];

        const domain = parseDomain();
        const range = [16, 225];

        return (
            <div className="scatr">
                <ScatterChart
                    width={600}
                    height={60}
                    margin={{
                        top: 10,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }}
                >
                    <XAxis
                        type="category"
                        dataKey="hour"
                        interval={0}
                        tick={{ fontSize: 0 }}
                        tickLine={{ transform: 'translate(0, -6)' }}
                    />
                    <YAxis
                        type="number"
                        dataKey="index"
                        name="sunday"
                        height={10}
                        width={80}
                        tick={false}
                        tickLine={false}
                        axisLine={false}
                        label={{ value: 'Sunday', position: 'insideRight' }}
                    />
                    <ZAxis type="number" dataKey="value" domain={domain} range={range} />
                    <Scatter data={data01} fill="#8884d8" />
                </ScatterChart>

                <ScatterChart
                    width={600}
                    height={60}
                    margin={{
                        top: 10,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }}
                >
                    <XAxis
                        type="category"
                        dataKey="hour"
                        name="hour"
                        interval={0}
                        tick={{ fontSize: 0 }}
                        tickLine={{ transform: 'translate(0, -6)' }}
                    />
                    <YAxis
                        type="number"
                        dataKey="index"
                        height={10}
                        width={80}
                        tick={false}
                        tickLine={false}
                        axisLine={false}
                        label={{ value: 'Monday', position: 'insideRight' }}
                    />
                    <ZAxis type="number" dataKey="value" domain={domain} range={range} />
                    <Scatter data={data02} fill="#8884d8" />
                </ScatterChart>

                <ScatterChart
                    width={600}
                    height={60}
                    margin={{
                        top: 10,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }}
                >
                    <XAxis
                        type="category"
                        dataKey="hour"
                        name="hour"
                        interval={0}
                        tick={{ fontSize: 0 }}
                        tickLine={{ transform: 'translate(0, -6)' }}
                    />
                    <YAxis
                        type="number"
                        dataKey="index"
                        height={10}
                        width={80}
                        tick={false}
                        tickLine={false}
                        axisLine={false}
                        label={{ value: 'Tuesday', position: 'insideRight' }}
                    />
                    <ZAxis type="number" dataKey="value" domain={domain} range={range} />
                    <Scatter data={data01} fill="#8884d8" />
                </ScatterChart>

                <ScatterChart
                    width={600}
                    height={60}
                    margin={{
                        top: 10,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }}
                >
                    <XAxis
                        type="category"
                        dataKey="hour"
                        name="hour"
                        interval={0}
                        tick={{ fontSize: 0 }}
                        tickLine={{ transform: 'translate(0, -6)' }}
                    />
                    <YAxis
                        type="number"
                        dataKey="index"
                        height={10}
                        width={80}
                        tick={false}
                        tickLine={false}
                        axisLine={false}
                        label={{ value: 'Wednesday', position: 'insideRight' }}
                    />
                    <ZAxis type="number" dataKey="value" domain={domain} range={range} />
                    <Scatter data={data02} fill="#8884d8" />
                </ScatterChart>

                <ScatterChart
                    width={600}
                    height={60}
                    margin={{
                        top: 10,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }}
                >
                    <XAxis
                        type="category"
                        dataKey="hour"
                        name="hour"
                        interval={0}
                        tick={{ fontSize: 0 }}
                        tickLine={{ transform: 'translate(0, -6)' }}
                    />
                    <YAxis
                        type="number"
                        dataKey="index"
                        height={10}
                        width={80}
                        tick={false}
                        tickLine={false}
                        axisLine={false}
                        label={{ value: 'Thursday', position: 'insideRight' }}
                    />
                    <ZAxis type="number" dataKey="value" domain={domain} range={range} />
                    <Scatter data={data01} fill="#8884d8" />
                </ScatterChart>

                <ScatterChart
                    width={600}
                    height={60}
                    margin={{
                        top: 10,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }}
                >
                    <XAxis
                        type="category"
                        dataKey="hour"
                        name="hour"
                        interval={0}
                        tick={{ fontSize: 0 }}
                        tickLine={{ transform: 'translate(0, -6)' }}
                    />
                    <YAxis
                        type="number"
                        dataKey="index"
                        height={10}
                        width={80}
                        tick={false}
                        tickLine={false}
                        axisLine={false}
                        label={{ value: 'Friday', position: 'insideRight' }}
                    />
                    <ZAxis type="number" dataKey="value" domain={domain} range={range} />
                    <Scatter data={data02} fill="#8884d8" />
                </ScatterChart>

                <ScatterChart
                    width={600}
                    height={60}
                    margin={{
                        top: 10,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }}
                >
                    <XAxis type="category" dataKey="hour" name="hour" interval={0} tickLine={{ transform: 'translate(0, -6)' }} />
                    <YAxis
                        type="number"
                        dataKey="index"
                        height={10}
                        width={80}
                        tick={false}
                        tickLine={false}
                        axisLine={false}
                        label={{ value: 'Saturday', position: 'insideRight' }}
                    />
                    <ZAxis type="number" dataKey="value" domain={domain} range={range} />
                    <Scatter data={data01} fill="#8884d8" />
                    
                </ScatterChart>
            </div>
        );
    };

    return (
        <div>
            <Card className="PerC1">
                <CardBody>
                    <CardTitle>Marks Scored </CardTitle>
                    <Analysis1 />
                </CardBody>
            </Card>
            <Card className="PerC2">
                <CardBody className="PerC2body">
                    <CardTitle className="PerC2title">Course Completion</CardTitle>
                    <Analysis2 />
                </CardBody>
            </Card>
            <Card className="PerC3">
                <CardBody>
                    <CardTitle>Modules Completed</CardTitle>
                    <Analysis3 />
                </CardBody>
            </Card>
            <Card className="PerC4">
                <CardBody>
                    <CardTitle>Test Summary</CardTitle>
                    <Analysis4 />
                </CardBody>
            </Card>
            <Card className="PerC5">
                <CardBody>
                    <CardTitle>Progress Report</CardTitle>
                    <Analysis5 />
                </CardBody>
            </Card>
            <Card className="PerC6">
                <CardBody>
                    <CardTitle>Time Spent on Platorm</CardTitle>
                    <Analysis6 />
                </CardBody>
            </Card>
        </div>
    );
}

// export default class Example extends PureComponent {
//   static demoUrl = 'https://codesandbox.io/s/stacked-bar-chart-s47i2';

//   render() {
//     return (
//         <BarChart
//           width={500}
//           height={300}
//           data={data}
//           margin={{
//             top: 20,
//             right: 30,
//             left: 20,
//             bottom: 5,
//           }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Bar dataKey="Wrong_Answer" stackId="a" fill="red" />
//           <Bar dataKey="Correct_Answer" stackId="a" fill="green" />
//         </BarChart>
//     );
//   }
// }
