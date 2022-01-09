import React from 'react'
import { AxisOptions, Chart } from 'react-charts'
 
type MyDatum = { date: Date, stars: number }

 
 function MyChart() {
   const data = [
     {
       label: 'React Charts',
       data: [
         {
           date: new Date(),
           stars: 23467238,
         },
       ],
     },
   ]
 
   const primaryAxis = React.useMemo(
     (): AxisOptions<MyDatum> => ({
       getValue: datum => datum.date,
     }),
     []
   )
 
   const secondaryAxes = React.useMemo(
     (): AxisOptions<MyDatum>[] => [
       {
         getValue: datum => datum.stars,
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


export default MyChart;