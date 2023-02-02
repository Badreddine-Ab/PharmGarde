import React from 'react'
import Nav from '../components/Nav'
export default function LayoutMobile({children}) {
  return (
    <>
    <Nav />
    {children}
    </>
  )
}
