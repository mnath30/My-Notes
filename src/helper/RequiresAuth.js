import { useAuth } from "../context";
import { Navigate, useLocation } from "react-router-dom";

const RequiresAuth = ({ children }) => {
  const {
    authState: { encodedToken, fullname },
  } = useAuth();
  const location = useLocation();

  return encodedToken && fullname ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export { RequiresAuth };
