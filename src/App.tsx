import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";
import {
  ProtectedRoute,
  UnprotectedRoute,
  AuthenticatedComponent,
} from "./function/Auth";
import { Sidebar } from "./layouts/sidebar";
import { Navbar } from "./layouts/navbar";
import { Main } from "./layouts/main";
import { Signin } from "./layouts/signin";
import { Signup } from "./layouts/signup";
import '@radix-ui/themes/styles.css';

function App() {
  const [auth, setAuth] = useState(!!Cookies.get("jwt-token"));

  useEffect(() => {
    console.log("Is Authenticated:", auth);
  }, [auth]);

  return (
      <Router>
        <AuthenticatedComponent>
          <Navbar />
          <Sidebar />
        </AuthenticatedComponent>
        <Routes>
          <Route
            path="/signin"
            element={
              <UnprotectedRoute>
                <Signin setAuth={setAuth} />
              </UnprotectedRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <UnprotectedRoute>
                <Signup setAuth={setAuth} />
              </UnprotectedRoute>
            }
          />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Main />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
  );
}

export default App;
