import React, { useMemo } from 'react';
import { AxisOptions, Chart } from 'react-charts'
 
type MyDatum = { x: number, y: number }

interface MyProps {
  a: number;
  b: number;
}
 
function Plot(props: MyProps) {
  const data = [
    {
      label: 'y',
      data: [
        {
          x: 0,
          y: 0,
        },
        {
          x: props.a,
          y: props.b,
        },
      ],
    },
  ]

  const primaryAxis = useMemo(
    (): AxisOptions<MyDatum> => ({
    min: 0,
    max: 10,
    getValue: datum => datum.x,
    }),
    []
  )

  const secondaryAxes = useMemo(
    (): AxisOptions<MyDatum>[] => [
      {
      min: 0,
      max: 10,
      getValue: datum => datum.y,
      },
    ],
    []
  )

  return (
    <Chart
      options={{
        data,
        primaryAxis,
        secondaryAxes,
      }}
    />
  )
}

export default Plot;
