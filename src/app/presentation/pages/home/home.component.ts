import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/domain/models/user.model';
import { ErrorView } from '../../views/error.view';
import { HomeView } from '../../views/home.view';
import { LoadingView } from '../../views/loading.view';
import { HomePresenter } from './home.presenter';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [HomePresenter]
})
export class HomeComponent implements OnInit, ErrorView, LoadingView, HomeView {

  loading: boolean = true;
  error = false;
  listUsers: User[] = [];

  constructor(private presenter: HomePresenter) {
    this.initPresenter();
  }

  initPresenter() {
    this.presenter.setView(this);
  }

  showError(message: string): void {
    this.error = true;
  }
  hideError(message: string): void {
    this.error = false;
  }
  showLoading(): void {
    this.loading = true;
  }
  hideLoading(): void {
    this.loading = false;
  }
  showListUsers(users: User[]): void {
    this.listUsers = users;
  }

  async ngOnInit() {
    await this.presenter.getListUser();
  }

}
