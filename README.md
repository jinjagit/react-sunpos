# Sun Inclination Calculator
Calculates and presents details of the sun's inclination for a chosen date and place (latitude, longitude & UTC offset)

## Acknowledgement
- Algorithm to find inclination of sun for specific location and time based on: https://gml.noaa.gov/grad/solcalc/solareqns.PDF

## Resources
- [Tutorial: Intro to React](https://reactjs.org/tutorial/tutorial.html)
- [How to set Parent State from Child Component in ReactJS?](https://www.geeksforgeeks.org/how-to-set-parent-state-from-children-component-in-reactjs/)
- [Adding Bootstrap](https://create-react-app.dev/docs/adding-bootstrap/)
- [recharts](https://recharts.org/en-US/)
- [How to do Simple Form Validation in #Reactjs](https://learnetto.com/blog/react-form-validation)
- [Custom Rechart Toolip](https://github.com/recharts/recharts/issues/275)


## Development Phases
1. Create placeholder child components that can pass values through parent to other child.
- [x] Pass value from parent state to child state (via prop)
- [x] Pass value from child to parent state (via prop)
- [x] Add Bootstrap & basic styling
- [x] Modularize: each component in a separate file
  
screenshot:  
![basic](https://github.com/jinjagit/react-sunpos/blob/main/img/basic.png)
  
2. Develop date-picker
- [x] Pass value from date input to output, via page state
- [x] Clean up basic form styling (use Bootstrap styling)
- [x] Limit dates to 2002 - 2042
  
screenshot:  
![basic](https://github.com/jinjagit/react-sunpos/blob/main/img/datepicker.png)
  
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
![form](https://github.com/jinjagit/react-sunpos/blob/main/img/Screenshot_2022-01-16.png)

6. Calculate sunrise, sunset and meridian of sun (if any), as position is calculated for every minute
- [x] Account for locations which may have 24-hour day or night.  
- [x] Present details in table
- [ ] Add daylight / darkness perceentage graphic and duration details
