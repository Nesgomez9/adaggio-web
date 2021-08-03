import { AccountModel } from './account';

export class AuthModel {
  static currentAccount = new AccountModel();
  static isAuthenticated = false;
  static serverDiffDate = 0;
}
