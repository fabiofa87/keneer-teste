import { ProductsDatabase } from "../data/ProductsDatabase";
import { Products, ProductsInputDTO } from "../entities/Products";
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
                added_by: tokenData.id
            }

            await new ProductsDatabase().addNewProduct(product);
        }
        catch(error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}