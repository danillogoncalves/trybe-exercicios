import { Router } from 'express';
import BooksController from '../controllers/books.controller';
import validationBook from '../middlewares/books.middleware';

const router = Router();

const booksController = new BooksController();

router.get('/', booksController.getAll);
router.get('/:id', booksController.getById);
router.post('/', validationBook, booksController.create);
router.put('/:id', validationBook, booksController.update);
router.delete('/:id', booksController.remove);

export default router;