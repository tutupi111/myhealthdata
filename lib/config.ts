/**
 * App (login/dashboard) runs on subdomain app.myhealthdata.foundation.
 * Main site is www.myhealthdata.foundation; login and post-login dashboard live on app.
 *
 * For "Enter Dashboard" to show on www after login, the app must set a cookie
 * with domain=.myhealthdata.foundation (e.g. LOGGED_IN_COOKIE_NAME=1) on successful login.
 */
export const APP_BASE_URL =
  process.env.NEXT_PUBLIC_APP_URL ?? "https://app.myhealthdata.foundation";

/** Cookie name the app sets on login so www can show "Enter Dashboard". Use domain=.myhealthdata.foundation. */
export const LOGGED_IN_COOKIE_NAME = "mhdf_logged_in";

export type AppRole = "patient" | "researcher" | "admin";

/** Login URL for app with role: e.g. .../login?role=patient */
export function getAppLoginUrl(role: AppRole): string {
  return `${APP_BASE_URL}/login?role=${role}`;
}

/** Dashboard/管理中心 entry after login (app root or dashboard path) */
export function getAppDashboardUrl(): string {
  return APP_BASE_URL;
}
