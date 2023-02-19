const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
   mode: "production",
   entry: {
      app: path.resolve(__dirname, "..", "src", "app.ts"),
   },
   output: {
      path: path.join(__dirname, "../public"),
      filename: "[name].js",
      library: 'MyExposedNamespace'
   },
   resolve: {
      extensions: [".ts", ".js"],
      fallback: {
         "os": false, 
         "fs": false,
         "tls": false,
         "net": false,
         "path": false,
         "zlib": false,
         "http": false,
         "https": false,
         "stream": false,
         "crypto": false,
         "browserify": require.resolve('browserify'), //if you want to use this module also don't forget npm i crypto-browserify 
       } 
   },
   module: {
      rules: [
         {
            test: /\.tsx?$/,
            loader: "ts-loader",
            exclude: /node_modules/,
         },
      ],
   },
   plugins: [
      new CopyPlugin({
         patterns: [{from: ".", to: ".", context: "public"}]         
      }),
      
   ],
};