import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

import CustomTheme from "./theme/CustomTheme";
import "./index.css";
import OtpPage from "./components/pages/otpPage/OtpPage";
import PageChangePassword from "./components/pages/ChangePassPage/PageChangePassword";
import AuthPage from "./components/pages/signinpage";
import { useCustomDispatch, useCustomSelector } from "./store/hooks";
import { setToken } from "./store/authTokenSlice";
import { setUser } from "./store/userSlice";
import { setLoading } from "./store/loadingSlice";
import UsersTablePage from "./components/pages/usersTablePage/UsersTablePage";
import Protected from "./routing/Protected";
import LoadingPage from "./components/pages/Loading/LoadingPage";
import LoginProtect from "./routing/ProtectedLoggedIn";
import { useQuery } from "react-query";
import { getLoggedInUser } from "./requests/userRequests";
import { LoggedInUser } from "./interfaces/userRedux";
import { getAuthTokemFromLocalStorage } from "./utils/authToken/getAuthToken";

const App = () => {
  const dispatch = useCustomDispatch();
  const { loading } = useCustomSelector(state => state.loading);

  const { refetch } = useQuery<LoggedInUser>({
    queryKey: "loggedInUser",
    enabled: false,
    queryFn: () => getLoggedInUser({
      authToken: getAuthTokemFromLocalStorage(),
    }).then(res => res.data),
    onSuccess: ({ id, email, phoneNumber, name }) => {
      dispatch(setUser({
        id,
        email,
        phoneNumber,
        name
      }))
      dispatch(setLoading());
    }, onError: () => {
      dispatch(setLoading())
    }
  })

  useEffect(() => {
    const token: string = getAuthTokemFromLocalStorage();
    if (token !== null) {
      dispatch(setToken({ authToken: `${token}` }));
    }
    refetch();
  }, []);

  if (loading) {
    return <LoadingPage />
  }

  return (
    <CustomTheme>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Protected>
            <p>Home</p>
          </Protected>} />
          <Route path="/auth/create_user" element={<LoginProtect>
            <AuthPage />
          </LoginProtect>} />
          <Route path="/auth/otp" element={<LoginProtect>
            <OtpPage />
          </LoginProtect>} />
          <Route path="/auth/change_password" element={<LoginProtect>
            <PageChangePassword />
          </LoginProtect>} />
          <Route path="/users/users_table" element={
            <Protected>
              <UsersTablePage />
            </Protected>
          } />
        </Routes>
      </BrowserRouter>
    </CustomTheme>
  );
};

export default App;