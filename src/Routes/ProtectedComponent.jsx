import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import useStore from '../contexts/useStore'

function ProtectedComponent({children}) {
  const userName = useStore((s) => s.userName)
  const navigate = useNavigate()
  useEffect(() => {
    if(!userName) {
      navigate('/')
    }
  },[userName])
  return (
    <>
      {
          userName && children
      } 
    </>
  )
}

export default ProtectedComponent