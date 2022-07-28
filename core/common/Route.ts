import { parse } from 'regexparam'
import { FiremixBrowserProps } from '../client/FiremixBrowser'

export interface Route {
  path: string
  module: () => Promise<Firemix.PageModule>
}

export function routeMather (route: string, path: string): boolean {
  return parse(route).pattern.test(path)
}

export const genClientRoutes = async (routes: Route[]): Promise<FiremixBrowserProps['routes']> => {
  return Promise.all(routes.map(async route => ({
    path: route.path,
    component: (await route.module()).default
  })))
}
