const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: { // live reload
    contentBase:  path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },{
      test: /\.css$/,
      use: [
          // embute arquivos css importados dentro do html
          { loader: 'style-loader' },
          // permite importações de imagens e CSS dentro de arquivos CSS
          { loader: 'css-loader' },
        ]
      },{
        test: /.*\.(svg|gif|png|jpe?g)$/i,
        use: {
          loader: 'file-loader'
        }
      }
    ]
  }
}