const rootRule = require('../.eslintrc.js')

module.exports = {
  ...rootRule,
  plugins: ['yceffort-rules'],
  rules: {
    'yceffort-rules/var-length': ['warn', { allowed: ['_'] }],
    'yceffort-rules/default-import': ['warn', { path: ['react', 'lodash'] }],
  },
}
