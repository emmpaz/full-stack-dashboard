import { PureComponent } from "react";
// import { Line, LineChart, ResponsiveContainer } from "recharts";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


// const data = [
//     {
//       name: 'Page A',
//       uv: 4000,
//       pv: 2400,
//       amt: 2400,
//     },
//     {
//       name: 'Page B',
//       uv: 3000,
//       pv: 1398,
//       amt: 2210,
//     },
//     {
//       name: 'Page C',
//       uv: 2000,
//       pv: 9800,
//       amt: 2290,
//     },
//     {
//       name: 'Page D',
//       uv: 2780,
//       pv: 3908,
//       amt: 2000,
//     },
//     {
//       name: 'Page E',
//       uv: 1890,
//       pv: 4800,
//       amt: 2181,
//     },
//     {
//       name: 'Page F',
//       uv: 2390,
//       pv: 3800,
//       amt: 2500,
//     },
//     {
//       name: 'Page G',
//       uv: 3490,
//       pv: 4300,
//       amt: 2100,
//     },
//   ];

// export default class Graph extends PureComponent { 
//     render() {
//       return (
//           <LineChart width={300} height={100} data={data}>
//             <Line type="monotone" dataKey="pv" stroke="LIME" strokeWidth={2} />
//           </LineChart>
//       );
//     }
//   }

  const data = [
    {
      name: 'Jan',
      Revenue: 4000,
    },
    {
      name: 'Feb',
      Revenue: 3000,
    },
    {
      name: 'Mar',
      Revenue: 2000,
    },
    {
      name: 'Apr',
      Revenue: 2780,
    },
    {
      name: 'May',
      Revenue: 1890,
    },
    {
      name: 'Jun',
      Revenue: 2390,
    },
    {
      name: 'Jul',
      Revenue: 3490,
    },
    {
      name: 'Aug',
      Revenue: 400,
    },
  ];
  
  export default class Graph extends PureComponent {
  
    render() {
      return (
          <BarChart
            width={600}
            height={350}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Revenue" fill="#82ca9d" />
          </BarChart>
      );
    }
  }