import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { User } from "../domain/models/user.model";
import { UserRepository } from "../domain/repositories/user.repository";
import { UserDto, UserDtoTransformer } from "./dto/user.dto";
import { ApiService } from "./remote/api.service";

@Injectable()
export class UserRepositoryImpl implements UserRepository {

    constructor(private apiService: ApiService) {

    }
    getListUser(params:  any): Observable<User[]> {
        const { urlbase, users } = environment.apis.reqres;
        const url = urlbase + users;
         return this.apiService
        .get(url, params)
        .pipe(map<UserDto, User[]>(dto => new UserDtoTransformer().transform(dto)));
    }

}