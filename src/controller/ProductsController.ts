import {Request, Response} from 'express';
import { ProductBusiness } from '../business/ProductBusiness';
import { ProductsInputDTO } from '../entities/Products';

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
            res.send({ message})
        }
    }
}