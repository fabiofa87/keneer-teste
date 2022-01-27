import { Products } from "../entities/Products";
import { BaseDatabase } from "./BaseDatabase";

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

    async getAllProducts(){
            
            const result = await this.connection('keneer_products')
            .select('*')
            .from('keneer_products')
            return result;

        }
        catch(error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
