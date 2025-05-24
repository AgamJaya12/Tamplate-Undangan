import {  useNavigate } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';
import { ToastProvider } from '@heroui/toast';
import App from '../App';
import { useMemo } from 'react';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

// Gunakan custom `NavigateClerkProvider`
const NavigateClerkProvider = ({children}) => {
  const navigate = useNavigate();
  const clerkNavigate = useMemo(() => (to) => navigate(to), [navigate]);

  return (
    <ClerkProvider
      navigate={clerkNavigate} publishableKey={PUBLISHABLE_KEY}
    >
      {children}
    </ClerkProvider>
  );
};

export default NavigateClerkProvider;
