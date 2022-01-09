import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface Props {
  a: number,
  b: number,
}

export default class Rechart extends PureComponent<Props> {
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={[
            {
              x: 0,
              y: 0,
            },
            {
              x: this.props.a,
              y: this.props.b,
            },
          ]}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" type="number" domain={[0, 10]} tickCount={11}/>
          <YAxis dataKey="y" type="number" domain={[0, 10]} tickCount={11}/>
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="y" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
