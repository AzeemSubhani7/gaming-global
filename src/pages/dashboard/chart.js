import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const Chart  = (props) => {
  const data = [
    {
      name: '2020',
      user: 0,
      post: 0,
      amt: 0,
    },
    {
      name: '2021',
      user: props.user,
      post: props.post,
      amt: props.user + props.post,
    }
  ];
  
  return(
    <ResponsiveContainer width="100%" height="100%">
      <div className=' p-20 flex items-center justify-center'>
        <LineChart
          width={500}
          height={500}
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
          <Line  type="monotone" dataKey="post" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line  type="monotone" dataKey="user" stroke="#82ca9d" />
        </LineChart>
        </div>
      </ResponsiveContainer>
  )
}


export default Chart; 
