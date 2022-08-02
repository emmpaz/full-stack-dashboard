import React, { PureComponent } from "react";
// import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import { PieChart, Pie, Cell } from 'recharts';
import { PieChart, Pie, Sector, ResponsiveContainer, Cell } from 'recharts';
  // const data = [
  //   {
  //     name: 'Jan',
  //     Revenue: 4000,
  //   },
  //   {
  //     name: 'Feb',
  //     Revenue: 3000,
  //   },
  //   {
  //     name: 'Mar',
  //     Revenue: 2000,
  //   },
  //   {
  //     name: 'Apr',
  //     Revenue: 2780,
  //   },
  //   {
  //     name: 'May',
  //     Revenue: 1890,
  //   },
  //   {
  //     name: 'Jun',
  //     Revenue: 2390,
  //   },
  //   {
  //     name: 'Jul',
  //     Revenue: 3490,
  //   },
  //   {
  //     name: 'Aug',
  //     Revenue: 400,
  //   },
  // ];
  
  // export default class Graph extends PureComponent {
  
  //   render() {
  //     return (
  //         <BarChart
  //           width={600}
  //           height={350}
  //           data={data}
  //           margin={{
  //             top: 5,
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
  //           <Bar dataKey="Revenue" fill="#82ca9d" />
  //         </BarChart>
  //     );
  //   }
  // }

  const data = [
    { name: 'On-Site', value: 400, fill: '#e0d0ff'},
    { name: 'Off-Site', value: 300, fill: '#beeeed'},
    { name: 'In-Store', value: 300, fill: '#ffbce3'},
  ];
  // const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];
  const renderActiveShape = (props: { cx: any; cy: any; midAngle: any; innerRadius: any; outerRadius: any; startAngle: any; endAngle: any; fill: any; payload: any; percent: any; value: any; }) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';
  
    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {payload.name}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`$${value}`}</text>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
          {/* {`(Rate ${(percent * 100).toFixed(2)}%)`} */}
        </text>
      </g>
    );
  };
  
  export default class Graph extends PureComponent {
  
    state = {
      activeIndex: 0,
    };
  
    onPieEnter = (_: any, index: any) => {
      this.setState({
        activeIndex: index,
      });
    };
  
    render() {
      return (
          <PieChart width={600} height={600}>
            <Pie
              activeIndex={this.state.activeIndex}
              activeShape={renderActiveShape}
              data={data}
              cx="50%"
              cy="20%"
              innerRadius={60}
              outerRadius={80}
              // fill="#86abf9"
              dataKey="value"
              fill="#fff"
              onMouseEnter={this.onPieEnter}
            />
          </PieChart>
      );
    }
  }