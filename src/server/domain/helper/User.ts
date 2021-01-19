import { UserDocument } from "../../models/User";


export class UserHelper {
    readonly name: string;
    readonly email: string;
    readonly createdAt: string;
    readonly updatedAt: string;
    readonly birthDate: string;
    readonly gender: string

    constructor(user: UserDocument) {
        this.name = user.email;
        this.email = user.email;
        this.createdAt = user.createdAt.toLocaleString('pt-BR');
        this.updatedAt = user.updatedAt.toLocaleString('pt-BR');
        this.birthDate = user.birthDate.toLocaleString('pt-BR');
        this.gender = user.getGender();
    }
}