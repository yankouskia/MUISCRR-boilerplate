# MUISCRR-boilerplate

Material-UI Styled Components React Redux boilerplate with __offline__ mode support can be used for creating single-page applications with mentioned tchnologies stack. Mobile and desktop versions are supported.

# Demo

[You can find Christmas Demo here!:christmas_tree::santa:](http://ec2-54-174-9-9.compute-1.amazonaws.com:3000/)
- desktop version :computer:
- mobile version :iphone:
- offline mode :up:

## Technologies

- [React](https://reactjs.org/) A JavaScript library for building user interfaces
- [Material-UI next](https://material-ui-next.com/) React components that implement Google's Material Design
- [Redux](https://redux.js.org/) Predictable state container for JavaScript apps
- [Redux-Saga](https://redux-saga.js.org/) Easier managing application side effects
- [Immutable.js](https://facebook.github.io/immutable-js/docs/) Immutable data for much simpler application development
- [React-Router](https://reacttraining.com/react-router/) Collection of navigational components that compose declaratively with your application
- [Styled-Components](https://www.styled-components.com/) Visual primitives for the component age
- [Offline-plugin](https://github.com/NekR/offline-plugin) Provides an offline experience for webpack projects
- [PM2](http://pm2.keymetrics.io/) Advanced, production process manager for Node.js
- [Babel](https://babeljs.io/) Use next generation JavaScript
- [ESLint](https://eslint.org/) The pluggable linting utility for JavaScript and JSX
- [Husky](https://github.com/typicode/husky) Git hooks made easy
- [Prettier](https://prettier.io) Opinionated code formatter
- [Webpack](https://webpack.js.org/) Bundler
- [Cypress](https://www.cypress.io/) Fast, easy and reliable testing for anything that runs in a browser.

## Environment

Please, be sure of using latest version of Node.js `8.*.*` and npm `5.*.*` for correct work

## How to use

- For running in development
```
git clone https://github.com/yankouskia/MUISCRR-boilerplate.git
npm install
npm run dev
```

- For running in production
```
git clone https://github.com/yankouskia/MUISCRR-boilerplate.git
npm install
npm start
```

### Development

- `npm run dev` - run webpack in development build with watch and server concurrently
- `npm run build:dev` - run build in development mode with watch
- `npm run serve:dev` - run server in development

### Production

- `npm run start` - run webpack in production mode and server with `pm2`
- `npm run build` - run build in production mode
- `npm run serve` - run server in production with pm2


## Tools

- `npm run clean` - clean build directory
- `npm run lint` - run lint checker
- `npm run prettier` - run prettier for beautifying code
- `npm run lintfix` - run linter in fix mode for editing errors, which it is able to

## Contribution

Feel free to create issues and PRs :smiley:
