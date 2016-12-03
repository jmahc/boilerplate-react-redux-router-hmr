# Directory: `boilerplate-react-redux-router-hmr/src`
This is the root directory for any and all project files.

## What's in this directory?
```sh
+-- src
    +-- components
    +-- containers
    +-- theme
    +-- util
    +-- entry.js
    +-- routes.js
```

### entry.js
This is the entry point for our application.  It is used by webpack to start including what we need!

### routes.js
These are the routes used by `react-router` and included in `entry.js`.  They are isolated due to a compatibility issue between `react-hot-loader` and `react-router`.
When routes are exported, HMR will include them as *new* routes.  This renders a `console.log` error similar to:
```sh
browser.js:49 Warning: [react-router] You cannot change <Router routes>; it will be ignored
```
