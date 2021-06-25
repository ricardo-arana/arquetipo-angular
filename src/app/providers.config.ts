import { getListUserQuery, GetListUserQueryHandler } from "./application/queries/get-list-users.query";
import { UserRepository } from "./domain/repositories/user.repository";
import { BrowserStorage } from "./infrastructure/local/browser.storage";
import { ApiService } from "./infrastructure/remote/api.service";
import { UserRepositoryImpl } from "./infrastructure/user.repository";


export const providers = [
    {provide: UserRepository, useClass: UserRepositoryImpl},
    BrowserStorage,
    getListUserQuery,
    GetListUserQueryHandler,
    ApiService,
];