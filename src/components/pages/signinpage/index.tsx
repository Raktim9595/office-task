import { useState } from "react";
import SignupPage from "./SignupPage";
import SignInPage from "./SignInPage";

const AuthPage = () => {
  const [signup, setSignup] = useState<boolean>(false);
  const changeSignUp = () => {
    setSignup((prev) => !prev);
  };

  return (
    <>
      {!signup ? (
        <SignInPage changeSignUp={changeSignUp} />
      ) : (
        <SignupPage changeSignUp={changeSignUp} />
      )}
    </>
  );
};

export default AuthPage;
