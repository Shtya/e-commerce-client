import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = ({auth , childern}) => {
  if (auth === false) return <Navigate to="/" replace />

  return childern ? childern : <Outlet />
  // Outlet make wrap more element in this moment
  // childern mak wrap one element onlly
}

export default ProtectedRoute