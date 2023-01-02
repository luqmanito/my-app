import { Navigate } from "react-router-dom";

const PrivateRoute = (props) => {
  const login = JSON.parse(localStorage.getItem("userInfo"));
  if (!login) 
    return <Navigate to="/forbidden" replace />
  if (login) {
    const auth = login.role
    if (auth !== 'admin')
    return <Navigate to="/forbidden" replace />
    return props.children
  } 
};

export default PrivateRoute;
