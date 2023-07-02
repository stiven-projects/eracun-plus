import { QueryClient } from "react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
      cacheTime: 0,
      retry: false,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  },
});