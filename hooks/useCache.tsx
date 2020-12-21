import { useContext, useState } from "react"
import { createContext } from "react"

type Metadata = Record<string, any>
interface Run {
    averageSpeed: number
    currentSpeed: number
    distance: number
    id: number //new date milliseconds
    timeElapsed: number
}
export interface Cache {
  runs?: Record<
    string, //this is going to be userid-runid
    {
      metadata?: Record<string, Metadata>
      entity: Run
      values?: Record<string, any>
    }
  >
}


type SetCache = (cache: Cache) => void

interface CacheContextValue {
  cache: Cache
  setCache: SetCache
}

export const CacheContext = createContext({
  cache: {},
  setCache: () => null,
} as CacheContextValue)

export function useCache() {
  const { cache, setCache } = useContext(CacheContext)

  return {
    cache,
    setCache,
  }
}

interface CacheProviderProps {
  children: React.ReactNode
}

export function CacheProvider(props: CacheProviderProps): JSX.Element {
  const { children } = props

  // TODO rehydrate cache from local storage
  const [cache, setCache] = useState({})

  function handleSetCache(data: Cache) {
    setCache({ ...data })
  }

  return (
    <CacheContext.Provider value={{ cache, setCache: handleSetCache }}>
      {children}
    </CacheContext.Provider>
  )
}
