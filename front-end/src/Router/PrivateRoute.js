import { Navigate, Outlet } from 'react-router-dom'
const ProductRout = () => {
return (
  localStorage.getItem('token') ? <Outlet/> : <Navigate to='/'/>
  )
}
export default ProductRout;