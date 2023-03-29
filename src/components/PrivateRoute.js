import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

export { PrivateRoute }

function PrivateRoute() {
  const userRedux = useSelector((x) => x.auth.entity)

  if (!userRedux) {
    return <Navigate to='/signin' />
  }

  return <Outlet />
}
