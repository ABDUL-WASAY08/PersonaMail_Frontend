import AuthScreen from "./Screens/AuthScreen";
import LandingScreen from "./Screens/LandingScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import SocialIntegration from "./Screens/SetUpScreen";
import { ProtectRoute } from "./Middleware/ProtectedRoute";
import NotFound from "./Screens/NotFound";
function App() {
  return (
    <>
      <div className="absolte top-0 justify-center align-items-center">
        <Toaster />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingScreen />} />
          <Route path="/Authorization" element={<AuthScreen />} />
          <Route
            path="/InstaSetUp"
            element={
              <ProtectRoute>
                <SocialIntegration />
              </ProtectRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
