/**
 * Gravitee.io Portal Rest API
 * API dedicated to the devportal part of Gravitee
 *
 * The version of the OpenAPI document: 3.0.0
 * Contact: contact@graviteesource.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { ConfigurationPortal } from './configurationPortal';
import { ConfigurationPlan } from './configurationPlan';
import { ConfigurationAnalytics } from './configurationAnalytics';
import { ConfigurationAuthentication } from './configurationAuthentication';
import { ConfigurationApplication } from './configurationApplication';
import { Enabled } from './enabled';
import { ConfigurationScheduler } from './configurationScheduler';
import { ConfigurationCompany } from './configurationCompany';
import { ConfigurationDocumentation } from './configurationDocumentation';


export interface ConfigurationResponse { 
    company?: ConfigurationCompany;
    portal?: ConfigurationPortal;
    authentication?: ConfigurationAuthentication;
    scheduler?: ConfigurationScheduler;
    documentation?: ConfigurationDocumentation;
    plan?: ConfigurationPlan;
    apiReview?: Enabled;
    analytics?: ConfigurationAnalytics;
    application?: ConfigurationApplication;
}

