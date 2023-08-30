import axios, { AxiosError } from "axios";
import React from "react";
import { QueryClient as QueryClientImport, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { useCustomDispatch } from "../store/hooks";
import { removeToken } from "../store/authTokenSlice";

interface Props {
  children?: React.ReactNode;
}

const QueryClient = ({ children }: Props) => {
  const dispatch = useCustomDispatch();

  const query = new QueryClientImport({
    defaultOptions: {
      queries: {
        retry: 1,
        onError: async (err) => {
          if(axios.isAxiosError(err)) {
            const serverError = err as AxiosError;
            console.log("inside main queryclient page");
            if(serverError.response?.status === 403) {
              dispatch(removeToken());
              await query.refetchQueries({
                queryKey: "refreshToken",
                exact: true,
              })
              await query.refetchQueries({
                queryKey: "getAllUsers",
                exact: true,
              })
            }
          }
        }
      }
    }
  });

  return (
    <QueryClientProvider client={query}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  )
}

export default QueryClient