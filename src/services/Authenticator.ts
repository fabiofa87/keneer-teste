import * as jwt from 'jsonwebtoken';
import {config} from 'dotenv';

config();

export interface AuthenticationData {
    id: string;
}

export class Authenticator {
    generateToken = (payload: AuthenticationData) => {
        return jwt.sign(
            payload,
            process.env.JWT_KEY!,
            {
                expiresIn: process.env.JWT_EXPIRES_IN,
            }
        )
    }
    getTokenData = (token: string): AuthenticationData => {
        const payload = jwt.verify(token, process.env.JWT_KEY!) as any;
        return {
            id: payload.id
        }
    }
}