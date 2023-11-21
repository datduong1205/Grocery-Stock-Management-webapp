var express = require('express');
var router = express.Router();
//const { router } = require('../config/app');
let grocery = require('../models/grocery');
let groceryController = require('../controllers/grocery')
let mongoose = require('mongoose');

// helper function
function requireAuth(req, res, next) {
    if(!req.isAuthenticated())
    {
        return res.redirect('/login')
    }
    next();
}

/* Get route for the Bio grocerys list */
// Read Operation
router.get('/', groceryController.Dislaygrocery);
/* Get route for Add grocery page --> Create */
router.get('/add', requireAuth, groceryController.Addgrocery); 
/* Post route for Add grocery page --> Create */
router.post('/add', requireAuth, groceryController.Processgrocery);
/* Get route for displaying the Edit grocery page --> Update */
router.get('/edit/:id', requireAuth, groceryController.Editgrocery);
/* Post route for processing the Edit grocery page --> Update */
router.post('/edit/:id', requireAuth, groceryController.ProcessEditgrocery);
/* Get to perform Delete Operation --> Delete Operation */
router.get('/delete/:id', requireAuth, groceryController.Deletegrocery);

module.exports = router;