/* eslint-disable prettier/prettier */

const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
    entry: "./src/index.js",
    mode: process.env.NODE_ENV === "production" ? "production" : "development",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "main.js",
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader,'style-loader', "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
            },
        ],
    },
    devtool: process.env.NODE_ENV === "production" ? false : "source-map",
    plugins: [
        new CopyPlugin({
        patterns: [
          { from: "static", to: "static" },
        ],
        }),
        new HtmlWebpackPlugin({
            template: "./index.html",
        }),
        new MiniCssExtractPlugin(),
    ],
    optimization: {
        minimizer: ["...", new CssMinimizerPlugin()],
    },
};