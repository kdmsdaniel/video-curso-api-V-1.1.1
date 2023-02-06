const { Router } = require('express');
const { getCategories,
        createCategories,
        deleteCategories 
      } = require('../controllers/categories.controller');

const router = Router();

router.get('/categories', getCategories);
router.post('/categories', createCategories);
router.delete('/categories/:id', deleteCategories);

module.exports = router;