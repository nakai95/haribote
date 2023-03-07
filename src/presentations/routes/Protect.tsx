import React from "react";
import { Navigate } from "react-router";

import { LoadingMask } from "../sharedComponents/utilities";

import { useAppState } from "@/presentations/contexts";

export const Protect: React.FC<{
  element: React.ReactNode;
}> = ({ element }) => {
  const { isAuthenticated, isLoading } = useAppState();
  if (isLoading) {
    return <LoadingMask show />;
  }
  return <>{isAuthenticated ? element : <Navigate to="/" replace />}</>;
};
