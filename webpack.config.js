var config = {
  context: __dirname + '/app',
  entry: './index.js',
  output: {
    path: __dirname + '/app',
    filename: 'bundle.js'
  },

  module: {
    rules: [
      //{test: /\.(html)$/, loader: 'raw-loader', exclude: /node_modules/},
      {test:/\.css$/, use: ['style-loader', 'css-loader']},
      {test: /\.(png|svg|jpg|gif|jpeg)$/, use: ['file-loader']},
      { test: /\.(html)$/, loader: "html-loader" },
    ]
  }
};

if (process.env.NODE_ENV === 'production') {
  config.output.path = __dirname +'/dist';
}

module.exports = config;
