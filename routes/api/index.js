const router = require(`express`).Router();

const userRoutes = require(`./user-routes`);
const thoughtRoutes = require(`./user-routes`);

router.use('/users', userRoutes);

routeruse('./thoughts', thoughtsRoutes);

module.exports = router;