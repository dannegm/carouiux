const development = require('./.webpack/webpack.config.dev');
const production = require('./.webpack/webpack.config.prod');

module.exports = () => {
  if (process.env.NODE_ENV === 'production') {
    return production;
  }
  return development;
};
