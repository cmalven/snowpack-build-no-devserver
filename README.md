# Snowpack Build without Dev Server

> Simple example of using Snowpack for unbundled development without using the built-in dev server. Suitable for use in projects that have their own server, such as PHP, Craft CMS, Ruby on Rails, etc.

## Available Scripts

### npm start

Watches for changes in `/src/scripts` and outputs those changes to `/dist/scripts` 

### npm run build

Bundles and minifies files to the `/dist` folder using [esbuild](https://github.com/evanw/esbuild).
