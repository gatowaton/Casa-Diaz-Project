import { useAuth } from './Context/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute() {
  const { loading, isAuthenticated } = useAuth();

  // If the authentication status is being checked, show a loading indicator
  if (loading) {
    return <h1>Loading...</h1>;
  }

  // If the authentication check is complete and the user is not authenticated,
  // redirect them to the login page
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;





