import { Injectable } from "@angular/core";
import { Failure } from "src/app/domain/error/failure";
import { User } from "src/app/domain/models/user.model";
import { UserRepository } from "src/app/domain/repositories/user.repository";
import { BaseQueryHandler } from "./base.query";



@Injectable()
export class getListUserQuery {
    delay: number;
}

@Injectable()
export class GetListUserQueryHandler implements BaseQueryHandler<Promise<User[]>, getListUserQuery> {

    constructor(private userRepository: UserRepository) {}

    handle(query: getListUserQuery): Promise<User[]> {
        return new Promise( (resolve, reject) => {
            this.userRepository.getListUser(query).subscribe( users => {
                resolve(users);
            }, 
            (error: Failure) => {
                reject(error);
            })
        })
    }
    
}   