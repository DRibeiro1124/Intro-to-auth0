// src/Auth/Auth.js

import auth0 from 'auth0-js';




export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'dino1124.auth0.com',
    clientID: 'dl4i_mVMOK1l57Qxwbugj04l5ONSm4dj',
    redirectUri: 'http://localhost:3000/callback',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }
}