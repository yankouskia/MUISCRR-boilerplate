# MUISCRR-boilerplate
Material-UI Styled Components React Redux boilerplate with __offline__ mode support

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

Also there is used `husky` for enabling to run `lint`, `prettier` on `precommit` hook. Developers will not be able to push code, which `smells` or includes `errors`.

## Useful links

- [prettier](https://github.com/prettier/prettier/tree/master/docs)
- [husky](https://github.com/typicode/husky)
- [styled-components](https://www.styled-components.com/)
- [pm2](http://pm2.keymetrics.io/)
- [offline-plugin](https://github.com/NekR/offline-plugin)
