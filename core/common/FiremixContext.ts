import { createContext } from 'react'

export const GLOBAL_DATA_ID = '__FIREMIX_PAGE_DATA__'

export const FiremixPageDataContext = createContext<any>(null)
export const FiremixPageDataProvider = FiremixPageDataContext.Provider
export const FiremixPageDataConsumer = FiremixPageDataContext.Consumer
