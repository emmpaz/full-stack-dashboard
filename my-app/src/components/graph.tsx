import axios from "axios";
import React, { PureComponent, useState } from "react";
// import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import { PieChart, Pie, Cell } from 'recharts';
import { PieChart, Pie, Sector, ResponsiveContainer, Cell } from 'recharts';
import { Campaign } from "../helper files/types";

  const calculateOnSite = (tmpCampaigns: Campaign[]) => {
    var onSiteRevenue = 0;

    tmpCampaigns.forEach( (element) => {
      if(element.channel == "On-Site")
            onSiteRevenue+=element.budget;
      })

    console.log(onSiteRevenue);
    return (onSiteRevenue as number);
  }

  const data = [
    { name: 'On-Site', value: {calculateOnSite}, fill: '#e0d0ff'},
    { name: 'Off-Site', value: 200, fill: '#beeeed'},
    { name: 'In-Store', value: 200, fill: '#ffbce3'},
  ];
  
  const fetchCampaigns = () => {
    axios.get(`https://ps-springboot.azurewebsites.net/campaigns`).then((res) => {
    console.log(res);
    return(res.data);
    })
    .catch((err) => {
    console.log(err);
    });
};

  

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
  
  export type GraphProps = {
    onSiteRevenue: number,
    inStoreRevenue: number,
    offSiteRevenue: number
  }

  export default class Graph extends PureComponent<GraphProps> {

    constructor(props: GraphProps) {
      super(props);
    }
    state = {
      activeIndex: 0,
    };
  
    onPieEnter = (_: any, index: any) => {
      this.setState({
        activeIndex: index,
      });
    };
  
    render() 

      {
      return (
          <PieChart width={600} height={600}>
            <Pie
              activeIndex={this.state.activeIndex}
              activeShape={renderActiveShape}
              data={[
                { name: 'On-Site', value: this.props.onSiteRevenue, fill: '#e0d0ff'},
                { name: 'Off-Site', value: this.props.offSiteRevenue, fill: '#beeeed'},
                { name: 'In-Store', value: this.props.inStoreRevenue, fill: '#ffbce3'},
              ]}
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