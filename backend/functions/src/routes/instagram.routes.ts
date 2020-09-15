import { Router } from "express"
import { get } from "../controllers/instagram.controller";
// import { isAuthenticated } from "../middlewares/auth/authenticated";
// import { isAuthorized } from "../middlewares/auth/authorized";

const router: Router = Router()

router.get('/instagram/:id', [
    // isAuthenticated,
    // isAuthorized({ hasRole: ['admin', 'manager'] }),
    get
]);

export default router



