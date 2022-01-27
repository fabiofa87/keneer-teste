import { ProductsDatabase } from "../data/ProductsDatabase";
import { Products, ProductsInputDTO, PRODUCT_STATUS } from "../entities/Products";
import { AuthenticationData, Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export class ProductBusiness {
    async addNewProduct(input: ProductsInputDTO) {
        try {
            const tokenManager = new Authenticator()
            if(!input.token) throw new Error("Invalid token")

            const tokenData: AuthenticationData = tokenManager.getTokenData(input.token)

            const idGenerator = new IdGenerator();
            const id: string = idGenerator.generate();

            const product: Products = {
                id,
                product_name: input.product_name,
                photo: input.photo,
                added_by: tokenData.id,
                product_status: input.product_status || PRODUCT_STATUS.ATIVO
            }

            await new ProductsDatabase().addNewProduct(product);
        }
        catch(error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
    async getAllProducts() {
        try {
            const userData = new ProductsDatabase();
            const products = await userData.getAllProducts();

            return products;
        }
        catch(error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
    async getProductsById(id: string) {
        try {
            const products: Products = await new ProductsDatabase().getProductsById(id);

            if(!products) throw new Error("Product not found")

            return products;
        }
        catch(error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
    async deleteProduct(id: string) {
        try {
            const userData = new ProductsDatabase();
            await userData.deleteProduct(id);
        }
        catch(error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}