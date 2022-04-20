const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@src': 'src',
    '@views': 'src/views',
    '@functions': 'src/functions',
    '@components': 'src/components',
    '@assets': 'src/assets',
  })(config);

  return config;
};