const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

const pluginsConfig = [
    new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "./css/[name].css",
        chunkFilename: "./css/[id].css"
    })
];

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

module.exports = {
    entry: {
        main: ["./src/js/index.tsx", "./src/css/styles.scss"]
    },

    output: {
        filename: "./js/[name].js",
        path: path.resolve("dist")
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: moduleRules
    },

    plugins: pluginsConfig,
    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};