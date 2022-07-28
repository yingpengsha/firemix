import Koa from 'koa'
import Router from 'koa-router'
import logger from 'koa-logger'
import fileServe from 'koa-static'
import bodyParser from 'koa-body'

import { Route, routeMather } from './common/Route'
import handleRequest from '@/entry.server'
import getFiremixServerSideApp from './server/FiremixServerSideApp'

export function createServerApp (routes: Route[] = [], options?: {port?: number}) {
  const server = new Koa()
  const router = new Router()

  router.get('/(.*)', async (ctx, next) => {
    const { path } = ctx
    const route = routes.find(route => routeMather(route.path, path))
    const module = await route?.module()
    if (module) {
      ctx.body = handleRequest(getFiremixServerSideApp({
        pageData: await module.loader?.(ctx),
        Component: module.default
      }))
    }
    next()
  })

  return server
    .use(logger())
    .use(fileServe('.'))
    .use(bodyParser({ multipart: true }))
    .use(router.routes())
    .use(router.allowedMethods())
    .listen(options?.port ?? 3000, '0.0.0.0', () =>
      console.log('listening on http://localhost:3000 ...')
    )
}
