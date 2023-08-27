import { Navigate } from "react-router-dom";
import { useCustomSelector } from "../store/hooks";

interface Props {
  children?: React.ReactNode;
};

const Protected = ({ children }: Props) => {
  const { authToken } = useCustomSelector(state => state.token);
  const { loading } = useCustomSelector(state => state.loading);
  if (!loading && authToken === "") {
    return <Navigate to={"/auth/create_user"} />
  }

  return children
}

export default Protected;