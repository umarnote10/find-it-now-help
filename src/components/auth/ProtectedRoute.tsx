
import { ReactNode, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { currentUser, isLoading } = useAuth();
  const location = useLocation();

  useEffect(() => {
    if (!isLoading && !currentUser) {
      toast.error("Authentication Required", {
        description: "Please sign in or create an account to access this feature.",
        duration: 5000
      });
    }
  }, [currentUser, isLoading]);

  if (isLoading) {
    return (
      <div className="h-[50vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-foundit-purple"></div>
      </div>
    );
  }

  if (!currentUser) {
    // Redirect to auth page with the current location saved so we can redirect back after login
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
