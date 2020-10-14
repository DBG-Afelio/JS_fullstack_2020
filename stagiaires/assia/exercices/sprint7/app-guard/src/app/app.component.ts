import { Component, OnInit } from '@angular/core';
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';
import { AuthConfig } from 'angular-oauth2-oidc';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app-guard';

  public baseUrlApi: string;

  constructor() {
    this.baseUrlApi = environment.baseApiUrl;
    // this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    // this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }
}
