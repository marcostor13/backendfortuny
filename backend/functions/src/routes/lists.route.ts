import { Router } from "express"
import { create, addUpdateInfluencerToList, all, get, patch, remove, removeInfluencerToList } from "../controllers/lists.controller";
import { isAuthenticated } from "../middlewares/auth/authenticated";
import { isAuthorized } from "../middlewares/auth/authorized";

const router: Router = Router()

router.post('/lists',
    isAuthenticated,
    isAuthorized({ hasRole: ['admin'] }),
    create
);

router.patch('/add-influencer-to-list', [
    isAuthenticated,
    isAuthorized({ hasRole: ['admin', 'manager'], allowSameUser: true }),
    addUpdateInfluencerToList
]);

router.get('/lists/', [
    isAuthenticated,
    isAuthorized({ hasRole: ['admin', 'manager'] }),
    all
]);

router.get('/lists/:uid', [
    isAuthenticated,
    isAuthorized({ hasRole: ['admin', 'manager'], allowSameUser: true }),
    get
]);

router.patch('/lists/:id', [
    isAuthenticated,
    isAuthorized({ hasRole: ['admin', 'manager'], allowSameUser: true }),
    patch
]);

router.delete('/lists/:id', [
    isAuthenticated,
    isAuthorized({ hasRole: ['admin', 'manager'] }),
    remove
]);

router.delete('/remove-influencer-to-list/:influencerid/:listid', [
    isAuthenticated,
    isAuthorized({ hasRole: ['admin', 'manager'] }),
    removeInfluencerToList
]);

export default router





