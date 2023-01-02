import { Navigate } from "react-router-dom";

const PrivateRoute3 = (props) => {
  const login = JSON.parse(localStorage.getItem("userInfo"));
  if (login) 
    return <Navigate to="/" replace />
    return props.children
};

export default PrivateRoute3;
