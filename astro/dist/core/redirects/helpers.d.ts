import type { RedirectRouteData, RouteData } from '../../@types/astro.js';
export declare function routeIsRedirect(route: RouteData | undefined): route is RedirectRouteData;
export declare function routeIsFallback(route: RouteData | undefined): route is RedirectRouteData;