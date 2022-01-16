import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface Props {
  data: {
    sza: number;
    saa: number;
    time: string;
  }[]
}

export default class Chart extends PureComponent <Props> {
  static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={this.props.data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" type="category"/>
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="sza" stroke="#8884d8" activeDot={false} strokeWidth={1} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}