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

export interface getAllPostsOutputDTO {
    product_name: string,
    photo: string,
}