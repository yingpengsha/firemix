import { useContext } from 'react'
import { FiremixPageDataContext, GLOBAL_DATA_ID } from '../common/FiremixContext'

export default function useLoaderData <T> (): T {
  const pageData = useContext(FiremixPageDataContext)
  if (typeof window !== 'undefined') {
    // @ts-ignore
    return window?.[GLOBAL_DATA_ID] as any
  }
  return pageData
}
