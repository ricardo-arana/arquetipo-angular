import { User } from "src/app/domain/models/user.model";


export interface HomeView {
    showListUsers(user: User[]): void;
}