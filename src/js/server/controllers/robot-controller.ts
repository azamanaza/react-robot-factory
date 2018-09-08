import * as express from "express";
import * as logger from "morgan";
import * as bodyParser from 'body-parser';

class RobotController {

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
            res.json({
                message: 'Hello World!'
            });
        });
        this.express.use('/', router);
    }

}

export default new RobotController(express()).express;