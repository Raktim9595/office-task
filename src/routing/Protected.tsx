import { Navigate } from "react-router-dom";
import { useCustomSelector } from "../store/hooks";

interface Props {
  children?: React.ReactNode;
};

const Protected = ({ children }: Props) => {
  const { loading } = useCustomSelector(state => state.loading);
  const user = useCustomSelector(state => state.users);
  if (!loading && !user.id) {
    return <Navigate to={"/auth/create_user"} />
  }

  return children
}

export default Protected;