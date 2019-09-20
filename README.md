# discoverNews
discoverNews is an application for searching through the news, provided by The New York Times. Users can save articles that they want to read later.

## Live Link to Front End
https://discover-pods-frontend.herokuapp.com/

*You will notice the name of this app was originally discoverPods. We all pivot, sometimes. :)*

## Live Link to Back End and its respective repo  
https://discover-podcasts.herokuapp.com/

https://github.com/ahawkz/discover-podcasts

## Technologies Used
MongoDB, Express, Node.JS, React, NYT API

## Installation
- Fork both repos and clone them to your local machine in separate directories.
- npm init
- Make sure to run the backend and frontend on separate servers.

## User Stories
- User can search via the New York Times API for news based on search query (ex. Philadelphia loads top ten recent results regarding Philadelphia)
- User can view the article by clicking on the link provied by the API
- User can save articles to a "myNews" list to read later
- User can delete news from "myNews" list once the article has been read

## Original wireframes
![Wireframe One](/wireframes/wireframe_1.png)
![Wireframe Two](/wireframes/Wireframe_2.png)
![Wireframe Three](/wireframes/wireframe_3.png)

## Project Status
This project was created in September 2019.

### Future goals for this project are:
- a component below the search bar that has blocks of news genres (politics, sports, etc) that the user clicks on, which takes you to a separate view with the top ten results of that genre.
- adding images to results
- add more CSS styling
- have results load in chronological order
- are results only loading article titles with query in them?


## Notes from initializing CRA:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
