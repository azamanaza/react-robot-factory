//index.ts (master file for express.Router)

import { Router, Request, Response, NextFunction } from "express";

//import sub-routers
import robotRouter from "./robot";

const router = Router();

router.use('/robots', robotRouter);
// router.use('/', staticRouter);

// logging
router.use((req: Request, res: Response, next: NextFunction): void => {
    console.log(req);
    next();
});

export default router;