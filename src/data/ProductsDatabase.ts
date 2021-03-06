import { Products, toProductsModel } from "../entities/Products";
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
                product_status: product.product_status
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
            .where({product_status: 'ativo'})
            // .orWhere({product_status: 'deletado'})
            return result;

        }

    async getProductsById(id: string){
        try {
            const result: any = await this.connection('keneer_products')
            .select('*')
            .where({id})

            return toProductsModel(result[0])
        }
        catch(error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
    async deleteProduct(id: string){
        try {
            await this.connection('keneer_products')
            .where({id})
            .update({product_status: 'deletado'})
        }
        catch(error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
    }
