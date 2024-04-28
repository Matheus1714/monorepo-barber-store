import createMiddleware from 'next-intl/middleware';
import {locales, localePrefix} from './navigation';
 
export default createMiddleware({ 
  defaultLocale: 'pt',
  localePrefix,
  locales
});
 
export const config = {
  matcher: ['/', '/(pt|en)/:path*']
};