import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceArea, ReferenceLine, ResponsiveContainer } from 'recharts';

interface Props {
  data: {
    sza:  number;
    time: string;
  }[]
}

export default class Chart extends PureComponent <Props> {
  render() {
    return (
      <ResponsiveContainer width='100%' height='100%'>
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
          <ReferenceArea y1={0.0} ifOverflow='extendDomain' fill='hsl(56, 70%, 93%)' />
          <CartesianGrid strokeDasharray='3 3' />
          <ReferenceLine y='-0.0' stroke='#adadad' />         
          <XAxis
            dataKey='time'
            type='category'
            ticks={['00:00', '06:00', '12:00', '18:00', '23:59']}
            interval={0}
          />
          <YAxis tickFormatter={ tick => `${tick}\u02DA` } />
          <Tooltip
            cursor={{ stroke: 'red', strokeWidth: 1 }}
            formatter={(value) => [`${parseFloat(value).toFixed(2)}\u02DA`, 'inclination']}
          />
          <Line type='monotone' dataKey='sza' stroke='#8884d8' activeDot={{ r: 5 }} strokeWidth={2} dot={false} />          
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
