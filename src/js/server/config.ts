const path = require("path");

export interface AppConfig {
    PORT: string | number;
    rootPath: string;
    distPath: string;
    publicPath: string;
}

const projectRoot = path.join(__dirname, "../..");
const config = {
    PORT: 3000,
    rootPath: projectRoot,
    distPath: path.join(projectRoot, "/dist"),
    publicPath: path.join(projectRoot, "/public"),
} as AppConfig;

export default config;