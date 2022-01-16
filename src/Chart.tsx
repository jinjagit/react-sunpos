import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine, ResponsiveContainer } from 'recharts';

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
          <XAxis
            dataKey="time"
            type="category"
            ticks={[
              '00:00', '01:00', '02:00', '03:00', '04:00', '05:00',
              '06:00', '07:00', '08:00', '09:00', '10:00', '11:00',
              '12:00', '13:00', '14:00', '15:00', '16:00', '17:00',
              '18:00', '19:00', '20:00', '21:00', '22:00', '23:00',
              '23:59'
            ]}
            interval={0}
          />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="sza" stroke="#8884d8" activeDot={false} strokeWidth={2} dot={false} />
          <ReferenceLine y="0.0" stroke="#adadad" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}