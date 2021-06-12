const path = require('path')

module.exports = {
  entry: {
    tailwind: './src/js/tailwind.css.ts',
    pageSpecific: './src/js/pagespecific.css.ts',
    home: './src/js/customScript.ts'
  },
  // context: path.resolve(__dirname, 'assets'),
  output: {
    filename: './js/[name].bundle.js',
    path: path.resolve(__dirname, './dist')
  }
}
