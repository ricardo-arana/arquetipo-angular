import { Observable } from "rxjs";
import { User } from "../models/user.model";


export abstract class UserRepository {
    abstract getListUser(params:  any): Observable<User[]>;
}