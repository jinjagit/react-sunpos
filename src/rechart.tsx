import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface Props {
  longitude: number,
  latitude: number,
}

export default class Rechart extends PureComponent <Props> {
  render() {
    return (
      <div className='chart container'>
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
                x: this.props.longitude,
                y: this.props.latitude,
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
            <Line type="monotone" dataKey="y" stroke="#8884d8" activeDot={{ r: 6 }} isAnimationActive={false} strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
