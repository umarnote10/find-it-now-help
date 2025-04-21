
import { 
  createContext, 
  useContext, 
  useState, 
  useEffect, 
  ReactNode 
} from "react";
import { 
  User,
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  signOut, 
  onAuthStateChanged,
  sendPasswordResetEmail,
  updateProfile
} from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase";
import { useNavigate, useLocation } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { toast } from "sonner";

// Define the shape of our auth context
interface AuthContextProps {
  currentUser: User | null;
  isLoading: boolean;
  signUp: (email: string, password: string, displayName?: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  logOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
}

// Create the context
const AuthContext = createContext<AuthContextProps | null>(null);

// Context provider component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const { toast: uiToast } = useToast();

  // Monitor auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setIsLoading(false);
    });

    // Cleanup subscription
    return unsubscribe;
  }, []);

  // Get the redirect path from location state or default to home
  const getRedirectPath = () => {
    const state = location.state as { from?: { pathname: string } };
    const from = state?.from?.pathname || "/";
    return from;
  };

  // Sign up with email/password
  const signUp = async (email: string, password: string, displayName?: string) => {
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      
      // Set display name if provided
      if (displayName && user) {
        await updateProfile(user, { displayName });
      }
      
      toast.success("Account created successfully!");
      const redirectPath = getRedirectPath();
      navigate(redirectPath);
    } catch (error: any) {
      console.error("Sign up error:", error);
      toast.error(`Failed to create account: ${error.message}`);
      throw error;
    }
  };

  // Sign in with email/password
  const signIn = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Signed in successfully!");
      const redirectPath = getRedirectPath();
      navigate(redirectPath);
    } catch (error: any) {
      console.error("Sign in error:", error);
      toast.error(`Failed to sign in: ${error.message}`);
      throw error;
    }
  };

  // Sign in with Google
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      toast.success("Signed in successfully!");
      const redirectPath = getRedirectPath();
      navigate(redirectPath);
    } catch (error: any) {
      console.error("Google sign in error:", error);
      toast.error(`Failed to sign in with Google: ${error.message}`);
      throw error;
    }
  };

  // Log out
  const logOut = async () => {
    try {
      await signOut(auth);
      toast.success("Signed out successfully!");
      navigate("/");
    } catch (error: any) {
      console.error("Sign out error:", error);
      toast.error(`Failed to sign out: ${error.message}`);
      throw error;
    }
  };

  // Reset password
  const resetPassword = async (email: string) => {
    try {
      await sendPasswordResetEmail(auth, email);
      uiToast({
        title: "Password reset email sent",
        description: "Check your email for further instructions."
      });
    } catch (error: any) {
      console.error("Password reset error:", error);
      toast.error(`Failed to send password reset email: ${error.message}`);
      throw error;
    }
  };

  const value = {
    currentUser,
    isLoading,
    signUp,
    signIn,
    signInWithGoogle,
    logOut,
    resetPassword
  };

  return (
    <AuthContext.Provider value={value}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
