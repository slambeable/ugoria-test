module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/ugoria-test/'
    : '/',
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.xls.?$/,
          use: {
            loader: 'xls-loader',
          },
        },
      ],
    },
  },
};
