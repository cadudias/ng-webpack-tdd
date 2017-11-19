export default class User {
  constructor($http) {
    'ngInject';

    this._$http = $http;

    // Object to store our user properties
    this.current = null;
  }

   // Try to authenticate by registering or logging in
  sum(n1,n2) {
    return n1+n2;
    // let route = (type === 'login') ? '/login' : '';
    // return this._$http({
    //   url: this._AppConstants.api + '/users' + route,
    //   method: 'POST',
    //   data: {
    //     user: credentials
    //   }
    // }).then(
    //   // On success...
    //   (res) => {
    //     // Store the user's info for easy lookup
    //     this.current = res.data.user;

    //     return res;
    //   }
    // );
  }

}