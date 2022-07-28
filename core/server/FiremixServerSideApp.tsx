import React, { ComponentType } from 'react'
import { JsonValue } from 'type-fest'
import Layout from 'core/common/Layout'
import { FiremixPageDataProvider } from 'core/common/FiremixContext'

interface Props {
  pageData: JsonValue
  Component: ComponentType
}

export default function getFiremixServerSideApp (params: Props) {
  const { pageData, Component } = params
  const FiremixServerSideApp: React.FC = () => {
    return (
      <FiremixPageDataProvider value={pageData}>
        <Layout pageData={pageData}>
          <Component />
        </Layout>
      </FiremixPageDataProvider>
    )
  }
  return FiremixServerSideApp
}
