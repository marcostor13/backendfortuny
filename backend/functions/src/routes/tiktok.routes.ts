import { Router } from "express"
import { get, getLastPost } from "../controllers/tiktok.controller";
// import { isAuthenticated } from "../middlewares/auth/authenticated";
// import { isAuthorized } from "../middlewares/auth/authorized";

const router: Router = Router()

router.get('/tiktok/:id', [
    // isAuthenticated,
    // isAuthorized({ hasRole: ['admin', 'manager'] }),
    get
]);

router.get('/tiktok/:id/:post', [
    // isAuthenticated,
    // isAuthorized({ hasRole: ['admin', 'manager'] }),
    getLastPost
]);



export default router



