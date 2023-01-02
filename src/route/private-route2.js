import { Navigate } from "react-router-dom";

const PrivateRoute2 = (props) => {
  const login = JSON.parse(localStorage.getItem("userInfo"));
  if (!login) 
    return <Navigate to="/login" replace />
    return props.children
};

export default PrivateRoute2;
