import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const authToken = Cookies.get('jwt-token');
  const auth = !!authToken;

  if (!auth) return <Navigate to="/signin" />;

  return <>{children}</>;
};

export const UnprotectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const authToken = Cookies.get('jwt-token');
  const auth = !!authToken;

  if (auth) return <Navigate to="/" />;

  return <>{children}</>;
};

export const AuthenticatedComponent: React.FC<ProtectedRouteProps> = ({ children }) => {
  const authToken = Cookies.get('jwt-token');
  const auth = !!authToken;

  return auth ? <>{children}</> : null;
};
