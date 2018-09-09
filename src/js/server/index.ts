import * as http from "http";
import * as path from "path";

var expressListRoutes = require("express-list-routes");

import config, { AppConfig } from "./config";

import * as express from "express";
import * as bodyParser from "body-parser";
import router from "./routes";
console.log(expressListRoutes(router));
class App {

    private app: express.Application;
    private configOptions: AppConfig;
    private router : express.Router;

    constructor(config: any, router: express.Router) {
        this.configOptions = config;
        this.router = router;
        this.app = express();
        this.config();         
    }

    getApp() {
        return this.app;
    }

    private config(): void{
        this.getApp().use(bodyParser.json());
        this.getApp().use(bodyParser.urlencoded({ extended: false }));
        // serving static files 
        // console.log(this.configOptions.distPath);

        this.getApp().use(express.static(this.configOptions.distPath));

        router.use((req: express.Request, res: express.Response, next: express.NextFunction): void => {
            console.log(req.baseUrl);
            console.log(req.params);
            next();
        });

        this.getApp().use(express.static(path.join(this.configOptions.rootPath, "/coverage/lcov-report")));
        this.getApp().get("/test-coverage", (req: express.Request, res: express.Response) => {            
            res.status(200).sendFile(path.join(this.configOptions.rootPath, "/coverage/lcov-report/index.html"));
        });
        this.getApp().get("/", (req: express.Request, res: express.Response) => {            
            res.status(200).sendFile(path.join(this.configOptions.publicPath, "/index.html"));
        });

        this.getApp().use(this.router);

    }
}

http.createServer((new App(config, router)).getApp()).listen(config.PORT, () => {
    console.log('Express server listening on port ' + config.PORT);
});