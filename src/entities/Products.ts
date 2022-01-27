export type Products = {
    id: string,
    product_name: string,
    photo: string,
    added_by: string,
}

export interface ProductsInputDTO {
    product_name: string,
    photo: string,
    token: string,
}

export interface getProductsByIdInputDTO {
    id: string,
}

export interface getProductsByIdOutputDTO {
    id: string,
    product_name: string,
    photo: string,
    added_by: string,
}

export const toProductsModel = (obj: any): Products => {
    return {
        id: obj.id,
        product_name: obj.product_name,
        photo: obj.photo,
        added_by: obj.added_by,
    }
}