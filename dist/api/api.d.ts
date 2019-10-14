export * from './aPI.service';
import { APIService } from './aPI.service';
export * from './analytics.service';
import { AnalyticsService } from './analytics.service';
export * from './applications.service';
import { ApplicationsService } from './applications.service';
export * from './authentication.service';
import { AuthenticationService } from './authentication.service';
export * from './documentation.service';
import { DocumentationService } from './documentation.service';
export * from './portal.service';
import { PortalService } from './portal.service';
export * from './subscription.service';
import { SubscriptionService } from './subscription.service';
export * from './user.service';
import { UserService } from './user.service';
export * from './users.service';
import { UsersService } from './users.service';
export declare const APIS: (typeof APIService | typeof AnalyticsService | typeof ApplicationsService | typeof AuthenticationService | typeof DocumentationService | typeof PortalService | typeof SubscriptionService | typeof UserService | typeof UsersService)[];
