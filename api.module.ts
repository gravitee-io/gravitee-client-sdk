import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { APIService } from './api/aPI.service';
import { AnalyticsService } from './api/analytics.service';
import { ApplicationsService } from './api/applications.service';
import { AuthenticationService } from './api/authentication.service';
import { DocumentationService } from './api/documentation.service';
import { PortalService } from './api/portal.service';
import { SubscriptionService } from './api/subscription.service';
import { UserService } from './api/user.service';
import { UsersService } from './api/users.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    APIService,
    AnalyticsService,
    ApplicationsService,
    AuthenticationService,
    DocumentationService,
    PortalService,
    SubscriptionService,
    UserService,
    UsersService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
