import React from 'react'
import { Navigate } from 'react-router'
import useStore from '../contexts/useStore'

function ProtectedComponent({children}) {
  const userName = useStore((s) => s.userName)
  return (
    <>
      {
          userName ? 
          children
          : <Navigate to={'/'}/>
      } 
    </>
  )
}

export default ProtectedComponent