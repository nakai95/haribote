import { useCallback, useState } from "react";

import { ApplicationException } from "@/domains/errors";

export const useError = () => {
  const [error, setError] = useState<ApplicationException | null>(null);
  const clearError = useCallback(() => setError(null), [setError]);

  return {
    error,
    setError,
    clearError,
  };
};
