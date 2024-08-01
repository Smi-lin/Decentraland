const path = require('path');

module.exports = {
  // Entry point of your application
  entry: './src/index.js', // Adjust the path as per your project structure

  // Output configuration
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js' // Output filename
  },

  // Resolve configuration
  resolve: {
    // Fallbacks for Node.js core modules
    fallback: {
      assert: require.resolve('assert'),
      fs: false, // or require.resolve('fs')
      http: require.resolve('stream-http'),
      https: require.resolve('https-browserify'),
      os: require.resolve('os-browserify/browser'),
      stream: require.resolve('stream-browserify'),
      tty: require.resolve('tty-browserify'),
      url: require.resolve('url/'),
      zlib: require.resolve('browserify-zlib')
    }
  },

  // Loaders configuration (if needed)
  module: {
    rules: [
      // Add loaders here if required
    ]
  },

  // Plugins configuration (if needed)
  plugins: [
    // Add plugins here if needed
  ],

  // Development server configuration (if needed)
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000, // Specify the port you want to run your development server on
    hot: true // Enable hot module replacement (HMR)
  },

  // Other webpack configuration options go here
};
