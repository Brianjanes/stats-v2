import "./styles/Main.css";
import React from "react";
import Header from "./components/Header.js";
import RandomBackground from "./components/RandomBackground.jsx";
import DashBoard from "./routes/Dashboard.jsx";
import Profile from "./routes/Profile.jsx";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
  SignIn,
  SignUp,
  RedirectToSignIn,
} from "@clerk/clerk-react";
import { dark, neobrutalism, shadesOfPurple } from "@clerk/themes";

if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key. I wrote this Error.");
}

const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

const ClerkProviderWithRoutes = () => {
  const navigate = useNavigate();
  // const savedTournamentData = useGetTournaments();

  return (
    <ClerkProvider
      publishableKey={clerkPubKey}
      navigate={(to) => navigate(to)}
      appearance={{ baseTheme: [dark, shadesOfPurple] }}
    >
      <div className="App">
        <Header />
        <RandomBackground />
        <Routes>
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/profile" element={<Profile />} />

          <Route
            path="/sign-in/*"
            element={<SignIn routing="path" path="/sign-in" />}
          />
          <Route
            path="/sign-up/*"
            element={<SignUp routing="path" path="/sign-up" />}
          />
          <Route path="/profile" element={<Profile />} />
          {/* <Route
            path="/dashboard"
            element={<DashBoard savedTournamentData={savedTournamentData} />}
          /> */}
          <Route
            path="/protected"
            element={
              <>
                <SignedIn>
                  <DashBoard />
                </SignedIn>
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              </>
            }
          />
        </Routes>
      </div>
    </ClerkProvider>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <ClerkProviderWithRoutes />
    </BrowserRouter>
  );
};

export default App;
