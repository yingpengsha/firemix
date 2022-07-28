import { useCallback, useState } from 'react'

export default function useForceRerender () {
  const [, setState] = useState({})
  const forceRerender = useCallback(() => {
    setState({})
  }, [])
  return forceRerender
}
