const webpack = require("webpack")
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "production",
    devtool: "source-map",
    plugins: [
        new webpack.DefinePlugin({
            'process.env.name': JSON.stringify('Codevolution')
        }),
        new BundleAnalyzerPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
            chunkFilename: "[id].[contenthash].css"
        })
    ]
}