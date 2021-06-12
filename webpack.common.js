const path = require('path')

module.exports = {
  entry: {
    tailwind: './src/scripts/tailwind.css.ts',
    pageSpecific: './src/scripts/pagespecific.css.ts',
    home: './src/scripts/customScript.ts'
  },
  // context: path.resolve(__dirname, 'assets'),
  output: {
    filename: './js/[name].bundle.js',
    path: path.resolve(__dirname, './dist')
  }
}
