import React from "react";
import { Navigate } from "react-router-dom";
import { useCustomSelector } from "../store/hooks";

interface Props {
  children?: React.ReactNode;
};

const LoginProtect = ({ children }: Props) => {
  const { loading } = useCustomSelector(state => state.loading);
  const { authToken } = useCustomSelector(state => state.token);
  if (!loading && authToken=== "") {
    return children;
  }
  return <Navigate to="/users/users_table" />;
};

export default LoginProtect;