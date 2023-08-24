import React from "react";
import { QueryClient as QueryClientImport, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const query = new QueryClientImport();
interface Props {
  children?: React.ReactNode;
}

const QueryClient = ({ children }: Props) => {
  return (
    <QueryClientProvider client={query}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  )
}

export default QueryClient