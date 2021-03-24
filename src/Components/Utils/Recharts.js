import React, { PureComponent, useEffect,useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,RadialBarChart, RadialBar,  Legend, ResponsiveContainer,PieChart,Pie,Cell } from 'recharts';
import Axios from 'axios';

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
          setData(res.data.analysisReport)
      });
    },[]);
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
                  bottom: 5,
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
   }

    
  const Analysis2 = () => {
      const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
      const [chartData, setData] = useState([]);
      useEffect(() => {
        Axios.post('/analysis/subscriberVsCourse', {
        }).then(res => {
            console.log('Result : ', res.data);
            setData(res.data.data)
        });
      },[]);
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
       
          <PieChart width={400} height={400}>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        
      );
  };

  
   return(
     <div>
        <Analysis1/>
        <Analysis2/>
      
     </div>
   )
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
