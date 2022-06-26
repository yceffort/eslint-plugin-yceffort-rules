const rootRule = require('../.eslintrc.js')

module.exports = {
  ...rootRule,
  plugins: ['import-yceffort'],
  rules: {
    'import-yceffort/var-length': 'warn',
    'import-yceffort/import-react': 'warn',
  },
}
