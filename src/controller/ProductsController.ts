import {Request, Response} from 'express';
import { ProductBusiness } from '../business/ProductBusiness';
import { getProductsByIdInputDTO, getProductsByIdOutputDTO, Products, ProductsInputDTO } from '../entities/Products';

export class ProductsController {
    addNewProduct = async (req: Request, res: Response) => {
        try {
            let message = "Product added successfully.";
            
            const token: string = req.headers.authorization as string;
            
            const input: ProductsInputDTO = {
                product_name: req.body.product_name,
                photo: req.body.photo,
                token
            }

            await new ProductBusiness().addNewProduct(input);

            res.status(201).send({
                message
            })
        
        }
        catch(error: any) {
            let message = error.sqlMessage || error.message;
            res.statusCode = 400;
            res.send({ message })
        }
    }
    getAllProducts = async(req: Request, res: Response) => {
        try {
            let message = "Products retrieved successfully.";

            const productsData = new ProductBusiness();
            const result =  await productsData.getAllProducts();


            res.status(200).send({message, result})
        }
        catch(error: any) {
            let message = error.sqlMessage || error.message;
            res.statusCode = 400;
            res.send({ message})
        }
    }
    getProductsById = async(req: Request, res: Response) => {
        try {
            let message = "Product retrieved successfully.";

            const input: getProductsByIdInputDTO = {
                id: req.params.id
            }

            const products: Products = await new ProductBusiness().getProductsById(input.id);

            const output: getProductsByIdOutputDTO = {
                id: products.id,
                product_name: products.product_name,
                photo: products.photo,
                added_by: products.added_by
            }

            res.status(200).send({message, output})
        }
        catch(error: any) {
            let message = error.sqlMessage || error.message;
            res.statusCode = 400;
            res.send({ message})
        }
    }
    deleteProduct = async(req: Request, res: Response) => {
        try {
            let message = "Product deleted successfully.";

            const input: getProductsByIdInputDTO = {
                id: req.params.id
            }

            await new ProductBusiness().deleteProduct(input.id);

            res.status(200).send({message})
        }
        catch(error: any) {
            let message = error.sqlMessage || error.message;
            res.statusCode = 400;
            res.send({ message})
        }
    }
}