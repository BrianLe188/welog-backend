import { ObjectId } from "mongoose";
import { EAccountType } from "../../shared/enums";

export class SignPayload {
    _id: string | ObjectId;
    email: string;
    account_type: EAccountType;
}
