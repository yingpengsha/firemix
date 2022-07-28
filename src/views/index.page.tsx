import React from 'react'
import useLoaderData from 'core/client/useLoaderData'

interface Props {

}

export const loader = () => {
  return 'Maybe I lose myself.'
}

const Homepage: React.FC<Props> = () => {
  const data = useLoaderData<ReturnType<typeof loader>>()

  return (
    <div>
      <div>I lose myself tonight.</div>
      <div>{data}</div>
    </div>
  )
}

export default Homepage
