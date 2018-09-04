const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const moduleRules = [
    // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
    { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

    // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
    { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },

    { 
        test: /\.scss$/, 
        exclude: /node_modules/, 
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'], 
    },

    {
        test: /\.(jpg|png|gif)$/,
        use: {
            loader: 'file-loader',
            options: {
                outputPath: './images/',
                name:'[name].[ext]',
                publicPath: './../images'
            }
        }
    },
];

module.exports = moduleRules;