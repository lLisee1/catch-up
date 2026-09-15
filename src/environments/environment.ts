/**
 * Production environment configuration for the application.
 * This file contains settings and variables specific to the development environment.
 * It is used to configure the application during development and testing.
 */
export const environment = {
  production: true,
  newsProviderApiBaseUrl: 'https://newsapi.org/v2',
  newsProviderNewsEndpointPath: '/top-headlines',
  newsProviderSourcesEndpointPath: '/top-headlines/sources',
  newsProviderApiKey: '60d828f15966496bb41f77fe7fa6df99',
  logoProviderApiBaseUrl: 'https://img.logo.dev',
  logoProviderPublishableKey: 'pk_XN7hZs2CSkivbW2T3of9hA',
};
