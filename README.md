# Sun Inclination Calculator
Calculates and presents details of the sun's inclination for a chosen date and place (latitude, longitude & UTC offset)
- Deployed here: https://react-sunpos.simontharby.com/
- Accurate to +/- 1 minute (time), when compared to https://www.timeanddate.com/sun/
- Includes validation of form inputs
- Reasonably responsive layout (mobile x desktop)
- Makes use of Recharts charting library
- I'm still learning the basics of React, so don't take this implementation as exemplary!

## Acknowledgement
- Algorithm to find inclination of sun for specific location and time based on: https://gml.noaa.gov/grad/solcalc/solareqns.PDF

## Resources
- [Tutorial: Intro to React](https://reactjs.org/tutorial/tutorial.html)
- [Adding Bootstrap](https://create-react-app.dev/docs/adding-bootstrap/)
- [Recharts](https://recharts.org/en-US/)
- [How to do Simple Form Validation in #Reactjs](https://learnetto.com/blog/react-form-validation)


## Development Phases
1. Create placeholder components.
- [x] Pass value from parent child (via prop)
- [x] Add Bootstrap & basic styling
- [x] Modularize: each component in a separate file
  
screenshot:  
![basic](https://github.com/jinjagit/react-sunpos/blob/main/img/basic.png)
  
2. Develop date-picker
- [x] Pass value from date input to output
- [x] Clean up basic form styling (use Bootstrap styling)
- [x] Limit dates to 2002 - 2042
  
screenshot:  
![basic chart](https://github.com/jinjagit/react-sunpos/blob/main/img/datepicker.png)
  
3. Develop basic chart plotting that dynamically updates
- [x] Add recharts npm dependency and get basic static example working
- [x] Pass input values to chart and dynamically update chart (simple example)
  
https://user-images.githubusercontent.com/3944042/148815365-f64facbf-4d2a-4019-ab8f-3243356d452f.mov
  
4. Rework simple form to get latitude, longitude and timezone (offset from UTC), and the existing date input
- [x] Rename existing input components (and labels) accordingly
- [x] Add input for timezone offset
- [x] Ensure only valid values can be inputted
- [x] Display useful validation errors and highlight invalid input elements
- [x] Simplify props flow (really only need flow from parents to children)
- [x] Add selection of presets (to showcase and illustrate functionality more easily)
- [x] Improve responsiveness of layout (best on large screen, but now OK on mobile)

screenshot:  
![form](https://github.com/jinjagit/react-sunpos/blob/main/img/form.png)
  
5. Calculate sun position (every minute of day = 1440 data points)  
- [x] Start by passing data to a function (as module) from page component, then on to chart after manipulating data in the function  
- [x] Plot sun's inclination over day

screenshot:  
![chart](https://github.com/jinjagit/react-sunpos/blob/main/img/chart.png)

6. Calculate sunrise, sunset and zenith of sun (if any), as position is calculated for every minute
- [x] Account for locations which may have 24-hour day or night.  
- [x] Present details in table
- [x] Add daylight / darkness percentage graphic and duration details
- [x] Finalise layout

![graphic](https://github.com/jinjagit/react-sunpos/blob/main/img/graphic.png)
