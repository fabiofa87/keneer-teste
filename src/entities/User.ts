export interface SignupInputDTO {
    name: string,
    email: string,
    password: string
}
    

export interface LoginInputDTO {
    email: string,
    password: string
}

export type User = {
        id: string,
        name: string,
        email: string,
        password: string,
    }

export const toUserModel = (obj: any): User => {
        return obj && {
            id: obj.id,
            name: obj.name,
            email: obj.email,
            password: obj.password
        }
    }