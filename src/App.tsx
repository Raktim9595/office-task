import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
import { ChangeToken, LoggedInUser } from "./interfaces/userRedux";
import { getAuthTokemFromLocalStorage, getRefreshTokenStorage } from "./utils/authToken/getAuthToken";
import { refreshTokenAuth } from "./requests/authRequests";

const App = () => {
  const dispatch = useCustomDispatch();
  const { loading } = useCustomSelector(state => state.loading);
  const { authToken } = useCustomSelector(state => state.token);

  const { refetch: tokenRefetch } = useQuery<ChangeToken>({
    queryKey: "refreshToken",
    queryFn: () => refreshTokenAuth({ refreshToken: getRefreshTokenStorage() }).then(res => res.data),
    enabled: false,
    onSuccess: (res) => {
      console.log(res);
      localStorage.setItem("authToken", res.accessToken as string);
      localStorage.setItem("refreshToken", res.refreshToken as string);
      dispatch(setToken({
        authToken: res.accessToken,
        refreshToken: res.refreshToken,
      }))
      userRefetch();
      dispatch(setLoading())
    }
  })

  interface resProps {
    response?: any
  }

  const { refetch: userRefetch } = useQuery({
    queryKey: "loggedInUser",
    enabled: false,
    queryFn: () => getLoggedInUser({
      authToken: getAuthTokemFromLocalStorage(),
    }).then(res => res.data),
    onSuccess: ({ id, email, phoneNumber, name }: LoggedInUser) => {
      dispatch(setUser({
        id,
        email,
        phoneNumber,
        name
      }))
      dispatch(setLoading());
    }, onError: ({ response }: resProps) => {
      if (response.status === 403) {
        console.log("inside 403")
        tokenRefetch();
      } else {
        dispatch(setLoading());
      }
    }
  })

  useEffect(() => {
    const token: string = getAuthTokemFromLocalStorage();
    const refToken: string = getRefreshTokenStorage();
    if (token !== null && refToken !== null) {
      dispatch(setToken({ authToken: `${token}`, refreshToken: `${refToken}`, }));
      userRefetch();
    } else {
      dispatch(setLoading());
    }
  }, [authToken]);

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