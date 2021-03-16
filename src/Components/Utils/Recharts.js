import React, { PureComponent, useEffect } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Axios from 'axios';

const data = [
  {
    name: '1',
    Correct_Answer: 235,
    Wrong_Answer: 201,
  },
  {
    name: '2',
    Correct_Answer: 186,
    Wrong_Answer: 250,
  },
  {
    name: '3',
    Correct_Answer: 374,
    Wrong_Answer: 62,
  },
  {
    name: '4',
    Correct_Answer: 97,
    Wrong_Answer: 339,
  },
  {
    name: '5',
    Correct_Answer: 197,
    Wrong_Answer: 239,
  },
  {
    name: '6',
    Correct_Answer: 215,
    Wrong_Answer: 221,
  },
  {
    name: '7',
    Correct_Answer: 324,
    Wrong_Answer: 112,
  },
  {
    name: '8',
    Correct_Answer: 168,
    Wrong_Answer: 268,
  },
  {
    name: '9',
    Correct_Answer: 74,
    Wrong_Answer: 362,
  },
  {
    name: '10',
    Correct_Answer: 401,
    Wrong_Answer: 35,
  },
];



export default function Recharts() {

  useEffect(() => {
    Axios.post('/assessment/performanceAnalysis', {
      courseName: 'Demo'
    }).then(res => {
        console.log('Result : ', res.data);
    });
}, []);


  return (
    <div>
      <h1>hello</h1>
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
