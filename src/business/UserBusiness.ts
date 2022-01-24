import { SignupInputDTO, User } from "../entities/User";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";

export class UserBusiness {
    async signup(input: SignupInputDTO): Promise<string> {
        try {
            if(!input.name || !input.email || !input.password){
                throw new Error('"Name", "Email" and "Password" are required.')
            }

            const idGenerator = new IdGenerator();
            const id = idGenerator.generate();

            const hashManager = new HashManager();
            const encriptedPassword = await hashManager.createHash(input.password);
            
            const user: User = {
                id,
                name: input.name,
                email: input.email,
                password: encriptedPassword
            }

            const userDatabase = new UserDatabase();
            await userDatabase.insertUser(user);

            const tokenManager = new Authenticator();
            const token: string = tokenManager.generateToken({id})

            return token;

        }
        catch(error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}