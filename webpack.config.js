const webpack = require('webpack')
const dotenv = require('dotenv')

module.exports = {
    entry: './src/index.js',
    plugins: [
        // ...
        new webpack.DefinePlugin({
           'process.env': JSON.stringify(dotenv.config().parsed) // it will automatically pick up key values from .env file
        })
        // ...
      ],
    module: {
        rules: [
            {
                test:/\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },

            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  "style-loader",
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
            },
            {
                test: /\.svg$/i,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      encoding: false,
                    },
                  },
                ],
            },

        ],
    },
    resolve:{
        extensions: ['*', '.js', '.jsx']
    },

    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist',
        port: 9000,
        historyApiFallback:true
    }
};