const { Router } = require('express');
const booksValidade = require('../middlewares/booksValidade');
const booksController = require('../controllers/booksController');

const router = Router();

router.get('/', booksController.findAll);
router.get('/:id', booksController.findByPk);
router.post('/', booksValidade, booksController.create);
router.put('/:id', booksValidade, booksController.update);
router.delete('/:id', booksController.destroy);

module.exports = router;
