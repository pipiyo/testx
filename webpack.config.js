module.exports = {  
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  context: __dirname,
  entry: {
    app: ['./src/app.jsx']
  },
  output: {
    path: './public/js',
    filename: 'bundle.js',
    publicPath: '/public/js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react', 'stage-0'],
          plugins: ['transform-decorators-legacy', 'babel-plugin-react-html-attrs']
        }
      }
    ]
  }
}