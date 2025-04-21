import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Lock, Eye, EyeOff, Loader2 } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
const AuthPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState("login");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const {
    signIn,
    signUp,
    signInWithGoogle
  } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
    if (error) setError("");
  };
  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    try {
      if (!credentials.email.trim() || !credentials.password.trim()) {
        throw new Error("Please enter both email and password");
      }
      await signIn(credentials.email, credentials.password);
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
      if (!credentials.email.trim() || !credentials.password.trim()) {
        throw new Error("Please fill in all required fields");
      }
      if (credentials.password !== credentials.confirmPassword) {
        throw new Error("Passwords do not match");
      }
      if (credentials.password.length < 6) {
        throw new Error("Password must be at least 6 characters");
      }
      await signUp(credentials.email, credentials.password);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Failed to create account");
    } finally {
      setIsSubmitting(false);
    }
  };
  return <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight">Welcome to Found It</h2>
          <p className="text-muted-foreground mt-2">Sign in to access your account</p>
        </div>

        <Button variant="outline" onClick={signInWithGoogle} disabled={isSubmitting} className="w-full h-11 bg-gray-950 hover:bg-gray-800 text-slate-50">
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5 mr-2" />
          Continue with Google
        </Button>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with email
            </span>
          </div>
        </div>

        {error && <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>}

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle>Login to your account</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLoginSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input id="email" name="email" type="email" placeholder="you@example.com" value={credentials.email} onChange={handleChange} className="pl-10" required disabled={isSubmitting} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input id="password" name="password" type={showPassword ? "text" : "password"} placeholder="••••••••" value={credentials.password} onChange={handleChange} className="pl-10" required disabled={isSubmitting} />
                      <Button type="button" variant="ghost" size="icon" className="absolute right-1 top-1 h-8 w-8" onClick={() => setShowPassword(!showPassword)} disabled={isSubmitting}>
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        <span className="sr-only">
                          {showPassword ? "Hide password" : "Show password"}
                        </span>
                      </Button>
                    </div>
                  </div>

                  <Button type="submit" disabled={isSubmitting} className="w-full bg-foundit-purple hover:bg-foundit-purpleDark rounded-sm text-base bg-zinc-950 hover:bg-zinc-800 text-slate-50 mx-0 py-0 px-[10px]">
                    {isSubmitting ? <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Signing in...
                      </> : "Sign in"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="register">
            <Card>
              <CardHeader>
                <CardTitle>Create an account</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleRegisterSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="register-email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input id="register-email" name="email" type="email" placeholder="you@example.com" value={credentials.email} onChange={handleChange} className="pl-10" required disabled={isSubmitting} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input id="register-password" name="password" type={showPassword ? "text" : "password"} placeholder="••••••••" value={credentials.password} onChange={handleChange} className="pl-10" required disabled={isSubmitting} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-confirm-password">Confirm Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input id="register-confirm-password" name="confirmPassword" type={showPassword ? "text" : "password"} placeholder="••••••••" value={credentials.confirmPassword} onChange={handleChange} className="pl-10" required disabled={isSubmitting} />
                      <Button type="button" variant="ghost" size="icon" className="absolute right-1 top-1 h-8 w-8" onClick={() => setShowPassword(!showPassword)} disabled={isSubmitting}>
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        <span className="sr-only">
                          {showPassword ? "Hide password" : "Show password"}
                        </span>
                      </Button>
                    </div>
                  </div>

                  <Button type="submit" disabled={isSubmitting} className="w-full bg-foundit-purple hover:bg-foundit-purpleDark text-slate-50 bg-zinc-950 hover:bg-zinc-800 py-[10px]">
                    {isSubmitting ? <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Creating account...
                      </> : "Create account"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <p className="text-sm text-center text-muted-foreground">
          By continuing, you agree to our{" "}
          <a href="/terms" className="text-foundit-purple hover:underline">Terms of Use</a>
          {" "}and{" "}
          <a href="/privacy" className="text-foundit-purple hover:underline">Privacy Policy</a>.
        </p>
      </div>
    </div>;
};
export default AuthPage;