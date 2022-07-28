import { Route } from 'core/common/Route'

const routes: Route[] = [
  {
    path: '/',
    module: () => import('./views/index.page')
  }
]

export default routes
