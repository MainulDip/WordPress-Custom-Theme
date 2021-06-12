const path = require('path')

module.exports = {
  entry: {
    tailwind: './src/js/tailwind.css.js',
    pageSpecific: './src/js/pagespecific.css.js',
    home: './src/js/customScript.js'
  },
  // context: path.resolve(__dirname, 'assets'),
  output: {
    filename: './js/[name].bundle.js',
    path: path.resolve(__dirname, './dist')
  }
}
