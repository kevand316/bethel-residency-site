import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import SmsTerms from "./pages/SmsTerms";
import { Router, Route, Switch } from "wouter";

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router>
            <div className="min-h-screen flex flex-col">
              <Navigation />
              <main className="flex-1 pt-18">
                <Switch>
                  <Route path="/privacy-policy" component={PrivacyPolicy} />
                  <Route path="/sms-terms" component={SmsTerms} />
                  <Route component={Home} />
                </Switch>
              </main>
              <Footer />
            </div>
          </Router>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
