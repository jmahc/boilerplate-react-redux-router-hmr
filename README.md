# boilerplate-react-redux-router-hmr
*Current Version as of 12/02/2016*: 1.0.1

Welcome to my app! Hopefully this will help with your Webpack 2, HMR, react, react-router, and Redux troubles!

---

## Installation Instructions
1. Clone the repository
  ```sh
  git clone git@github.com:jmahc/boilerplate-react-redux-router-hmr.git boilerplate-application
  ```
2. Change directory to the repository's newly cloned location
  ```sh
  cd boilerplate-application
  ```
3. Install the dependencies
  ```sh
  npm install
  ```
  or if using [Yarn](https://github.com/yarnpkg/yarn)
  ```sh
  yarn
  ```
4. Run your application in Development mode
  ```sh
  npm run dev
  ```
5. Run your application in Production mode (coming soon)
  ```sh
  npm run start
  ```

---

## Included Technologies
Below are the different technologies used in this repository.

### HTML
- [html-webpack-plugin](https://www.npmjs.com/package/html-webpack-plugin)

### React
- Babel
- ES6 syntax
- JSX

### Redux
- [redux-devtools](https://www.npmjs.com/package/redux-devtools)
- No sagas, ducks, etc.

### Styling
- CSS
- [PostCSS](https://github.com/postcss/postcss)
- SASS/SCSS
- [sass-lint](https://www.npmjs.com/package/sass-lint)

### Other
- [yarn](https://yarnpkg.com/)

---

## Repository Roadmap
Below are several tasks that I want to tackle:
- [ ] Individual branches for:
  - [ ] HMR + React (Redux-free & Router-free)
  - [x] HMR + React + Router (Redux-free)
  - [ ] HMR + React + Redux (Router-free)
  - [ ] HMR + React + Redux + Router
- [ ] [Blog post](https://blog.mcardle.tech/) on the process with explanations
- [ ] Testing framework
- [ ] Webpack optimizations
  - [ ] Base configuration file
  - [ ] Unique builds based on `NODE_ENV`
    - [ ] Development
    - [ ] Production
  - [ ] Development
    - [ ] Improved build times
      - [ ] Caching modules
        - [ ] [happypack](https://www.npmjs.com/package/happypack) implementation
  - [ ] Production
    - [ ] [purifycss-webpack-plugin](https://www.npmjs.com/package/purifycss-webpack-plugin) implementation

---

## Resources/Special Thanks
Below are the following sources that allowed me to wind up with this 'working' instance of React, React Router, Hot Module Replacement and Webpack 2!  It was **not** an easy task - believe me!

- Example 1 - [link 1](http://mcardle.tech/)
- Example 2 - [link 2](http://mcardle.tech/)
- Example 3 - [link 3](http://mcardle.tech/)

_____________________________________

Made by: Jordan McArdle
