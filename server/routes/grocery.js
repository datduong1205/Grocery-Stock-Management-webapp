var express = require('express');
var router = express.Router();
//const { router } = require('../config/app');
let grocery = require('../models/grocery');
let groceryController = require('../controllers/grocery')
/* Get route for the Bio grocerys list */
// Read Operation
router.get('/', groceryController.Dislaygrocery);
/* Get route for Add grocery page --> Create */
router.get('/add', groceryController.Addgrocery); 
/* Post route for Add grocery page --> Create */
router.post('/add', groceryController.Processgrocery);
/* Get route for displaying the Edit grocery page --> Update */
router.get('/edit/:id', groceryController.Editgrocery);
/* Post route for processing the Edit grocery page --> Update */
router.post('/edit/:id', groceryController.ProcessEditgrocery);
/* Get to perform Delete Operation --> Delete Operation */
router.get('/delete/:id', groceryController.Deletegrocery);

module.exports = router;