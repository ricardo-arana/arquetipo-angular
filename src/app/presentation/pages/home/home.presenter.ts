import { Injectable } from "@angular/core";
import { GetListUserQueryHandler } from "src/app/application/queries/get-list-users.query";
import { User } from "src/app/domain/models/user.model";
import { ErrorView } from "../../views/error.view";
import { HomeView } from "../../views/home.view";
import { LoadingView } from "../../views/loading.view";



@Injectable()
export class  HomePresenter {

    homeView: HomeView;
    loadingView: LoadingView;
    errorView: ErrorView;

    constructor( private getListUserQueryHandler: GetListUserQueryHandler) {}

    setView(view: any) {
        this.homeView = view as HomeView;
        this.loadingView = view as LoadingView;
        this.errorView = view as ErrorView;
    }

    async getListUser() {
        this.loadingView.showLoading();
        const query = {
            delay: 3
        };

        try {
            const listUsers: User[] = await this.getListUserQueryHandler.handle(query);
            this.homeView.showListUsers(listUsers);
            this.loadingView.hideLoading();
        } catch (error) {
            this.errorView.showError(error);
        }
    }
    
}