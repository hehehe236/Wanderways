/**
 * Clears all cookies for the current domain and path.
 *
 * This function iterates over each cookie available for the current domain,
 * extracts the cookie name, and then sets an empty value with an expiration
 * date in the past to delete each cookie. Only cookies associated with the
 * current domain and path (`/`) will be cleared.
 *
 * Usage:
 * Simply call `clearCookies()` to remove all cookies tied to the current
 * domain and path.
 *
 * Note:
 * - This function will not remove cookies set for other domains, subdomains,
 *   or paths outside of `/`.
 * - Cookies with `HttpOnly` or different `path` attributes may not be accessible
 *   or removed by this function due to browser security policies.
 */

export const clearCookies = () => {
    document.cookie.split(';').forEach((cookie) => {
        const [name] = cookie.split('=');
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    });
};
