// src/pages/OAuthCallbackPage.jsx
import { useEffect } from "react";
import { useAuth, useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const OAuthCallbackPage = () => {
  const navigate = useNavigate();
  const { isSignedIn } = useUser();
  const { isLoaded } = useAuth();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      navigate("/"); // Redirect setelah berhasil login
    }
  }, [isLoaded, isSignedIn, navigate]);

  return <p className="text-center mt-20">Menyelesaikan login...</p>;
};

export default OAuthCallbackPage;
