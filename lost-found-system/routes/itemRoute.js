const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

router.post('/add', itemController.addItem);
router.get('/all', itemController.items);
router.get('/Unclaimed', itemController.getUnclaimedItems);
router.get('/:id', itemController.getItemById);
router.put('/:id', itemController.updateItem);
router.delete('/:id', itemController.deleteItem);

module.exports = router;
