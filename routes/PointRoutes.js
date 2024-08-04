import express from 'express';
import dbRepository from '../dataBase/db_repository.js';
import util from '../utils/util.js';
import routes from '../utils/routes.js';

const router = express.Router();



router.get(routes.api.category.get, async (req, res) => {
    const data = await dbRepository.getCategories()
    if (!data.status.ok) {
        return util.log(routes.api.category.get, data.status.code, req.socket.remoteAddress);
    }
    res.send(data);
});

router.post(routes.api.point.get, async (req, res) => {
    const data = await dbRepository.getPoints(req.body.categoryType)
    console.log(data)
    if (!data.status.ok) {
        return util.log(routes.api.point.get, data.status.code, req.socket.remoteAddress);
    }
    res.send(data);
});

export default router;