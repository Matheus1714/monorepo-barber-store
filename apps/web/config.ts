import {Pathnames} from 'next-intl/navigation';

export const port = process.env.PORT || 3000;
export const host = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:${port}`;

export const defaultLocale = 'pt' as const;
export const locales = ['pt', 'en'] as const;

const duplicateRouteNames = [
  '/',
  '/auth', '/auth', '/auth/register', '/auth/forgot-password', '/auth-recover-passsword',
  'home',
  'history',
  'services', 'services/scheduling'
]

const duplicateRouteNamesDict = {} as { [key: string]: string }

duplicateRouteNames.forEach((value) => duplicateRouteNamesDict[value] = value)

export const pathnames = {
  ...duplicateRouteNamesDict,
  // Obs.: to specify a route name with locale add (route: { pt: 'route_pt', en: 'route_en' })
} satisfies Pathnames<typeof locales>;

export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;