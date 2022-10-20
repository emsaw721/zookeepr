const router = require('express').Router();
const keeperRoutes = require('../apiRoutes/keeperRoutes'); 
const animalRoutes = require('../apiRoutes/animalRoutes'); 

router.use(animalRoutes);
router.use(keeperRoutes); 

module.exports = router; 

// using apiRoutes/index.js as central hub for all routing functions we may want to add 
