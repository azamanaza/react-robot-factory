const path = require("path");

const externals = require("./common/externals");
const moduleRules = require("./common/rules");
const plugins = require("./common/plugins");

const commonConfig = {

    entry: {
        main: ["./src/js/index.tsx", "./src/css/styles.scss"]
    },

    output: {
        filename: "./js/[name].js",
        path: path.resolve("dist")
    },

    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: moduleRules
    },

    plugins: plugins,

    externals: externals
    
}

module.exports = commonConfig;