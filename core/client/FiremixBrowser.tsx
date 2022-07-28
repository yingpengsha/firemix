import React from 'react'
import { Switch, Route } from 'wouter'
import Layout from '../common/Layout'

export interface FiremixBrowserProps {
  routes: {
    path: string
    component: React.ComponentType<any>
  }[]
}

const FiremixBrowser: React.FC<FiremixBrowserProps> = (props) => {
  const { routes } = props
  return (
    <Layout>
      <Switch>
        {routes.map(route =>
          <Route
          key={route.path}
          path={route.path}
          component={route.component}
          />
        )}
      </Switch>
    </Layout>
  )
}

export default FiremixBrowser
