const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const pluginsConfig = [
    new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "./css/[name].css",
        chunkFilename: "./css/[id].css"
    })
];

module.exports=  pluginsConfig;