import { EAccountType } from "../../shared/enums";

export class CreateUserDTO {
    email: string;
    password: string;
    account_type: EAccountType;
}
