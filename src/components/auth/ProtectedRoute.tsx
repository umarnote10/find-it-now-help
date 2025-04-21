
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
      toast.error("Please sign in to access this page", {
        description: "You need to be signed in to access this feature."
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
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
