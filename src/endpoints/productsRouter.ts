import express from 'express';
import {ProductsController} from '../controller/ProductsController';

export const productsRouter = express.Router();
const productsController = new ProductsController();

productsRouter.post('/add', productsController.addNewProduct);
productsRouter.get('/all', productsController.getAllProducts);