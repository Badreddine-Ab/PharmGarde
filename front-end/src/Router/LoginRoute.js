import { Navigate, Outlet } from 'react-router-dom'
const LoginRoute = () => {
return (
  !localStorage.getItem('token') ? <Outlet/> : <Navigate to='/pharmasier'/>
  )
}
export default LoginRoute;