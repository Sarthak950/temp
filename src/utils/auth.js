import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const checkAuthentication = () => {
  // Implement your authentication logic here
  const isAuthenticated = true/* Add your authentication logic here */;
  return isAuthenticated;
};

const ProtectedRoute = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    if (!checkAuthentication()) {
      router.push('/signin'); // Redirect to the sign-in page
    }
  }, [router]);

  return <>{children}</>;
};

export default ProtectedRoute;
