/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    'src/scripts': {url: '/scripts'},
  },
  plugins: [
    '@snowpack/plugin-babel',
    ['snowpack-plugin-raw-file-loader', {
      exts: ['.glsl'],
    }],
  ],
  optimize: {
    entrypoints: [
      'scripts/index.js',
    ],
    bundle: true,
    minify: true,
    target: 'es2018',
  },
  buildOptions: {
    out: 'dist',
  },
};
