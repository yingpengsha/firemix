import { JsonValue } from 'type-fest'

declare namespace Firemix {
  export type ServerContext = import('koa').ParameterizedContext<any, import('koa-router').IRouterParamContext<any, {}>, any>
  export type Loader = (ctx: ServerContext) => Promise<JsonValue> | JsonValue
  export interface PageModule {
    loader?: Loader
    default: React.ComponentType
  }
}

declare module '*.page.tsx' {
  const Component: React.ComponentType
  export const loader: Firemix.Loader
  export default Component
}
