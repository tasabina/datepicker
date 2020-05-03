const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const PATHS = {
    src: path.join(__dirname, '../src'),
    dist: path.join(__dirname, '../dist'),
    assets: 'assets/'
}
module.exports = {
    watch: true,
    externals : { paths: PATHS },
    entry:{
        datepicker: PATHS.src
    },
    output: {
        filename: `${PATHS.assets}js/[name].js`,
        path: PATHS.dist,
        publicPath:'/'
    },
    module:{
        rules: [{
            test:/\.js$/,
            loader: 'babel-loader',
            exclude: '/node_modules/'
        },
        {
            test:/\.(png|jpeg|gif|svg)$/,
            loader: 'file-loader',
            options:{
                name: '[name].[ext]'
            }
        },
        {
            test:/\.scss$/,
            use: [
                'style-loader',
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {}
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        config: { path: `${PATHS.src}/config/postcss.config.js`}
                    }
                },
                {
                    loader: 'sass-loader',
                    options: {}
                }
              ],
        },
        {
            test:/\.css$/,
            use: [
                'style-loader',
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {}
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        config: { path: `${PATHS.src}/config/postcss.config.js`}
                    }
                }
              ],
        }
    ]
    },
    plugins: [
        new MiniCssExtractPlugin({
          filename: `${PATHS.assets}css/[name].css`,
        }),
        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/index.html`,
            filename: 'index.html'
        }),
        new CopyWebpackPlugin([
            {from: `${PATHS.src}/img`, to: `${PATHS.assets}img`}
        ])
      ],

}