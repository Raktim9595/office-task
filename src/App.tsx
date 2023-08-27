import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import CustomTheme from "./theme/CustomTheme";
import QueryClient from "./queryClient/QueryClient";
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

const App = () => {
  const dispatch = useCustomDispatch();
  const { loading } = useCustomSelector(state => state.loading);

  useEffect(() => {
    const token: string = localStorage.getItem("authToken") as string;
    if (token !== null) {
      dispatch(setToken({ authToken: `${token}` }));
      dispatch(setUser({
        id: 1,
        name: "Raktim Thapa",
        email: "apple123456@gmail.com",
        phoneNumber: "9814482973"
      }))
    }
    dispatch(setLoading());
  }, []);

  if (loading) {
    return <LoadingPage />
  }

  return (
    <CustomTheme>
      <QueryClient>
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
      </QueryClient>
    </CustomTheme>
  );
};

export default App;