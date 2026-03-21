import { Navigate, useLocation } from "react-router-dom";
import Userstore from "../Store/useUserStore";
export const ProtectRoute = ({ children }) => {
  const { isAuthenticated } = Userstore();
  const location = useLocation();
  if (!isAuthenticated) {
    return <Navigate to="/Authorization" state={{ from: location }} replace />;
  }
  return children;
};
