import React from 'react'

type Props = {
  children: JSX.Element
}

const DefaultLayout = ({ children }: Props) => {
  return (
    <div className="container mx-auto min-h-screen">
      <nav>Menu</nav>
      <div className="w-1/2"> {children} </div>
    </div>
  )
}

export default DefaultLayout
