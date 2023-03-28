import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

export { PrivateRoute }

function PrivateRoute() {
  const auth = useSelector((x) => x.auth.entity)

  if (!auth) {
    return <Navigate to='/signin' />
  }

  return <Outlet />
}
