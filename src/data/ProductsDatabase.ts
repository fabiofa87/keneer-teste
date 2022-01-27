import { Products } from "../entities/Products";
import { BaseDatabase } from "./BaseDatabase";
import { Request, Response } from "express";

export class ProductsDatabase extends BaseDatabase { 
    async addNewProduct(product: Products) {
        try {
            await this.connection('keneer_products')
            .insert({
                id: product.id,
                product_name: product.product_name,
                photo: product.photo,
                added_by: product.added_by,
            })
        }
        catch(error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    async getAllProducts(req: Request, res: Response){

            const query = req.query.query || '%'
            const sort = req.query.sort || 'price' ? 'price' : 'name'
            const order = req.query.order || 'asc' ? 'asc' : 'desc'
            
            await this.connection('keneer_products')
            .select('*')
            .from('labecommerce_products')
            .where('price', 'like', `%${query}%`)
            .orWhere('name', 'like', `%${query}%`)
            .orderBy(sort, order)
        }
        catch(error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
