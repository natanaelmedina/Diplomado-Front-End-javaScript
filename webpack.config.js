const path = require('path');

module.exports = {
  entry: './public/js/index.js',
  output: {
    filename: 'build-index.js',
    path: path.resolve(__dirname, './public/js/')
  }
};
