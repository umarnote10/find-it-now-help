
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin, Mail, Phone, Lock, Eye, EyeOff, Loader2, AlertCircle } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import { Alert, AlertDescription } from "@/components/ui/alert";

const AuthPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState("login");
  const [loginMethod, setLoginMethod] = useState<"email" | "phone">("email");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  
  const { signIn, signUp, signInWithGoogle, currentUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as { from?: { pathname: string } })?.from?.pathname || "/";
  
  const [credentials, setCredentials] = useState({
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    displayName: ""
  });
  
  useEffect(() => {
    // If user is already logged in, redirect them
    if (currentUser) {
      navigate(from, { replace: true });
    }
  }, [currentUser, navigate, from]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
    
    // Clear error when user types
    if (error) setError("");
  };
  
  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    
    try {
      if (loginMethod === "email") {
        if (!credentials.email.trim() || !credentials.password.trim()) {
          throw new Error("Please enter both email and password");
        }
        await signIn(credentials.email, credentials.password);
      } else {
        toast.error("Phone authentication not yet implemented");
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Failed to sign in");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    
    try {
      if (loginMethod === "email") {
        if (!credentials.email.trim() || !credentials.password.trim()) {
          throw new Error("Please fill in all required fields");
        }
        
        if (credentials.password !== credentials.confirmPassword) {
          throw new Error("Passwords do not match");
        }
        
        if (credentials.password.length < 6) {
          throw new Error("Password must be at least 6 characters");
        }
        
        await signUp(
          credentials.email, 
          credentials.password,
          credentials.displayName || undefined
        );
      } else {
        toast.error("Phone authentication not yet implemented");
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Failed to create account");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleGoogleSignIn = async () => {
    setIsSubmitting(true);
    setError("");
    
    try {
      await signInWithGoogle();
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Failed to sign in with Google");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  return (
    <div className="foundit-container my-12">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <MapPin className="h-8 w-8 text-foundit-purple" />
          </div>
          <h1 className="text-2xl font-bold">Welcome to Found It</h1>
          <p className="text-gray-600 mt-2">Sign in to access your account</p>
        </div>
        
        <Tabs defaultValue="login" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-2 w-full mb-6">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>
          
          {error && (
            <Alert variant="destructive" className="mb-6">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          
          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>
                  Enter your credentials to access your account
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleLoginSubmit}>
                  <div className="mb-6">
                    <Tabs defaultValue="email" value={loginMethod} onValueChange={(v) => setLoginMethod(v as "email" | "phone")}>
                      <TabsList className="grid grid-cols-2 w-full mb-4">
                        <TabsTrigger value="email">Email</TabsTrigger>
                        <TabsTrigger value="phone">Phone</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="email">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              placeholder="you@example.com"
                              value={credentials.email}
                              onChange={handleChange}
                              className="pl-10"
                              required
                              disabled={isSubmitting}
                            />
                          </div>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="phone">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              placeholder="+1 (123) 456-7890"
                              value={credentials.phone}
                              onChange={handleChange}
                              className="pl-10"
                              required
                              disabled={isSubmitting}
                            />
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                      <Button variant="link" type="button" className="p-0 h-auto text-xs font-normal">
                        Forgot password?
                      </Button>
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        value={credentials.password}
                        onChange={handleChange}
                        className="pl-10"
                        required
                        disabled={isSubmitting}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-1 top-1 h-8 w-8"
                        onClick={togglePasswordVisibility}
                        disabled={isSubmitting}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        <span className="sr-only">
                          {showPassword ? "Hide password" : "Show password"}
                        </span>
                      </Button>
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-foundit-purple hover:bg-foundit-purpleDark"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Signing In...
                      </>
                    ) : "Sign In"}
                  </Button>
                  
                  <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t border-gray-300"></span>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-white px-2 text-gray-500">Or continue with</span>
                    </div>
                  </div>
                  
                  <Button 
                    type="button"
                    variant="outline"
                    className="w-full"
                    onClick={handleGoogleSignIn}
                    disabled={isSubmitting}
                  >
                    <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" 
                      alt="Google" 
                      className="mr-2 h-4 w-4" 
                    />
                    Google
                  </Button>
                </form>
              </CardContent>
              
              <CardFooter className="flex flex-col">
                <div className="text-sm text-gray-500 text-center mt-2">
                  Don't have an account?{" "}
                  <Button 
                    variant="link" 
                    onClick={() => setActiveTab("register")} 
                    className="p-0 h-auto text-foundit-purple"
                    disabled={isSubmitting}
                  >
                    Create one
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="register">
            <Card>
              <CardHeader>
                <CardTitle>Create an account</CardTitle>
                <CardDescription>
                  Enter your details to create a new account
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleRegisterSubmit}>
                  <div className="space-y-4 mb-6">
                    <div className="space-y-2">
                      <Label htmlFor="displayName">Full Name</Label>
                      <Input
                        id="displayName"
                        name="displayName"
                        type="text"
                        placeholder="John Doe"
                        value={credentials.displayName}
                        onChange={handleChange}
                        disabled={isSubmitting}
                      />
                    </div>
                    
                    <Tabs defaultValue="email" value={loginMethod} onValueChange={(v) => setLoginMethod(v as "email" | "phone")}>
                      <TabsList className="grid grid-cols-2 w-full mb-4">
                        <TabsTrigger value="email">Email</TabsTrigger>
                        <TabsTrigger value="phone">Phone</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="email">
                        <div className="space-y-2">
                          <Label htmlFor="register-email">Email</Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input
                              id="register-email"
                              name="email"
                              type="email"
                              placeholder="you@example.com"
                              value={credentials.email}
                              onChange={handleChange}
                              className="pl-10"
                              required
                              disabled={isSubmitting}
                            />
                          </div>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="phone">
                        <div className="space-y-2">
                          <Label htmlFor="register-phone">Phone Number</Label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input
                              id="register-phone"
                              name="phone"
                              type="tel"
                              placeholder="+1 (123) 456-7890"
                              value={credentials.phone}
                              onChange={handleChange}
                              className="pl-10"
                              required
                              disabled={isSubmitting}
                            />
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="register-password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="register-password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          value={credentials.password}
                          onChange={handleChange}
                          className="pl-10"
                          required
                          disabled={isSubmitting}
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="absolute right-1 top-1 h-8 w-8"
                          onClick={togglePasswordVisibility}
                          disabled={isSubmitting}
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          <span className="sr-only">
                            {showPassword ? "Hide password" : "Show password"}
                          </span>
                        </Button>
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="register-confirm-password">Confirm Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="register-confirm-password"
                          name="confirmPassword"
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          value={credentials.confirmPassword}
                          onChange={handleChange}
                          className="pl-10"
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Button 
                      type="submit" 
                      className="w-full bg-foundit-purple hover:bg-foundit-purpleDark"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Creating Account...
                        </>
                      ) : "Create Account"}
                    </Button>
                  </div>
                  
                  <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t border-gray-300"></span>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-white px-2 text-gray-500">Or continue with</span>
                    </div>
                  </div>
                  
                  <Button 
                    type="button"
                    variant="outline"
                    className="w-full"
                    onClick={handleGoogleSignIn}
                    disabled={isSubmitting}
                  >
                    <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" 
                      alt="Google" 
                      className="mr-2 h-4 w-4" 
                    />
                    Google
                  </Button>
                </form>
              </CardContent>
              
              <CardFooter className="flex flex-col">
                <div className="text-sm text-gray-500 text-center mt-2">
                  Already have an account?{" "}
                  <Button 
                    variant="link" 
                    onClick={() => setActiveTab("login")} 
                    className="p-0 h-auto text-foundit-purple"
                    disabled={isSubmitting}
                  >
                    Sign in
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
        
        <p className="text-sm text-gray-500 text-center mt-8">
          By signing up, you agree to our{" "}
          <a href="/terms" className="text-foundit-purple hover:underline">Terms of Use</a>{" "}
          and{" "}
          <a href="/privacy" className="text-foundit-purple hover:underline">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
