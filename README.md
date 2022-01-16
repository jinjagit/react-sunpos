# Useful Resources
- [Tutorial: Intro to React](https://reactjs.org/tutorial/tutorial.html)
- [How to set Parent State from Child Component in ReactJS?](https://www.geeksforgeeks.org/how-to-set-parent-state-from-children-component-in-reactjs/)
- [Adding Bootstrap](https://create-react-app.dev/docs/adding-bootstrap/)
- [Free timezone API](https://timezonedb.com/)
- [React-google-maps click to get coordinates](https://stackoverflow.com/questions/61776224/react-google-maps-click-the-map-to-get-coordinates)
- [Adding a Map and Markers to a React Application](https://developers.google.com/maps/documentation/javascript/react-map)
- [react-charts](https://react-charts.tanstack.com/docs/overview)
- [react-charts quick example](https://www.npmjs.com/package/react-charts#quick-example)
- [chart.js](https://www.chartjs.org/docs/latest/)
- [react-chartjs-2](https://www.npmjs.com/package/react-chartjs-2)
- [How to use chart.js to create charts in React](https://www.educative.io/edpresso/how-to-use-chartjs-to-create-charts-in-react)
- [recharts](https://recharts.org/en-US/)
- [React Bootstrap icons](https://www.npmjs.com/package/react-bootstrap-icons)
- [How to do Simple Form Validation in #Reactjs](https://learnetto.com/blog/react-form-validation)

# Plan
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
- [x] start by passing data to a function (as module) from page component, then on to chart after manipulating data in the function  
- [x] plot sun's inclination over day

screenshot:  
![form](https://github.com/jinjagit/react-sunpos/blob/main/img/Screenshot_2022-01-16.png)

6. Calculate sunrise, sunset and zenith of sun (if any), as position is calculated for every minute  

7. Plot sun's path = inclination x direction. Hovering over points = shows time  
  
8. Develop location setter (map?) returns latitude & longitude 
  
9. Set timezone, including adjustment for summer/winter changes? (probably need to use API) 





# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
