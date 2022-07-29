"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const books_controller_1 = __importDefault(require("../controllers/books.controller"));
const books_middleware_1 = __importDefault(require("../middlewares/books.middleware"));
const router = (0, express_1.Router)();
const booksController = new books_controller_1.default();
router.get('/', booksController.getAll);
router.get('/:id', booksController.getById);
router.post('/', books_middleware_1.default, booksController.create);
router.put('/:id', books_middleware_1.default, booksController.update);
router.delete('/:id', booksController.remove);
exports.default = router;
