const router = require(`express`).Router();

const userRoutes = require(`./user-routes`);

const thoughtsRoutes = require(`./thought-routes`);

router.use('/users', userRoutes);

routeruse('./thoughts', thoughtsRoutes);

module.exports = router;