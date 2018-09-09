const path = require('path');
import * as express from "express";
import * as logger from "morgan";
import * as bodyParser from 'body-parser';

class IndexController {

    public express: express.Application;

    constructor(expressInstance: express.Application) {
        this.express = expressInstance;
        this.middleware();
        this.routes();
    }

    // Configure Express middleware.
    private middleware(): void {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    private routes(): void {
        let router = express.Router();
        router.get('/', (req: express.Request, res: express.Response, next) => {
            res.sendFile(path.join(__dirname, "../../../public/index.html"));
        });
        this.express.use('/', router);
    }

}

export default new IndexController(express()).express;