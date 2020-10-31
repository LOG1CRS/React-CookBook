<h1> <img src="https://github.com/LOG1CRS/React-CookBook/blob/master/public/cookbook-icon.png" width="30px"> React Cookbook </h1>

React Cookbook is a website that shows recipes from Spoonacular API, made with React, React-Router, Material-UI, and hosted with Firebase hosting. React cookbook is designed so that anyone can find a recipe quickly, supporting PWA to improve user experience on mobile.

## Project Media

![](https://github.com/LOG1CRS/React-CookBook/blob/master/src/assets/static/home-example.jpg)
![](https://github.com/LOG1CRS/React-CookBook/blob/master/src/assets/static/scroll-example.jpg) ![](https://github.com/LOG1CRS/React-CookBook/blob/master/src/assets/static/recipe-example.jpg)

## Getting Started

Follow the steps below to run the project locally.

### Installation

#### 1. Clone the repo
```sh
git clone https://github.com/LOG1CRS/React-CookBook.git
```
#### 2. Install project dependencies
```sh
npm install
```
#### 3. Get an API key at: [Spoonacular API](https://spoonacular.com/food-api)
#### 4. Make a .env.local file in the root of the project. <br />
#### 5. Enter your API key in .env.local file as REACT_APP_API_KEY = 'YOUR API KEY' 

## Project Scripts

```sh
npm start
```
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
```sh
npm run build
```
Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.
```sh
npm run server
```
Run a local test server from the build folder to test it before deploying<br />
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/LOG1CRS/React-CookBook/blob/master/LICENSE) file for more details.

## What did I learned from this project?

* Custom react hooks
* How to make a PWA application
* Fetching data
* Infinite scrolling
* Material UI
* Deploy with Heroku and Firebase hosting
