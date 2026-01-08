import { Navigate } from "react-router-dom";

const Protected = () => {

const isLoggedIn = false;

if(!isLoggedIn){
    return <Navigate to="/login" replace />;
}
 
  return <h2>Protected Page</h2>;
};

export default Protected;