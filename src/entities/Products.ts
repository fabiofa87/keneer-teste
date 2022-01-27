export enum PRODUCT_STATUS {
    ATIVO = "ativo",
    DELETADO = "deletado"
}

export type Products = {
    id: string,
    product_name: string,
    photo: string,
    added_by: string,
    product_status: PRODUCT_STATUS,
}

export interface ProductsInputDTO {
    product_name: string,
    photo: string,
    token: string,
    product_status?: PRODUCT_STATUS
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
        product_status: obj.product_status
    }
}