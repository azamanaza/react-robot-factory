const path = require("path");

export interface AppConfig {
    PORT: string | number;
    distPath: string;
    publicPath: string;
}
const config = {
    PORT: 3000,
    distPath: path.join(__dirname, "../../dist"),
    publicPath: path.join(__dirname, "../../public"),
} as AppConfig;

export default config;