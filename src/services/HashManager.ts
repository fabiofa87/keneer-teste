import {compareSync, genSaltSync, hashSync} from 'bcryptjs';

export class HashManager {
    createHash = (input: string) => {
        const salt = genSaltSync(12);
        const inputText = hashSync(input, salt);
        return inputText;
    }

    compareHash = (input: string, inputText: string) => {
        return compareSync(input, inputText);
    }
}