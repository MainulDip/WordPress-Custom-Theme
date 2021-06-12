module.exports = {
  plugins:
    process.env.NODE_ENV === 'production'
      ? [
          require('tailwindcss'),
          require('postcss-nested'),
          require('autoprefixer'),
          require('cssnano')({
            preset: [
              'default',
              {
                discardComments: {
                  removeAll: true
                }
              }
            ]
          })
        ]
      : [
          require('tailwindcss'),
          require('postcss-nested'),
          require('autoprefixer')
        ]
}
