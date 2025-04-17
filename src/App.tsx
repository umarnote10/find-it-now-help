
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import DisclaimerPage from "./pages/DisclaimerPage";
import TermsPage from "./pages/TermsPage";
import DmcaPolicyPage from "./pages/DmcaPolicyPage";
import CookiePolicyPage from "./pages/CookiePolicyPage";
import LostItemsPage from "./pages/LostItemsPage";
import FoundItemsPage from "./pages/FoundItemsPage";
import ItemDetailPage from "./pages/ItemDetailPage";
import CreateLostItemPage from "./pages/CreateLostItemPage";
import CreateFoundItemPage from "./pages/CreateFoundItemPage";
import AuthPage from "./pages/AuthPage";
import SearchPage from "./pages/SearchPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/dmca" element={<DmcaPolicyPage />} />
            <Route path="/cookies" element={<CookiePolicyPage />} />
            <Route path="/lost-items" element={<LostItemsPage />} />
            <Route path="/found-items" element={<FoundItemsPage />} />
            <Route path="/item/:id" element={<ItemDetailPage />} />
            <Route path="/post/lost" element={<CreateLostItemPage />} />
            <Route path="/post/found" element={<CreateFoundItemPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
