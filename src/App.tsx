import { BrowserRouter, Route, Routes } from "react-router-dom";

import CustomTheme from "./theme/CustomTheme";
import QueryClient from "./queryClient/QueryClient";
import "./index.css";
import OtpPage from "./components/pages/otpPage/OtpPage";
import PageChangePassword from "./components/pages/ChangePassPage/PageChangePassword";
import AuthPage from "./components/pages/signinpage";

const App = () => {
  return (
    <CustomTheme>
      <QueryClient>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<p>App</p>} />
          <Route path="/auth/create_user" element={<AuthPage />} />
          <Route path="/auth/otp" element={<OtpPage />} />
          <Route path="/auth/change_password" element={<PageChangePassword />} />
        </Routes>
        </BrowserRouter>
      </QueryClient>
    </CustomTheme>
  );
};

export default App;