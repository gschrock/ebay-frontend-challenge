To build and run: clone the repo, npm install, npm start, then navigate to a browser at http://localhost:3000

Or view it deployed at: [ebay-frontend-challenge]()

Please write a simple web client that will read JSON data from an earthquakes API and populate a list within the main screen. Each earthquake will occupy one item in the list. Please pick some identifying attributes from each earthquake to display. If the magnitude of the quake is equal or greater than 8, then distinguish these visually from other earthquakes in the list. Tapping an earthquake in the list should open a secondary page with details about the earthquake and, if possible, a visualization of where the earthquake occurred. When you've finished writing this application, zip up your entire project directory, or commit it to a public git repository (like GitHub), and send it over.

This should be an example of production quality code and represent your view of a high quality deliverable.

Keep these considerations in mind:

- Use any JavaScript framework you like
- The client should be responsive

Here's the URL for the earthquake data: (geonames.org)[http://api.geonames.org/earthquakesJSON?formatted=true&north=44.1&south=-9.9&east=-22.4&west=55.2&username=mkoppelman]

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
That means the following README documentation below still applies for getting the app running.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
